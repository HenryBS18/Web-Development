import { useEffect, useState } from 'react'

import Underline from "../components/Underline";
import Profile from "../components/Profile";
import ItemList from "../components/ItemList";
import Accordion from "../components/accordion/Accordion";
import AccordionItem from "../components/accordion/AccordionItem";
import RoundProfileButton from "../components/buttons/RoundProfileButton";
import HiddenProfileButton from "../components/buttons/HiddenProfileButton";

const Home = () => {
  const [roundedProfile, setRoundedProfile] = useState(false)
  const [hiddenProfile, setHiddenProfile] = useState(false)
  const [data, setData] = useState({});

  useEffect(() => {
    if (sessionStorage.getItem('data')) setData(JSON.parse(sessionStorage.getItem('data')));
  }, [])

  return (
    <div>
      <div className="w-full h-max flex">
        <div className="w-2/5 h-auto bg-green-100">
          <div className="w-full h-[300px] flex justify-center items-center mt-5">
            <Profile src={"./assets/profile.jpg"} rounded={roundedProfile} hidden={hiddenProfile} />
          </div>

          <div className="w-full mt-5 pl-10">
            <Accordion>
              <AccordionItem title={"Jenis Kelamin"} description={data.gender ? data.gender : '...'} />
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
              <h1 className="text-5xl font-bold">{data.name ? data.name : '...'}</h1>
              <Underline />
            </div>

            <div className="flex flex-wrap">
              <Accordion>
                <AccordionItem title={'Angkatan'} description={data.classOf ? data.classOf : '...'} />
                <AccordionItem title={'Jurusan'} description={data.major ? data.major : '...'} />
                <AccordionItem title={'Jalur Sukses'} description={data.successPath ? data.successPath : '...'} />
                <AccordionItem title={'Hobi'} description={data.hobby ? data.hobby : '...'} />
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
        <Accordion width="500px">
          <AccordionItem title={"Riwayat Organisasi"} description={
            <>
              <ItemList>Informatics Student Union (2023 - now)</ItemList>
              <ItemList>High School Student Council (2021 - 2022)</ItemList>
            </>}
          />
        </Accordion>
      </div>

      <div className="h-20" />
    </div>
  )
}

export default Home