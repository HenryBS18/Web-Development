const RoundProfileButton = ({ onClick, roundedProfile }) => {
  return (
    <button type="button"
      className={`w-40 h-10 text-white text-xl select-none ${roundedProfile ? 'bg-blue-600' : 'bg-[#1E293B]'} rounded-xl active:scale-110 duration-300`}
      onClick={onClick}
      children="Round Profile"
    />
  )
}

export default RoundProfileButton