import { useEffect, useState } from 'react'

export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')

    const handleChange = () => setIsDesktop(mq.matches)
    handleChange()

    mq.addEventListener('change', handleChange)
    return () => mq.removeEventListener('change', handleChange)
  }, [])

  return isDesktop
}
