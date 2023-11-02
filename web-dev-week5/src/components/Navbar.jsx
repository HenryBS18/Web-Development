import { FaHouse, FaFileLines } from 'react-icons/fa6'

const Navbar = ({ page, setPage }) => {
  return (
    <div className="flex justify-end items-center pr-10 w-full h-14 bg-blue-300">
      <div
        className={`${page === 'home' ? 'border-b-4' : 'border-b-0'} border-violet-800 h-full flex justify-center items-center gap-x-1 w-40 cursor-pointer select-none duration-150 ease-in-out hover:border-b-4`}
        onClick={() => setPage('home')}>
        <FaHouse size={20} />
        <p className="text-xl font-bold">Home</p>
      </div>

      <div
        className={`${page === 'form' ? 'border-b-4' : 'border-b-0'} border-violet-800 h-full flex justify-center items-center gap-x-1 w-40 cursor-pointer select-none duration-150 ease-in-out hover:border-b-4`}
        onClick={() => setPage('form')}
      >
        <FaFileLines size={20} />
        <p className="text-xl font-bold">Form</p>
      </div>
    </div>
  )
}

export default Navbar