import IconArrow from '../icons/IconArrow'

const AccordionTitle = ({ title, onClick, open }) => {
  return (
    <div className={`flex justify-between items-center px-3 cursor-pointer select-none duration-300 ${open ? 'py-3' : 'py-1'}`} onClick={onClick}>
      <h1 className='text-xl font-bold'>{title}</h1>

      <div className={`opacity-80 duration-300 ${open ? 'rotate-[180deg]' : ''}`}>
        <IconArrow width={16} height={8} />
      </div>
    </div>
  )
}

export default AccordionTitle