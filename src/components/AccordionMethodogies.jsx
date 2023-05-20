import Accordion from 'react-bootstrap/Accordion'
import ItemAccordion from './ItemAccordion'

function AccordionMethodogies({ methodologie }) {
  return (
    <Accordion defaultActiveKey="0" className="flex flex-col gap-10">
      <ItemAccordion methodologie={methodologie} />
    </Accordion>
  )
}

export default AccordionMethodogies
