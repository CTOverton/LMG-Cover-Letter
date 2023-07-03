import React from 'react'
import { Highlight } from '@/components/highlight'
import { JourneyShield } from '@/components/journeyShield'
import { IMAGES } from '@/config/images'
import { ExternalLink } from '@/components/externalLink'

export const DutiesPartIISection = () => {
  return (
    <section className={'relative bg-white px-6 pt-24'}>
      <div className={'mx-auto max-w-6xl'}>
        <Section1 />
        <Section2 />

        {/* TODO: complete additional sections */}
        {/* Optimizing code for better performance and scalability */}
        {/* Crafting clear user stories, design tests, and continuously */}
      </div>
    </section>
  )
}

const Group = ({
  subtitle,
  title,
  children,
}: {
  subtitle: string
  title: string
  children: React.ReactNode
}) => (
  <div className={'mb-32'}>
    <div className={'text-subtitle mb-4 text-gray-400'}>• {subtitle}</div>
    <h1 className={'text-display-2 mb-8'}>{title}</h1>
    {children}
  </div>
)

const Section1 = () => (
  <Group
    subtitle={
      'Ensuring code follows up-to-date practices in order to ensure maintainability, performance, and security'
    }
    title={'Typescript, SSR, gRPC'}
  >
    {/* TODO: Could turn these into components */}
    <h2 className={'text-display-3 mb-8'}>Maintainability</h2>

    <div className={'mb-8 grid gap-4 sm:grid-cols-2'}>
      <div>
        <p className={'text-gray-400'}>
          I'm constantly in search of how to write the best quality code the
          most efficient way possible.
        </p>
        <p>
          <Highlight>Typescript</Highlight> helps me write code without errors
          the first time around and makes it incredibly easier to collaborate
          with other developers.
        </p>
        <p>
          <Highlight>Tailwind CSS</Highlight> has been a game changing tool I've
          adapted to not only improve my development efficiency but improve my
          design system.
        </p>
      </div>
      <div className={'rounded-2xl bg-gray-100 p-8'}>
        <p>
          A comment is a failure to express yourself in code. If you fail, then
          write a comment; but try not to fail.
        </p>
        <p>
          <Highlight>Robert C. Martin</Highlight>
        </p>
      </div>
    </div>

    <h2 className={'text-display-3 mb-8'}>Performance</h2>

    <div className={'mb-8 grid gap-4 sm:grid-cols-2'}>
      <div>
        <p className={'text-gray-400'}>
          It's more than just tools, choosing the optimal tech stack goes a long
          way but how they are implemented makes all the difference.
        </p>
        <p>
          <Highlight>Server Side Rendering (SSR)</Highlight> has become an
          industry standard for performance and SEO. I'm constantly adapting my
          workflows to use the best features new frameworks have to offer.
        </p>
        <p>
          <Highlight>Hybrid rendering</Highlight> tools like Next.js allow for
          SSR and CSR on an individual component level, for a site like
          Floatplane this can drastically improve initial and repeat load times.
        </p>
      </div>
      <div className={'rounded-2xl bg-gray-100 p-8'}>
        <img
          className={'object-fit mb-4 w-full px-4'}
          src={IMAGES.PERFORMANCE_METRICS}
          alt={''}
        />

        <ExternalLink href={'https://empoweredtogether.us/'}>
          See how I achieved this score for{' '}
          <Highlight>EmpoweredTogether.us</Highlight>
        </ExternalLink>
      </div>
    </div>

    <h2 className={'text-display-3 mb-8'}>Security</h2>

    <div className={'mb-8 grid gap-4 sm:grid-cols-2'}>
      <div>
        <p className={'text-gray-400'}>
          My previous company Journey was focused on developing a secure trusted
          identity network. I personally helped develop our secure interactions
          to ensure user data privacy.
        </p>
        <p>
          I facilitated the implementation to replace our REST API with{' '}
          <Highlight>gRPC</Highlight>. This allowed us to use HTTP/2 and TLS to
          secure our API and improve performance.
        </p>
      </div>
      <div className={'flex justify-center rounded-2xl bg-gray-100 p-8'}>
        <JourneyShield />
      </div>
    </div>
  </Group>
)

const Section2 = () => (
  <Group
    subtitle={
      'Collaborating with other team members to drive innovation and avoid missteps'
    }
    title={'Team building is what I do'}
  >
    <div
      className={
        'mb-4 mt-16 grid rounded-2xl bg-gray-100 sm:grid-cols-2 xl:-mx-32'
      }
    >
      <div className={'z-10 p-8'}>
        <div className={'flex flex-col items-center rounded-2xl bg-white p-8'}>
          <img
            className={'mb-4 h-28 w-28 rounded-3xl'}
            src={IMAGES.JOURNEY_APP}
            alt={''}
          />
          <p className={'text-subtitle'}>Professionally</p>
          <p className={'text-gray-400'}>
            I conducted hiring and actively managed a team of developers both
            locally and cross continental. Working directly with CEO, President,
            and marketing team to deliver high quality business driven features
            and prioritize development efforts.
          </p>
        </div>
      </div>
      <div className={'z-10 p-8'}>
        <div className={'flex flex-col items-center rounded-2xl bg-white p-8'}>
          <img
            className={'mb-4 h-28 w-28 rounded-3xl'}
            src={IMAGES.DEV_DAWGS_APP}
            alt={''}
          />
          <p className={'text-subtitle'}>Recreationally</p>
          <p className={'text-gray-400'}>
            I run a small developer community where new and senior developers
            can come together to learn and grow.
          </p>

          <ExternalLink href={'https://discord.gg/8T57kxV2aJ'}>
            Find it on <Highlight>discord</Highlight>
          </ExternalLink>
        </div>
      </div>
    </div>
  </Group>
)
