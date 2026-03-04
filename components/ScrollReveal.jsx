'use client'
import { useEffect, useRef } from 'react'

export default function ScrollReveal({ children, className = '', direction = 'bottom', delay = 0 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('sr-visible'), delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.12 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`sr-hidden sr-from-${direction} ${className}`}>
      {children}
    </div>
  )
}
