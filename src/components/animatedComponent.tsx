'use client'
import { AnimatePresence, motion } from 'framer-motion'

export const Animated = ({
  open,
  animation,
  children,
}: {
  open: boolean
  animation: { initial: any; animate: any; exit: any }
  children: React.ReactNode
}) => (
  <AnimatePresence mode="wait">
    {open && (
      <motion.div
        initial={animation.initial}
        animate={animation.animate}
        exit={animation.exit}
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
)
