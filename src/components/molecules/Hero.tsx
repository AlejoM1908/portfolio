import { SectionBlock } from '../atoms/SectionBlock'
import { RandomPathIcon } from '../../assets/icons/others'
import heroImage from '../../assets/images/personal-picture.jpg'

interface HeroProps {
  className?: string
}

export function Hero({ className: className }: HeroProps): JSX.Element {
  return (
    <SectionBlock className={`bg-light dark:bg-dark ${className}`}>
      <div className="relative">
        <RandomPathIcon className="absolute scale-150 sm:scale-125 inset-0 w-full h-full filter blur-xl opacity-50 text-pr-accent -rotate-90 z-1" />
        <RandomPathIcon className="absolute scale-150 sm:scale-125 inset-0 w-full h-full filter blur-xl opacity-50 text-sc-accent z-1" />
        <img
          src={heroImage}
          alt="Personal Picture"
          className="rounded-full mx-auto z-0"
          style={{ position: 'relative', maxWidth: '80%', maxHeight: '80vh' }}
        />
      </div>
      
      <div className="pb-5 md:pb-0">
        <h1 className="text-4xl font-bold text-tx-light dark:text-tx-dark">
          Hi,
        </h1>
        <h1 className="text-4xl px-1 font-bold text-tx-light dark:text-tx-dark">
          I&apos;m <span className="text-pr-accent">Alejandro</span>
        </h1>
      </div>
    </SectionBlock>
  )
}
