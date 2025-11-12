import { cn } from '@/lib/utils';

interface ProgressiveBlurProps {
  className?: string;
  direction?: 'left' | 'right' | 'top' | 'bottom';
  blurIntensity?: number;
}

export function ProgressiveBlur({
  className,
  direction = 'left',
  blurIntensity = 1,
}: ProgressiveBlurProps) {
  const gradientDirection = {
    left: 'to right',
    right: 'to left',
    top: 'to bottom',
    bottom: 'to top',
  }[direction];

  return (
    <div
      className={cn('pointer-events-none', className)}
      style={{
        background: `linear-gradient(${gradientDirection}, rgba(255,255,255,${blurIntensity}) 0%, rgba(255,255,255,0) 100%)`,
        backdropFilter: `blur(${blurIntensity * 4}px)`,
      }}
    />
  );
}
