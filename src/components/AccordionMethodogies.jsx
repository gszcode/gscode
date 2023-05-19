import Accordion from 'react-bootstrap/Accordion'

function AccordionMethodogies({ data }) {
  const {
    titleOne,
    titleTwo,
    titleThree,
    descriptionOne,
    descriptionTwo,
    descriptionThree
  } = data

  return (
    <Accordion defaultActiveKey="0" className="flex flex-col gap-10">
      <Accordion.Item eventKey="0" className="p-2">
        <div className="bg-third-color w-16 h-16 rounded-[50%] p-7 flex justify-center items-center ml-3">
          <i
            className={`${
              titleOne === 'Headhunting'
                ? 'fa-solid fa-magnifying-glass text-2xl'
                : 'fa-regular fa-calendar-days text-2xl'
            }`}
          ></i>
        </div>
        <p className="font-semibold text-lg pl-5 mt-4">{titleOne}</p>
        <Accordion.Header className="text-sm">Más información</Accordion.Header>
        <Accordion.Body className="text-sm text-second-grey">
          {descriptionOne}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className="p-2">
        <div className="bg-third-color w-16 h-16 rounded-[50%] p-7 flex justify-center items-center ml-3">
          <i
            className={`${
              titleTwo === 'Base de datos propia'
                ? 'fa-solid fa-database text-2xl'
                : 'fa-solid fa-users text-2xl'
            }`}
          ></i>
        </div>
        <p className="font-semibold text-lg pl-5 mt-4">{titleTwo}</p>
        <Accordion.Header className="text-sm">Más información</Accordion.Header>
        <Accordion.Body className="text-sm text-second-grey">
          {descriptionTwo}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className="p-2">
        <div className="bg-third-color w-16 h-16 rounded-[50%] p-7 flex justify-center items-center ml-3">
          <i
            className={`${
              titleThree === 'Portales utilizados'
                ? 'fa-brands fa-linkedin-in text-2xl'
                : 'fa-regular fa-file text-2xl'
            }`}
          ></i>
        </div>
        <p className="font-semibold text-lg pl-5 mt-4">{titleThree}</p>
        <Accordion.Header className="text-sm">Más información</Accordion.Header>
        <Accordion.Body className="text-sm text-second-grey">
          {descriptionThree}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default AccordionMethodogies
