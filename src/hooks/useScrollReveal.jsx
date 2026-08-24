import { useEffect, useRef } from 'react'

/**
 * Custom React hook for scroll-triggered reveal animations using Intersection Observer.
 * Automatically adds the 'visible' CSS class to the referenced element upon entering the viewport.
 * 
 * @param {number} [threshold=0.1] - Ratio of target visibility required to trigger animation (0.0 to 1.0)
 * @param {IntersectionObserverInit} [options={}] - Optional additional IntersectionObserver options (root, rootMargin)
 * @returns {React.RefObject<HTMLElement | null>} ref - Attach to the target JSX element
 */
export const useScrollReveal = (threshold = 0.1, options = {}) => {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('visible')
          // Stop observing once animated to conserve browser memory & CPU cycles
          observer.unobserve(element)
        }
      },
      {
        threshold,
        ...options,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, options])

  return ref
}

export default useScrollReveal
