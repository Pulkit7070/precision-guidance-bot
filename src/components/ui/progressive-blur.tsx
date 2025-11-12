import React from 'react'
import { cn } from '@/lib/utils'

interface ProgressiveBlurProps {
  direction?: 'left' | 'right' | 'top' | 'bottom'
  blurIntensity?: number
  className?: string
}

export function ProgressiveBlur({
  direction = 'right',
  blurIntensity = 1,
  className,
}: ProgressiveBlurProps) {
  const getGradientDirection = () => {
    switch (direction) {
      case 'left':
        return 'to left'
      case 'right':
        return 'to right'
      case 'top':
        return 'to top'
      case 'bottom':
        return 'to bottom'
      default:
        return 'to right'
    }
  }

  return (
    <div
      className={cn('pointer-events-none', className)}
      style={{
        background: `linear-gradient(${getGradientDirection()}, 
          rgba(255, 255, 255, 0) 0%, 
          rgba(255, 255, 255, ${blurIntensity}) 100%)`,
        mixBlendMode: 'overlay',
      }}
    />
  )
}