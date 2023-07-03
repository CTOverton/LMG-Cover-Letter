'use client'
import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

type ParallaxTextProps = React.HTMLAttributes<HTMLDivElement> & {}
export const ParallaxText: React.FC<ParallaxTextProps> = ({
  className,
  ...other
}) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start'],
  })

  const x = useTransform(scrollYProgress, [0, 1], ['-50%', '0%'])
  const xFlipped = useTransform(scrollYProgress, [0, 1], ['0%', '-50%'])

  return (
    <div className={`leading-none ${className}`} {...other}>
      <motion.section
        ref={scrollRef}
        style={{ x }}
        className={
          'text-display-2 mb-2 flex flex-nowrap space-x-8 whitespace-nowrap'
        }
      >
        <span className={'opacity-50'}>Javascript</span>
        <span>Typescript</span>
        <span className={'opacity-50'}>React</span>
        <span>Next.js</span>
        <span className={'opacity-50'}>Firebase</span>
        <span className={'opacity-50'}>AWS</span>
        <span>Tailwind</span>
        <span className={'opacity-50'}>GIT</span>
        <span>React Native</span>
        <span className={'opacity-50'}>Angular</span>
        <span className={''}>Redux</span>
        <span className={'opacity-50'}>Javascript</span>
        <span>Typescript</span>
        <span className={'opacity-50'}>React</span>
        <span>Next.js</span>
        <span className={'opacity-50'}>Firebase</span>
        <span className={'opacity-50'}>AWS</span>
        <span>Tailwind</span>
        <span className={'opacity-50'}>GIT</span>
        <span>React Native</span>
        <span className={'opacity-50'}>Angular</span>
        <span className={''}>Redux</span>
      </motion.section>
      <motion.section
        ref={scrollRef}
        style={{ x: xFlipped }}
        className={
          'text-display-2 flex flex-nowrap space-x-8 whitespace-nowrap'
        }
      >
        <span className={'opacity-50'}>Performance</span>
        <span>Stability</span>
        <span className={'opacity-50'}>UI/UX</span>
        <span>Modern</span>
        <span className={'opacity-50'}>CI/CD</span>
        <span className={'opacity-50'}>Test driven</span>
        <span>Performance</span>
        <span className={'opacity-50'}>Secure</span>
        <span>Scalable</span>
        <span className={'opacity-50'}>Maintainable</span>
        <span className={'opacity-50'}>Performance</span>
        <span>Stability</span>
        <span className={'opacity-50'}>UI/UX</span>
        <span>Modern</span>
        <span className={'opacity-50'}>CI/CD</span>
        <span className={'opacity-50'}>Test driven</span>
        <span>Performance</span>
        <span className={'opacity-50'}>Secure</span>
        <span>Scalable</span>
        <span className={'opacity-50'}>Maintainable</span>
      </motion.section>
    </div>
  )
}
