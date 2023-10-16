import { useState } from "react";

import Text from "./components/Text";
import Underline from "./components/Underline";
import Profile from "./components/Profile";
import ItemList from "./components/ItemList";

function App() {
  const [roundedProfile, setRoundedProfile] = useState(false)

  return (
    <>
      <div className="w-full h-[550px] flex">
        <div className="w-2/5 h-[550px] bg-green-100">
          <div className="w-full flex justify-center items-center mt-5">
            <Profile src={"./assets/profile.jpg"} rounded={roundedProfile} />
          </div>

          <div className="w-full mt-5 pl-10">
            <Text>Jenis Kelamin: Male</Text>

            <div>
              <Text>karir:</Text>

              <ItemList>Web Developer</ItemList>
              <ItemList>Student</ItemList>
            </div>
          </div>
        </div>

        <div className="w-3/5 h-[550px] bg-red-200 flex justify-end">
          <div className="w-[95%] mt-5">
            <div className="w-full h-[300px] flex flex-col justify-center mt-5">
              <h1 className="text-5xl font-bold">Henry Bintang Setiawan</h1>
              <Underline />
            </div>

            <div className="flex">
              <div>
                <Text>Angkatan: 2022</Text>
                <Text>Jurusan: Informatics</Text>
                <Text>Jalur Sukses: Startup</Text>
                <Text>Hobi: Basketball</Text>
              </div>

              <div className="w-96 flex justify-center items-center">
                <button type="button"
                  className={`w-40 h-10 text-white text-xl select-none ${roundedProfile ? 'bg-blue-600' : 'bg-[#1E293B]'} rounded-xl active:scale-110 duration-300`}
                  onClick={() => setRoundedProfile(prev => !prev)}
                  children="Profile"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-slate-200 pt-5 pl-10">
        <Text>Riwayat Organisasi:</Text>

        <ItemList>Informatics Student Union (2023 - now)</ItemList>
        <ItemList>High School Student Council (2021 - 2022)</ItemList>

        <div className="h-20" />
      </div>
    </>
  )
}

export default App;
