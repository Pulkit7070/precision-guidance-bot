import React from 'react';
import { cn } from '@/lib/utils';

interface InfiniteSliderProps {
  children: React.ReactNode;
  speed?: number;
  speedOnHover?: number;
  gap?: number;
  className?: string;
}

export function InfiniteSlider({
  children,
  speed = 40,
  speedOnHover = 20,
  gap = 112,
  className,
}: InfiniteSliderProps) {
  const [hovering, setHovering] = React.useState(false);
  const currentSpeed = hovering ? speedOnHover : speed;

  return (
    <div
      className={cn('relative overflow-hidden', className)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div
        className="flex w-fit animate-infinite-scroll"
        style={{
          gap: `${gap}px`,
          animationDuration: `${currentSpeed}s`,
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
