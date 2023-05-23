import imageAbout from '../img/about.jpg'

const About = () => {
  return (
    <section id="about" className="w-full px-3">
      <div
        className="w-full flex flex-col justify-center items-start gap-3"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h2 className="font-bold text-2xl">Nosotros</h2>
        <p className="text-second-grey">
          Pertenecemos a la nueva generación de consultoras, que obtiene su
          fuerza de profesionales independientes, con visión global en las
          distintas áreas de expertise dentro de los sectores pertenecientes a
          la industria (Planta, Supply Chain, Oil & Gas, Energía y Minería).
        </p>
        <button className="border-2 border-transparent bg-second-color px-7 py-2.5 hover:bg-transparent hover:border-2 hover:text-black hover:border-black">
          Contacto <i className="fa-solid fa-arrow-down-long ml-2"></i>
        </button>
      </div>
      <div className="my-14" data-aos="fade-up" data-aos-duration="3000">
        <img src={imageAbout} alt="Imagen/Nosotros" />
      </div>
    </section>
  )
}

export default About
