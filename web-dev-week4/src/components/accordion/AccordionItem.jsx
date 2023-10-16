import { useState } from 'react'
import AccordionTitle from './AccordionTitle'
import AccordionDescription from './AccordionDescription'

const AccordionItem = ({ title, description }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className={`w-full bg-slate-300 ${open ? 'mb-2' : ''}`}>
      <AccordionTitle title={title} open={open} onClick={() => setOpen(prev => !prev)} />

      <AccordionDescription description={description} open={open} />
    </div>
  )
}

export default AccordionItem