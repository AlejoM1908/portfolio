import { BuildingIcon } from '../../assets/icons/others'
import { ThemeToggle } from './ThemeToogle'

export function UnderConstruction(): JSX.Element {
  return (
    <div className="flex flex-col items-center h-screen justify-evenly">
        <ThemeToggle />
        <BuildingIcon className="w-full h-auto max-w-[600px] px-28"/>
        <div className="flex flex-col items-center">
            <h1 className="text-tx-light dark:text-tx-dark text-4xl">
                This page is...
            </h1>
            <h1 className="text-pr-accent text-6xl">
                Under Construction
            </h1>
        </div>
    </div>
  )
}
