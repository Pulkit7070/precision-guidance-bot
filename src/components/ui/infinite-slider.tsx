import React, { useEffect, useRef, useState } from 'react'
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
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scrollContent = container.querySelector('[data-scroll-content]') as HTMLElement
    if (!scrollContent) return

    let animationId: number
    let scrollPosition = 0

    const animate = () => {
      scrollPosition += currentSpeed / 1000
      if (scrollPosition >= scrollContent.scrollWidth / 2) {
        scrollPosition = 0
      }
      container.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [currentSpeed])

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
      ref={containerRef}
      className={cn('overflow-hidden', className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <div
        data-scroll-content
        className="flex"
        style={{ gap: `${gap}px` }}
      >
        {children}
        {children}
      </div>
    </div>
  )
}