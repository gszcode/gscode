import AccordionMethodogies from './AccordionMethodogies'

const data = {
  titleOne: 'Headhunting',
  titleTwo: 'Base de datos propia',
  titleThree: 'Portales utilizados',
  descriptionOne:
    'Nuestro core business es ser especialistas en salir a buscar candidatos en el mercado laboral.',
  descriptionTwo:
    'Invertimos y apostamos en las últimas tecnologías las cuales nos permiten contar con información actualizada de profesionales específicos de nuestras distintas áreas de expertise.',
  descriptionThree:
    'Linkedin premium, Licencia de recruiter, Portales de empleo',
  value: 'search'
}

const SearchMethodologies = () => {
  return (
    <section className="p-3">
      <div>
        <h2 className="font-semibold text-2xl text-center m-4">
          Metolología de búsqueda
        </h2>
        <p className="text-center text-second-grey">
          Las técnicas y herramientas que utilizamos para encontrar y atraer a
          los potenciales candidatos para tu empresa.
        </p>
      </div>
      <div className="my-20">
        <AccordionMethodogies data={data} />
      </div>
    </section>
  )
}

export default SearchMethodologies
