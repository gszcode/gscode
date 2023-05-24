const NavbarLong = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="logo-lg flex items-start gap-4 text-lg">
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
  )
}

export default NavbarLong
