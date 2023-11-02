const Input = ({ name, type, placeholder, label, onChange, required }) => {
  return (
    <div className='flex flex-col mb-3'>
      <label htmlFor="name" className='text-xl font-bold'>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className='border border-black rounded-lg text-xl w-[300px] p-2'
        onChange={(e) => onChange(e.target.value)}
        required={required} />
    </div>
  )
}

export default Input