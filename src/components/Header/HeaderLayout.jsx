import Logo from './Logo'

function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-5 sm:px-8">
        <Logo />
      </div>
    </header>
  )
}

export default Header