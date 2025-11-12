import React, { useState } from 'react'
import { cn } from '@/lib/utils'

interface InfiniteSliderProps {
  children: React.ReactNode
  gap?: number
  speed?: number
  speedOnHover?: number
  className?: string
}

export function InfiniteSlider({
  children,
  gap = 24,
  speed = 50,
  speedOnHover,
  className,
}: InfiniteSliderProps) {
  const [currentSpeed, setCurrentSpeed] = useState(speed)

  const handleMouseEnter = () => {
    if (speedOnHover !== undefined) {
      setCurrentSpeed(speedOnHover)
    }
  }

  const handleMouseLeave = () => {
    setCurrentSpeed(speed)
  }

  return (
    <div
      className={cn('overflow-hidden relative', className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="flex animate-infinite-scroll"
        style={{ 
          gap: `${gap}px`,
          animationDuration: `${60 / currentSpeed}s`,
        }}
      >
        {children}
        {children}
      </div>
    </div>
  )
}