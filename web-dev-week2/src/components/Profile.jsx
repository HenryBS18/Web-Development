const Profile = ({ rounded, src }) => {
  return (
    <div className={`w-[300px] aspect-square bg-lime-500 rounded-full ${rounded ? 'overflow-hidden' : ''}`}>
      <img src={src} alt="profile" className="w-full h-full" />
    </div>
  )
}

export default Profile