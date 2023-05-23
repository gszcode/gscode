import AccordionMethodogies from './AccordionMethodogies'

const SearchMethodologies = () => {
  return (
    <section className="p-3 mt-10">
      <div data-aos="fade-up" data-aos-duration="2000">
        <h2 className="font-semibold text-2xl text-center m-4">
          Metolología de búsqueda
        </h2>
        <p className="text-center text-second-grey">
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
