'use client'

import { useEffect } from 'react'

export default function LuxuryShimmerProvider() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight
      document.documentElement.style.setProperty('--mouse-x', x.toFixed(3))
      document.documentElement.style.setProperty('--mouse-y', y.toFixed(3))
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return null
}
