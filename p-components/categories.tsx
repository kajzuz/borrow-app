import Image from "next/image"
import { useState } from "react"

interface Props {}

const Categories = ({ setSelectedCategory, selectedCategory }: any) => {
  const [clean, setClean] = useState(false)
  const [tools, setTools] = useState(false)
  const [bicykle, setBicykle] = useState(false)
  const [electronic, setElectronic] = useState(false)
  const [grill, setGrill] = useState(false)

  function reset(category: string) {
    switch (category) {
      case "clean":
        setTools(false)
        setBicykle(false)
        setElectronic(false)
        setGrill(false)
        break
      case "tools":
        setClean(false)
        setBicykle(false)
        setElectronic(false)
        setGrill(false)
        break
      case "bicykle":
        setTools(false)
        setClean(false)
        setElectronic(false)
        setGrill(false)
        break
      case "electronic":
        setClean(false)
        setTools(false)
        setBicykle(false)
        setGrill(false)
        break
      case "grill":
        setClean(false)
        setTools(false)
        setElectronic(false)
        setBicykle(false)
        break

      default:
        break
    }
  }

  return (
    <div className="bg-[#FFFFFF]">
      <div className=" overflow-x-scroll inline-block w-[90%] whitespace-nowrap scroll-smooth scrollbar-hide">
        <div className="flex flex-row py-4 pb-1 ">
          <div className="pr-5">
            <button
              style={{
                border: clean ? "3px solid #9EBB9D" : "",
                borderRadius: "50%",
              }}
              onClick={() => {
                setSelectedCategory("Städ")
                setClean(!clean)
                reset("clean")
                if (selectedCategory === "Städ") {
                  setSelectedCategory("")
                }
              }}
            >
              <div className="pl-4 pt-1  border-[#9EBB9D] border-2 w-[74px] h-[76px] rounded-full flex justify-between">
                <Image
                  src={"/städ2.svg"}
                  alt={"#"}
                  width={"36"}
                  height={"50"}
                  style={{ alignSelf: "center" }}
                ></Image>
              </div>
            </button>

            <p className="font-sans text-[14px] font-bold text-black pt-[4px] pr-[8px]">
              Städ
            </p>
          </div>
          <div className="pr-5">
            <button
              style={{
                border: tools ? "3px solid #9EBB9D" : "",
                borderRadius: "50%",
              }}
              onClick={() => {
                setSelectedCategory("Verktyg")
                setTools(!tools)
                reset("tools")
                if (selectedCategory === "Verktyg") {
                  setSelectedCategory("")
                }
              }}
            >
              <div className="pl-3 pt-4 border-2  border-[#9EBB9D] w-[74px] h-[76px] rounded-full ">
                <Image
                  src={"/verktyg2.svg"}
                  alt={"#"}
                  width={"46"}
                  height={"46"}
                  style={{
                    alignSelf: "center",
                  }}
                ></Image>
              </div>
            </button>
            <p className=" font-sans text-[14px] font-bold text-black mt-[-3px] pr-[2px]">
              Verktyg
            </p>
          </div>
          <div className="pr-5">
            <button
              style={{
                border: bicykle ? "3px solid #9EBB9D" : "",
                borderRadius: "50%",
              }}
              onClick={() => {
                setSelectedCategory("Cyklar")
                setBicykle(!bicykle)
                reset("bicykle")
                if (selectedCategory === "Cyklar") {
                  setSelectedCategory("")
                }
              }}
            >
              <div className=" pl-2 pt-5 border-2 border-[#9EBB9D] w-[74px] h-[76px] rounded-full ">
                <Image
                  src={"/cykel2.svg"}
                  alt={"#"}
                  width={"53"}
                  height={"37"}
                  style={{ alignSelf: "center" }}
                ></Image>
              </div>
            </button>
            <p className=" font-sans text-[14px] font-bold text-black mt-[-2px] pr-[4px]">
              Cyklar
            </p>
          </div>

          <div className="pr-5">
            <button
              style={{
                border: electronic ? "3px solid #9EBB9D" : "",
                borderRadius: "50%",
              }}
              onClick={() => {
                setSelectedCategory("Elektronik")
                setElectronic(!electronic)
                reset("electronic")
                if (selectedCategory === "Elektronik") {
                  setSelectedCategory("")
                }
              }}
            >
              <div className=" pl-3 pt-3 border-2 border-[#9EBB9D] w-[74px] h-[76px] rounded-full ">
                <Image
                  src={"/tv2.svg"}
                  alt={"#"}
                  width={"42"}
                  height={"49"}
                  style={{ alignSelf: "center" }}
                ></Image>
              </div>
            </button>
            <p className="font-sans text-[14px] font-bold text-black mt-[-3px] pr-[4px]">
              Elektronik
            </p>
          </div>
          <div className="pr-5">
            <button
              style={{
                border: grill ? "3px solid #9EBB9D" : "",
                borderRadius: "50%",
              }}
              onClick={() => {
                setSelectedCategory("Grill")
                setGrill(!grill)
                reset("grill")
                if (selectedCategory === "Grill") {
                  setSelectedCategory("")
                }
              }}
            >
              <div className="pl-3 pt-2 border-2 border-[#9EBB9D] w-[74px] h-[76px] rounded-full flex justify-between">
                <Image
                  src={"/grill2.svg"}
                  alt={"#"}
                  width={"43"}
                  height={"47"}
                  style={{ alignSelf: "center" }}
                ></Image>
              </div>
            </button>
            <p className="font-sans text-[14px] font-bold text-black pt-[4px] pr-[4px]">
              Grill
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
