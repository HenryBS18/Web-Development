const Profile = ({ rounded, src, hidden }) => {
  return (
    <div className={`w-[300px] aspect-square bg-lime-500 rounded-full ${rounded ? 'overflow-hidden' : ''} ${hidden ? 'hidden' : ''}`}>
      <img src={src} alt="profile" className="w-full h-full" />
    </div>
  )
}

export default Profile