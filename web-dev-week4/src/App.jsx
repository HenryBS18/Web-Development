import { useState } from "react";

import Text from "./components/Text";
import Underline from "./components/Underline";
import Profile from "./components/Profile";
import ItemList from "./components/ItemList";
import Accordion from "./components/accordion/Accordion";
import AccordionItem from "./components/accordion/AccordionItem";
import RoundProfileButton from "./components/buttons/RoundProfileButton";
import HiddenProfileButton from "./components/buttons/HiddenProfileButton";

function App() {
  const [roundedProfile, setRoundedProfile] = useState(false)
  const [hiddenProfile, setHiddenProfile] = useState(false)

  return (
    <>
      <div className="w-full h-max flex">
        <div className="w-2/5 h-auto bg-green-100">
          <div className="w-full h-[300px] flex justify-center items-center mt-5">
            <Profile src={"./assets/profile.jpg"} rounded={roundedProfile} hidden={hiddenProfile} />
          </div>

          <div className="w-full mt-5 pl-10">
            <Accordion>
              <AccordionItem title={"Jenis Kelamin"} description={"Male"} />
              <AccordionItem title={"Karir"} description={
                <>
                  <ItemList>Web Developer</ItemList>
                  <ItemList>Student</ItemList>
                </>}
              />
            </Accordion>
          </div>
        </div>

        <div className="w-3/5 h-auto bg-red-200 flex justify-end">
          <div className="w-[95%] mt-5">
            <div className="w-full h-[300px] flex flex-col justify-center mt-5">
              <h1 className="text-5xl font-bold">Henry Bintang Setiawan</h1>
              <Underline />
            </div>

            <div className="flex flex-wrap">
              <Accordion>
                <AccordionItem title={'Angkatan'} description={'2022'} />
                <AccordionItem title={'Jurusan'} description={'Informatics'} />
                <AccordionItem title={'Jalur Sukses'} description={'Startup'} />
                <AccordionItem title={'Hobi'} description={'Basketball'} />
              </Accordion>

              <div className="w-52 flex flex-col justify-center items-center gap-y-3">
                <RoundProfileButton onClick={() => setRoundedProfile(prev => !prev)} roundedProfile={roundedProfile} />
                <HiddenProfileButton onClick={() => setHiddenProfile(prev => !prev)} hiddenProfile={hiddenProfile} />
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
