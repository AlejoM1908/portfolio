import { Logo } from '../atoms/Logo'
import { MenuOpenIcon, MenuCloseIcon } from '../../assets/icons/menuIcons'
import { ThemeToggle } from '../atoms/ThemeToogle'
import { NavButton } from '../atoms/NavButton'
import { useState, useEffect } from 'react'

export function NavBar(): JSX.Element {
  const [isMounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMediumScreen, setIsMediumScreen] = useState(false)

  useEffect(() => {
    function handleResize() {
      setIsMediumScreen(window.matchMedia('(max-width: 768px)').matches)
      setIsMenuOpen(false)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  return isMounted ? (
    <nav className="z-40 w-full fixed top-0 py-6">
      {isMediumScreen ? (
        <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      ) : (
        <FullMenu />
      )}
    </nav>
  ) : (
    <div style={{ height: '3rem' }} />
  )
}

function FullMenu(): JSX.Element {
  return (
    <ul className="flex items-center justify-evenly mx-auto w-5/6">
      <li className="flex flex-row flex-1 justify-between pr-[12%] pl-[2%]">
        <NavButton label="About Me" href="/about" />
        <NavButton label="Blog" href="/blog" />
      </li>
      <li>
        <Logo />
      </li>
      <li className="flex flex-row flex-1 justify-between pl-[12%] pr-[2%]">
        <NavButton label="Projects" href="/projects" />
        <ThemeToggle />
      </li>
    </ul>
  )
}

interface MobileMenuProps {
  isMenuOpen: boolean
  setIsMenuOpen: Function
}

const MobileMenu = ({
  isMenuOpen,
  setIsMenuOpen,
}: MobileMenuProps): JSX.Element => {
  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="flex items-center justify-between mx-auto w-5/6">
      <Logo />
      <div className="flex items-center">
        <ThemeToggle />
        <button
          className="bg-light hover:bg-sh-light dark:bg-dark dark:hover:bg-sh-dark text-tx-light dark:text-tx-dark font-bold py-1 px-2 rounded"
          onClick={handleMenuClick}
        >
          {isMenuOpen ? (
            <MenuCloseIcon className="w-10 h-10 text-tx-light dark:text-tx-dark" />
          ) : (
            <MenuOpenIcon className="w-10 h-10 text-tx-light dark:text-tx-dark" />
          )}
        </button>
        {isMenuOpen && (
          <ul className="block md:hidden fixed top-[6%] left-[40%] py-2 w-full h-full gb-light dark:bg-dark shadow-xl">
            <NavButton label="About Me" href="/about" />
            <NavButton label="Blog" href="/blog" />
            <NavButton label="Projects" href="/projects" />
          </ul>
        )}
      </div>
    </div>
  )
}
