import { useState } from 'react'
import logo from '../img/logo.jpg'

const Header = () => {
  const [btnMenu, setBtnMenu] = useState(false)

  const handleClick = () => {
    setBtnMenu((prev) => !prev)
  }

  return (
    <header className="flex justify-between items-center p-3 fixed bg-color-header w-full h-20">
      <div className="flex items-center w-18 h-10">
        <img className="w-full h-full" src={logo} alt="Logo" title="Logo" />
        <h1 className="ml-2 text-lg font-semibold text-color-text">GSZCODE</h1>
      </div>
      <div className="logo-sm cursor-pointer hover:text-color-text">
        <button onClick={handleClick}>
          {btnMenu === false ? (
            <i className="fa-solid fa-bars text-2xl"></i>
          ) : (
            <i className="fa-solid fa-xmark text-2xl"></i>
          )}
        </button>
      </div>
      <nav
        className={`w-full bg-color-header absolute top-16 left-0 p-4 ${
          btnMenu === false ? 'hidden' : 'block'
        } nav-transition font-light`}
      >
        <ul className="logo-lg">
          <li className="my-4 hover:text-color-text cursor-pointer">Inicio</li>
          <li className="my-4 hover:text-color-text cursor-pointer">
            Metodologías
          </li>
          <li className="my-4 hover:text-color-text cursor-pointer">
            Nosotros
          </li>
          <li className="my-4 hover:text-color-text cursor-pointer">Blog</li>
          <li className="my-4 hover:text-color-text cursor-pointer font-semibold">
            Contacto
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
