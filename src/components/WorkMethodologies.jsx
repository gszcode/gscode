import AccordionMethodogies from './AccordionMethodogies'

const WorkMethodologies = () => {
  return (
    <section className="p-3 mt-10">
      <div data-aos="fade-up" data-aos-duration="2000">
        <h2 className="font-bold text-2xl text-center m-4 md:text-3xl lg:text-4xl">
          Metolología de trabajo
        </h2>
        <p className="text-center text-second-grey md:text-lg lg:text-2xl lg:mx-32">
          La manera en la que llevamos a cabo el proceso de búsqueda y selección
          de candidatos para una determinada posición.
        </p>
      </div>
      <div className="my-20">
        <AccordionMethodogies methodologie="work" />
      </div>
    </section>
  )
}

export default WorkMethodologies
