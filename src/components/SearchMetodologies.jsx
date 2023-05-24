import AccordionMethodogies from './AccordionMethodogies'

const SearchMethodologies = () => {
  return (
    <section className="p-3 mt-10">
      <div data-aos="fade-up" data-aos-duration="2000">
        <h2 className="font-bold text-2xl text-center m-4 md:text-3xl lg:text-4xl">
          Metolología de búsqueda
        </h2>
        <p className="text-center text-second-grey md:text-lg lg:text-2xl lg:mx-32">
          Las técnicas y herramientas que utilizamos para encontrar y atraer a
          los potenciales candidatos para tu empresa.
        </p>
      </div>
      <div className="my-20">
        <AccordionMethodogies />
      </div>
    </section>
  )
}

export default SearchMethodologies
