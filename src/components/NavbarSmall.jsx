import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../slides/auth/authSlide'

const NavbarSmall = () => {
  const { authAdmin } = useSelector((state) => state)
  const [btnMenu, setBtnMenu] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClickBtn = () => {
    setBtnMenu((prev) => !prev)
  }

  const handleClick = () => {
    dispatch(logout())

    return navigate('/admin')
  }

  return (
    <>
      <div className="logo-sm cursor-pointer hover:text-primary-color lg:hidden">
        <button onClick={handleClickBtn} type="button">
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
          {authAdmin.isAuthenticated && (
            <Link
              to="/admin/add-blog"
              className="hover:text-primary-color cursor-pointer"
            >
              Agregar Blog
            </Link>
          )}
          {authAdmin.isAuthenticated && (
            <button onClick={handleClick} className="cursor-pointer item">
              Cerrar sesión
            </button>
          )}
        </ul>
      </nav>
    </>
  )
}

export default NavbarSmall
