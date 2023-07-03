import { ICONS } from '@/config/icons'

const variants = {
  default: 'bg-transparent text-white hover:bg-white/75 hover:text-black',
  btn: 'bg-white text-black transition-opacity hover:opacity-75',
}

const NavLinkItem = ({
  href,
  children,
  variant = 'default',
}: {
  href: string
  children: React.ReactNode
  variant?: 'default' | 'btn'
}) => (
  <a href={href}>
    <div
      className={`rounded-full  px-6 py-3  transition-all ${variants[variant]}`}
    >
      {children}
    </div>
  </a>
)

export const Navbar = () => {
  return (
    <nav className={'fixed bottom-4 z-50 hidden w-full sm:block'}>
      <ul
        className={
          'text-btn mx-auto flex max-w-4xl items-center justify-between rounded-full border border-white bg-floatplane p-1 text-white'
        }
      >
        <li>
          <NavLinkItem href={'#home'} variant={'btn'}>
            <img className={'h-6 w-6'} src={ICONS.HOME} alt={''} />
          </NavLinkItem>
        </li>
        <li>
          <NavLinkItem href={'#duties'}>Duties</NavLinkItem>
        </li>
        <li>
          <NavLinkItem href={'#contact'}>Job requirements</NavLinkItem>
        </li>
        <li>
          <NavLinkItem href={'#contact'}>Why hire me</NavLinkItem>
        </li>
        <li>
          <NavLinkItem href={'#contact'} variant={'btn'}>
            Let's talk
          </NavLinkItem>
        </li>
      </ul>
    </nav>
  )
}
