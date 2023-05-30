import { Link } from 'react-router-dom'
import logo from '../img/logo.jpg'
import NavbarLong from './NavbarLong'
import NavbarSmall from './NavbarSmall'

const Header = () => {
  return (
    <header className="z-10 flex justify-between items-center p-3 fixed bg-white w-full h-20 shadow-sm">
      <Link to="/">
        <div className="flex items-center w-18 h-10 lg:w-36 lg:h-16">
          <img
            id="logo-title"
            className="w-full h-full"
            src={logo}
            alt="Logo"
            title="Logo"
          />
          <h1 className="ml-2 text-lg font-semibold text-primary-color md:text-2xl lg:text-3xl">
            GSCODE
          </h1>
        </div>
      </Link>
      <NavbarSmall />
      <NavbarLong />
    </header>
  )
}

export default Header
