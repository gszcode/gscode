import Accordion from 'react-bootstrap/Accordion'
import { methodologies } from '../utils/dataMethodologies'

const ItemAccordion = ({ methodologie }) => {
  console.log(methodologies)
  return (
    <div
      className="lg:flex lg:justify-center lg:items-center lg:gap-10"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="500"
      data-aos-offset="0"
    >
      {methodologie === 'work'
        ? methodologies.work.map((item) => (
            <Accordion.Item key={item.id} eventKey={item.id} className="p-2">
              <div className="bg-third-color w-16 h-16 rounded-[50%] p-7 flex justify-center items-center ml-3">
                <i className={item.iconClass}></i>
              </div>
              <p className="font-semibold text-lg pl-5 mt-4 md:text-2xl">
                {item.title}
              </p>
              <Accordion.Header className="text-sm md:text-base">
                Más información
              </Accordion.Header>
              <Accordion.Body className="text-sm text-second-grey md:text-lg lg:w-80">
                {item.description}
              </Accordion.Body>
            </Accordion.Item>
          ))
        : methodologies.search.map((item) => (
            <Accordion.Item key={item.id} eventKey={item.id} className="p-2">
              <div className="bg-third-color w-16 h-16 rounded-[50%] p-7 flex justify-center items-center ml-3">
                <i className={item.iconClass}></i>
              </div>
              <p className="font-semibold text-lg pl-5 mt-4 md:text-2xl">
                {item.title}
              </p>
              <Accordion.Header className="text-sm md:text-base">
                Más información
              </Accordion.Header>
              <Accordion.Body className="text-sm text-second-grey md:text-lg">
                {item.description}
              </Accordion.Body>
            </Accordion.Item>
          ))}
    </div>
  )
}

export default ItemAccordion
