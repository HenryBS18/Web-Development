import React, { useState } from "react";
import Text from "./components/Text";
import Underline from "./components/Underline";
import Profile from "./components/Profile";
import ItemList from "./components/ItemList";

function App() {
  const [roundedProfile, setRoundedProfile] = useState(false);

  const topSectionLeftProfileImage = React.createElement(Profile, { src: "./assets/profile.jpg", rounded: roundedProfile })

  const topSectionLeftProfile = React.createElement("div", { className: "w-full flex justify-center items-center mt-5" },
    topSectionLeftProfileImage
  )

  const topSectionLeftDescriptionGender = React.createElement(Text, null, "Jenis Kelamin: Male")
  const topSectionLeftDescriptionCareerTitle = React.createElement(Text, null, "karir:")
  const topSectionLeftDescriptionCareerItem1 = React.createElement(ItemList, null, "Web Developer")
  const topSectionLeftDescriptionCareerItem2 = React.createElement(ItemList, null, "Student")

  const topSectionLeftDescriptionCareer = React.createElement("div", null,
    topSectionLeftDescriptionCareerTitle,
    topSectionLeftDescriptionCareerItem1,
    topSectionLeftDescriptionCareerItem2
  )

  const topSectionLeftDescription = React.createElement("div", { className: "w-full mt-5 pl-10" },
    topSectionLeftDescriptionGender,
    topSectionLeftDescriptionCareer
  )

  const topSectionLeft = React.createElement("div", { className: "w-2/5 h-[550px] bg-green-100" },
    topSectionLeftProfile,
    topSectionLeftDescription
  )

  const topSectionRightBodyNameTitle = React.createElement("h1", { className: "text-5xl font-bold" }, "Henry Bintang Setiawan")
  const topSectionRightBodyUnderline = React.createElement(Underline, null)

  const topSectionRightBodyName = React.createElement("div", { className: "w-full h-[300px] flex flex-col justify-center mt-5" },
    topSectionRightBodyNameTitle,
    topSectionRightBodyUnderline
  )

  const topSectionRightBodyDescriptionLeftItem1 = React.createElement(Text, null, "Angkatan: 2022")
  const topSectionRightBodyDescriptionLeftItem2 = React.createElement(Text, null, "Jurusan: Informatics")
  const topSectionRightBodyDescriptionLeftItem3 = React.createElement(Text, null, "Jalur Sukses: Startup")
  const topSectionRightBodyDescriptionLeftItem4 = React.createElement(Text, null, "Hobi: Basketball")

  const topSectionRightBodyDescriptionLeft = React.createElement("div", null,
    topSectionRightBodyDescriptionLeftItem1,
    topSectionRightBodyDescriptionLeftItem2,
    topSectionRightBodyDescriptionLeftItem3,
    topSectionRightBodyDescriptionLeftItem4
  )

  const topSectionRightBodyDescriptionRightButton = React.createElement("button",
    {
      type: "button",
      className: `w-40 h-10 text-white text-xl select-none ${roundedProfile ? "bg-blue-600" : "bg-[#1E293B]"
        } rounded-xl active:scale-110 duration-300`,
      onClick: () => setRoundedProfile((prev) => !prev)
    },
    "Profile"
  )

  const topSectionRightBodyDescriptionRight = React.createElement("div", { className: "w-96 flex justify-center items-center" },
    topSectionRightBodyDescriptionRightButton
  )

  const topSectionRightBodyDescription = React.createElement("div", { className: "flex" },
    topSectionRightBodyDescriptionLeft,
    topSectionRightBodyDescriptionRight
  )

  const topSectionRightBody = React.createElement("div", { className: "w-[95%] mt-5" },
    topSectionRightBodyName,
    topSectionRightBodyDescription
  )

  const topSectionRight = React.createElement("div", { className: "w-3/5 h-[550px] bg-red-200 flex justify-end" },
    topSectionRightBody
  )

  const topSection = React.createElement("div", { className: "w-full h-[550px] flex" },
    topSectionLeft,
    topSectionRight
  )

  const bottomSectionTitle = React.createElement(Text, null, "Riwayat Organisasi:")
  const bottomSectionItem1 = React.createElement(ItemList, null, "Informatics Student Union (2023 - now)")
  const bottomSectionItem2 = React.createElement(ItemList, null, "High School Student Council (2021 - 2022)")
  const bottomSectionEmptySpace = React.createElement("div", { className: "h-20" })

  const bottomSection = React.createElement("div", { className: "w-full bg-slate-200 pt-5 pl-10" },
    bottomSectionTitle,
    bottomSectionItem1,
    bottomSectionItem2,
    bottomSectionEmptySpace
  )

  const container = React.createElement("div", null,
    topSection,
    bottomSection
  )

  return container;
}

export default App;
