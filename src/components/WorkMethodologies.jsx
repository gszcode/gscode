import AccordionMethodogies from './AccordionMethodogies'

const WorkMethodologies = () => {
  return (
    <section className="p-3">
      <div>
        <h2 className="font-semibold text-2xl text-center m-4">
          Metolología de trabajo
        </h2>
        <p className="text-center text-second-grey">
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
