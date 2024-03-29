import Image from "next/image"
import { useState } from "react"
import UpdateImage from "@/p-components/updateImage"

interface Props {} //add link and other functionalities when needed

const Icons = ({ image, setNewImageUrl }: any) => {
  const [myImage, setMyImage] = useState("")
  const [confirmed, setConfirmed] = useState(false)

  async function changeImage() {
    const confirmed = window.confirm(
      "Din bild kommer tas bort, vill du fortsätta?"
    )
    if (confirmed) {
      setConfirmed(true)
    } else {
      setConfirmed(false)
    }
  }
  console.log("myImage in icons:", myImage)
  setNewImageUrl(myImage)
  return (
    <div className="bg-[#FFFFFF] justify-start ">
      <div className="flex flex-row py-8 pb-8  justify-evenly">
        <button
          style={{ borderStyle: "dashed" }}
          className="border border-[#9EBB9D] w-[90px] h-[80px]"
        >
          <div className="flex justify-center">
            <Image
              src={"/trachcan.svg"}
              alt={"#"}
              width={"24"}
              height={"28"}
              style={{ alignSelf: "center" }}
              onClick={() => changeImage()}
            ></Image>
          </div>
        </button>
        <button className=" w-[90px] h-[80px]">
          <div className="aspect-auto w-[90px] h-[80px]">
            <div className="aspect-auto w-[90px] h-[80px]">
              {confirmed ? (
                <UpdateImage setImageUrl={setMyImage} />
              ) : (
                <Image
                  src={image}
                  alt={"#"}
                  width={"100"}
                  height={"100"}
                  style={{
                    alignSelf: "center",
                    backgroundSize: "cover",
                    width: "90px",
                    height: "80px",
                  }}
                />
              )}
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Icons
