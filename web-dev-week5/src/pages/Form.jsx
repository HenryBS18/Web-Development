import { useState } from 'react'
import Input from '../components/Input'
import SubmitButton from '../components/buttons/SubmitButton';

const Form = ({ setPage }) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [major, setMajor] = useState('');
  const [classOf, setClassOf] = useState('');
  const [successPath, setSuccessPath] = useState('');
  const [hobby, setHobby] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()

    const confirmation = confirm('Are you sure want to submit?');

    if (confirmation) {
      const data = JSON.stringify({
        name,
        gender,
        major,
        classOf,
        successPath,
        hobby
      })

      sessionStorage.setItem('data', data)
      setPage('home');
    }
  }

  return (
    <div className='flex justify-center items-center'>
      <form className='mt-10' onSubmit={(e) => handleSubmit(e)}>
        <div className='flex gap-x-5'>
          <Input label={"Nama:"} name={'name'} placeholder={"Henry"} type={"text"} onChange={(value) => setName(value)} required={true} />
          <Input label={"Jenis kelamin:"} name={'gender'} placeholder={"Laki-laki"} type={"text"} onChange={(value) => setGender(value)} required={true} />
        </div>

        <div className='flex gap-x-5'>
          <Input label={"Jurusan:"} name={'major'} placeholder={"Management"} type={"text"} onChange={(value) => setMajor(value)} required={true} />
          <Input label={"Angkatan:"} name={'class'} placeholder={"2022"} type={"text"} onChange={(value) => setClassOf(value)} required={true} />
        </div>

        <div className='flex gap-x-5'>
          <Input label={"Jalur Sukses:"} name={'jalur'} placeholder={"Startup"} type={"text"} onChange={(value) => setSuccessPath(value)} required={true} />
          <Input label={"Hobi:"} name={'hobby'} placeholder={"Main game"} type={"text"} onChange={(value) => setHobby(value)} required={true} />
        </div>

        <div className='w-full flex justify-end'>
          <SubmitButton />
        </div>
      </form>
    </div>
  )
}

export default Form