const AccordionDescription = ({ description, open }) => {
  return (
    <div className={`px-3 duration-500 ease-out border overflow-hidden ${open ? 'max-h-[200px] py-3 border-b-black' : 'max-h-0'}`}>
      {description}
    </div>
  )
}

export default AccordionDescription