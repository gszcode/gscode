const NavbarLong = () => {
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
      </ul>
    </nav>
  )
}

export default NavbarLong
