import { useState } from 'react'

const NavbarSmall = () => {
  const [btnMenu, setBtnMenu] = useState(false)

  const handleClick = () => {
    setBtnMenu((prev) => !prev)
  }

  return (
    <>
      <div className="logo-sm cursor-pointer hover:text-primary-color lg:hidden">
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
        } nav-transition font-light lg:hidden`}
      >
        <ul className="logo-lg flex flex-col items-start gap-4">
          <a href="#home" className="hover:text-primary-color cursor-pointer">
            Inicio
          </a>
          <a
            href="#methodologies"
            className="hover:text-primary-color cursor-pointer"
          >
            Metodologías
          </a>
          <a href="#about" className="hover:text-primary-color cursor-pointer">
            Nosotros
          </a>
          <a href="#blog" className="hover:text-primary-color cursor-pointer">
            Blog
          </a>
          <a
            href="#contact"
            className="hover:text-primary-color cursor-pointer font-semibold"
          >
            Contacto
          </a>
        </ul>
      </nav>
    </>
  )
}

export default NavbarSmall
