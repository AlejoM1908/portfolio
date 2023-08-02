import LogoIcon from '../../assets/icons/logo/Cloud-logo-colored.svg'

interface LogoProps {
  href?: string
}

export function Logo( {href = '/'}:LogoProps ): JSX.Element {
  return (
    <a className="mx-2 my-1 lg:mb-0 lg:mt-0" href={href}>
      <img
        className="mr-2 w-[70px] h-auto"
        src={LogoIcon}
        alt="AMCoding Logo"
        loading="lazy"
      />
    </a>
  )
}
