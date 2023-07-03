import { Highlight } from '@/components/highlight'
import { Button } from '@/components/button'
import { ICONS } from '@/config/icons'

export const PlaceholderSection = () => {
  return (
    <section id={'contact'} className={'relative mb-40 bg-white px-6 pt-24'}>
      <div className={'mx-auto max-w-6xl text-center'}>
        <h1 className={'text-display-2 mb-8 '}>
          Something is better than <Highlight>nothing.</Highlight>
        </h1>
        <h2 className={'text-subtitle mb-16 text-gray-400'}>
          It's always better to meet deadlines with deliverables. In that
          spirit, I have no idea how long this job posting will be available and
          while I could continue to tweak this site to perfection I know it's
          better to just get it out there.
        </h2>

        <h3 className={'text-display-3 mb-8'}>
          Thank you for taking the time to view my work
        </h3>
        <a
          href="https://calendly.com/blueprintsoftware/lmg-floatplane-interview"
          target={'_blank'}
        >
          <Button
            className={'mx-auto mb-2'}
            leftIcon={ICONS.CALENDAR}
            variant={'secondary'}
          >
            Let's talk some more
          </Button>
        </a>
      </div>
    </section>
  )
}
