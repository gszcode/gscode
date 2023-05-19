import { useState } from 'react'
import logo from '../img/logo.jpg'

const Header = () => {
  const [btnMenu, setBtnMenu] = useState(false)

  const handleClick = () => {
    setBtnMenu((prev) => !prev)
  }

  return (
    <header className="z-10 flex justify-between items-center p-3 fixed bg-white w-full h-20">
      <a href="/" className="flex items-center w-18 h-10">
        <img
          id="logo-title"
          className="w-full h-full"
          src={logo}
          alt="Logo"
          title="Logo"
        />
        <h1 className="ml-2 text-lg font-semibold text-primary-color">
          GSCODE
        </h1>
      </a>
      <div className="logo-sm cursor-pointer hover:text-primary-color">
        <button onClick={handleClick}>
          {btnMenu === false ? (
            <i className="fa-solid fa-bars text-2xl"></i>
          ) : (
            <i className="fa-solid fa-xmark text-2xl"></i>
          )}
        </button>
      </div>
      <nav
        className={`w-full bg-white absolute top-16 left-0 p-4 ${
          btnMenu === false ? 'hidden' : 'block'
        } nav-transition font-light`}
      >
        <ul className="logo-lg">
          <li className="my-4 hover:text-primary-color cursor-pointer">
            Inicio
          </li>
          <li className="my-4 hover:text-primary-color cursor-pointer">
            Metodologías
          </li>
          <li className="my-4 hover:text-primary-color cursor-pointer">
            Nosotros
          </li>
          <li className="my-4 hover:text-primary-color cursor-pointer">Blog</li>
          <li className="my-4 hover:text-primary-color cursor-pointer font-semibold">
            Contacto
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
