import AccordionMethodogies from './AccordionMethodogies'

const data = {
  titleOne: 'Tiempo y asertividad',
  titleTwo: 'Lista de candidatos',
  titleThree: 'Seguimiento de candidatos',
  descriptionOne:
    'Presentación de candidatos entre la 2da y 3er semana luego de dar luz verde al inicio del proceso. Esto se logra gracias a nuestra especialización.',
  descriptionTwo:
    'Se presentan de 4 a 6 candidatos alineados a las necesidades del cliente.',
  descriptionThree:
    'Contamos con un informe de seguimiento para evaluar la adaptación y comodidad del candidato durante los primeros meses en la compañía.',
  value: 'work'
}

const WorkMethodologies = () => {
  return (
    <section className="p-3 bg-background">
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
        <AccordionMethodogies data={data} />
      </div>
    </section>
  )
}

export default WorkMethodologies
