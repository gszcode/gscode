// import { Link } from 'react-router-dom'
// import { useSelector } from 'react-redux'

const Background = () => {
  // const { auth } = useSelector((state) => state.authAdmin)

  return (
    <main id="home" className="w-full h-screen relative">
      {/* <div className="fixed top-56 right-4 z-[10] py-4 px-2 bg-white shadow-md md:top-36">
        {!auth ? (
          <Link to="/admin">
            Probar <br className="md:hidden" />
            <span className="text-primary-color">Administrador</span>
          </Link>
        ) : (
          <p>
            Bienvenido <span className="text-primary-color">@Admin</span>
          </p>
        )}
      </div> */}
      <div className="background-main flex items-center absolute top-0 left-0">
        <div
          className="w-full flex flex-col justify-center items-start gap-3 p-3 lg:w-96"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h1 className="text-white tracking-widest text-xl font-thin md:text-2xl">
            HEADHUNTER INDUSTRIAL
          </h1>
          <h2 className="font-bold text-white text-4xl md:text-5xl lg:text-7xl">
            G.sz Consulting
          </h2>
          <p className="text-grey md:text-lg">
            Nos especializamos en cubrir las necesidades de nuestros clientes.
          </p>
          <a
            href="#methodologies"
            className="text-center border-2 border-transparent bg-second-color px-7 py-2.5 hover:bg-transparent hover:border-2 hover:text-white hover:border-white lg:w-[200px] lg:h-[55px] lg:text-lg"
          >
            Saber más <i className="fa-solid fa-arrow-down-long ml-2"></i>
          </a>
        </div>
      </div>
      <div className="bg-white break"></div>
    </main>
  )
}

export default Background
