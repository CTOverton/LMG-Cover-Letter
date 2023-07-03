import { useRef, useState } from 'react'
import { useScroll, useTransform } from 'framer-motion'

export const useDutiesAnimation = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start'],
  })

  const [isOpen, setIsOpen] = useState(false)

  useTransform(scrollYProgress, (pos) => {
    if (pos > 0.4 && !isOpen) {
      setIsOpen(true)
    }
    if (pos < 0.4 && isOpen) {
      setIsOpen(false)
    }
  })

  return { scrollRef, isOpen }
}
