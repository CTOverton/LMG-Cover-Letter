import { Highlight } from '@/components/highlight'
import React from 'react'

export const ExternalLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => (
  <div className={'flex justify-center'}>
    <a
      className={'space-x-2 text-center hover:space-x-4'}
      href={href}
      target={'_blank'}
    >
      <span className={'transition-all'}>{children}</span>
      <span className={'transition-all'}>
        <Highlight>{'->'}</Highlight>
      </span>
    </a>
  </div>
)
