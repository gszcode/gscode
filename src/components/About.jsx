import imageAbout from '../img/about.jpg'

const About = () => {
  return (
    <section
      id="about"
      className="w-full px-3 lg:flex lg:flex-row-reverse lg:-mt-48 gap-10"
    >
      <div
        className="w-full flex flex-col justify-center items-start gap-3"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">Nosotros</h2>
        <p className="text-second-grey md:text-lg">
          Pertenecemos a la nueva generación de consultoras, que obtiene su
          fuerza de profesionales independientes, con visión global en las
          distintas áreas de expertise dentro de los sectores pertenecientes a
          la industria (Planta, Supply Chain, Oil & Gas, Energía y Minería).
        </p>
        <a
          href="#contact"
          className="text-center border-2 border-transparent bg-second-color px-7 py-2.5 hover:bg-transparent hover:border-2 hover:text-black hover:border-black lg:w-[200px] lg:h-[55px] lg:text-lg"
        >
          Contacto <i className="fa-solid fa-arrow-down-long ml-2"></i>
        </a>
      </div>
      <div className="my-14" data-aos="fade-up" data-aos-duration="3000">
        <img src={imageAbout} alt="Imagen/Nosotros" />
      </div>
    </section>
  )
}

export default About
