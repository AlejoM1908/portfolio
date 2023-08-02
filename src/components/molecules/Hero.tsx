import { SectionBlock } from '../atoms/SectionBlock'
import { RandomPathIcon } from '../../assets/icons/others'
import heroImage from '../../assets/images/personal-picture.jpg'

export function Hero() {
    return (
        <SectionBlock className="bg-sh-light dark:bg-sh-dark py-32 px-5 mt-[120px]">
            <div className="pb-5 md:pb-0">
                <h1 className="text-4xl font-bold text-center text-tx-light dark:text-tx-dark">
                    Hi, I&apos;m <span className="text-primary">Rafael</span>
                </h1>
            </div>
            <div className="Flex flex-col justify-center items-center">
                <RandomPathIcon className="absolute inset-0 w-full h-full filter blur-lg opacity-50 text-pr-accent" />
                <RandomPathIcon className="absolute inset-0 w-full h-full filter blur-lg opacity-50 text-sc-accent rotate-90" />
                <img src={heroImage} alt="Personal Picture" className="rounded-full mx-auto" />
            </div>
        </SectionBlock>
    )
}
