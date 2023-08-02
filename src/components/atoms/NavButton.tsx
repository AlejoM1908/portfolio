import type { ReactNode } from 'react';

interface NavButtonProps {
  label: string;
  icon?: ReactNode;
  href: string;
}

export function NavButton({ label, icon, href }: NavButtonProps): JSX.Element {
  return (
    <li>
      <a
        href={href}
        className="inline-flex items-stretch justify-center w-full min-w-[8rem] px-4 py-2 text-xl text-tx-light transition duration-150 ease-in-out rounded-md hover:bg-sh-light hover:text-tx-light dark:text-tx-dark dark:hover:text-tx-dark dark:focus:text-tx-dark dark:hover:bg-sh-dark"
      >
        {icon && <span className="mr-3">{icon}</span>}
        {label}
      </a>
    </li>
  );
}