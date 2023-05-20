import Accordion from 'react-bootstrap/Accordion'
import { methodologies } from '../utils/dataMethodologies'

const ItemAccordion = ({ methodologie }) => {
  return (
    <>
      {methodologie === 'work'
        ? methodologies.work.map((item) => (
            <Accordion.Item key={item.id} eventKey={item.id} className="p-2">
              <div className="bg-third-color w-16 h-16 rounded-[50%] p-7 flex justify-center items-center ml-3">
                <i className={item.iconClass}></i>
              </div>
              <p className="font-semibold text-lg pl-5 mt-4">{item.title}</p>
              <Accordion.Header className="text-sm">
                Más información
              </Accordion.Header>
              <Accordion.Body className="text-sm text-second-grey">
                {item.description}
              </Accordion.Body>
            </Accordion.Item>
          ))
        : methodologies.search.map((item) => (
            <Accordion.Item key={item.id} eventKey={item.id} className="p-2">
              <div className="bg-third-color w-16 h-16 rounded-[50%] p-7 flex justify-center items-center ml-3">
                <i className={item.iconClass}></i>
              </div>
              <p className="font-semibold text-lg pl-5 mt-4">{item.title}</p>
              <Accordion.Header className="text-sm">
                Más información
              </Accordion.Header>
              <Accordion.Body className="text-sm text-second-grey">
                {item.description}
              </Accordion.Body>
            </Accordion.Item>
          ))}
    </>
  )
}

export default ItemAccordion
