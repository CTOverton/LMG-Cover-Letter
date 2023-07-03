'use client'
import React from 'react'
import { Highlight } from '@/components/highlight'
import { useDutiesAnimation } from '@/hooks/useDutiesAnimation'
import { Animated } from '@/components/animatedComponent'
import { fadeAnimation, openAnimation } from '@/animations/animations'
import { ComponentShowcase } from '@/app/(home)/(sections)/(components)/componentShowcase'
import { ExternalLink } from '@/components/externalLink'

export const DutiesSection = () => {
  const { scrollRef, isOpen } = useDutiesAnimation()

  return (
    <section
      ref={scrollRef}
      className={'relative min-h-[150vh] bg-white px-6 pt-24'}
    >
      <div id={'duties'} className={'text-display-2 mx-auto max-w-6xl'}>
        Duties
      </div>
      <div className={'sticky top-4 mx-auto max-w-6xl'}>
        <div className={'text-subtitle mb-4 text-gray-400'}>
          • Building strong reusable code
        </div>
        <Animated open={isOpen} animation={openAnimation}>
          <PrimaryContent />
        </Animated>
        <Animated open={!isOpen} animation={fadeAnimation}>
          <SecondaryContent />
        </Animated>
      </div>
    </section>
  )
}

const PrimaryContent = () => (
  <div>
    <h1 className={'text-display-2 mb-8'}>
      Reusable code is more than just components, it’s about{' '}
      <Highlight>flexibility.</Highlight>
    </h1>

    <p>
      This <Highlight>transactions</Highlight> component was meant to be used
      wherever the app showed transactions.
    </p>
    <p>
      Instead, by building a more flexible <Highlight>list</Highlight> component
      we can reuse the same responsive code for a variety of features across the
      app.
    </p>

    <ComponentShowcase />

    <ExternalLink href={'https://github.com'}>
      View the components I built for this website <Highlight>here</Highlight>
    </ExternalLink>
  </div>
)

const SecondaryContent = () => (
  <div>
    <div className={'text-subtitle text-gray-400'}>
      • Ensuring code follows up-to-date practices in order to ensure
      maintainability, performance, and security
    </div>

    <div className={'text-subtitle text-gray-400'}>
      • Collaborating with other team members to drive innovation and avoid
      missteps
    </div>

    <div className={'text-subtitle text-gray-400'}>
      • Optimizing code for better performance and scalability
    </div>

    <div className={'text-subtitle text-gray-400'}>
      • Crafting clear user stories, design tests, and continuously delivering
      product enhancements
    </div>
  </div>
)
