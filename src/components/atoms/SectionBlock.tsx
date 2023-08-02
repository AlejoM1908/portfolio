import { Children } from "react"

interface SectionBlockProps {
  className?: string
  children?: React.ReactNode
}

export function SectionBlock({ className, children }: SectionBlockProps): JSX.Element {
    return (
        <section className={className}>
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
                {children}
            </div>
        </section>
    )
}
