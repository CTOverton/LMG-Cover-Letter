import { ParallaxText } from '@/components/parallaxText'
import { Button } from '@/components/button'

export const HeroSection = () => {
  return (
    <section
      className={
        'relative min-h-screen overflow-x-hidden bg-floatplane py-8 text-white'
      }
    >
      <div className={'mx-auto mb-16 max-w-3xl px-4 text-center'}>
        <div className={'text-display-3 mb-24'}>Christian Overton</div>

        <div className={'text-subtitle mb-4'}>
          Front-End interactive cover letter
        </div>
        <h1 className={'text-display mb-16'}>
          Otherwise they are just words on paper
        </h1>

        <a
          href={'https://github.com/CTOverton/LMG-Cover-Letter'}
          target={'_blank'}
        >
          <Button className={'mx-auto mb-16'} leftIcon={'/github-mark.svg'}>
            View source code
          </Button>
        </a>

        <div
          className={
            'mx-auto max-w-xl rounded-xl border border-white px-3 py-2'
          }
        >
          This website was purpose built for this position with relevant
          frameworks, best practices, and real world code examples in mind.
        </div>
      </div>

      <ParallaxText />
    </section>
  )
}