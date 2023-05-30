import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../slides/auth/authSlide'
import { Link, useNavigate } from 'react-router-dom'

const NavbarLong = () => {
  const { authAdmin } = useSelector((state) => state)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = () => {
    dispatch(logout())

    return navigate('/admin')
  }

  return (
    <nav className="hidden lg:block">
      <ul className="logo-lg flex items-start gap-4 text-lg">
        <a href="#home" className="cursor-pointer focus">
          Inicio
        </a>
        <a href="#methodologies" className="cursor-pointer px-2 item">
          Metodologías
        </a>
        <a href="#about" className="cursor-pointer px-2 item">
          Nosotros
        </a>
        <a href="#blog" className="cursor-pointer px-2 item">
          Blog
        </a>
        <a href="#contact" className="cursor-pointer px-2 font-semibold item">
          Contacto
        </a>
        {authAdmin.isAuthenticated && (
          <Link to="/admin/add-blog" className="cursor-pointer px-2 item">
            Agregar Blog
          </Link>
        )}
        {authAdmin.isAuthenticated && (
          <button onClick={handleClick} className="cursor-pointer px-2 item">
            Cerrar sesión
          </button>
        )}
      </ul>
    </nav>
  )
}

export default NavbarLong
