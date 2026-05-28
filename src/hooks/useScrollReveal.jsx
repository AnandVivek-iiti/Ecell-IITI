import { useEffect } from 'react'

export default function useScrollReveal(deps = []) {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll')
    if (elements.length === 0) return

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18 }
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, deps)
}
