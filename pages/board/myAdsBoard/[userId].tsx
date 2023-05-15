import ButtonCreateAd from "@/p-components/buttonCreateAd"
import Categories from "@/p-components/categories"
import Header from "@/p-components/header"
import { NextPage } from "next"
import Link from "next/link"
import router, { useRouter } from "next/router"
import { GoSearch } from "react-icons/go"
import { MongoClient, Db } from "mongodb"
import clientPromise from "@/lib/mongodb"
import { BoardAd } from "@/types/boardAd"
import { useState } from "react"
import SearchBar from "@/p-components/searchBar"
import Image from "next/image"
import DesignLine from "@/p-components/designLine"

interface Props {
  boardAds: BoardAd[]
}

// function navigateToAd(id: string) {
//   window.location.href = `/ads/view/${id}`
// }

const Board = ({ boardAds }: Props) => {
  const [query, setQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const router = useRouter()
  const { userId } = router.query

  const filteredBoardAds = boardAds.filter(
    (boardAd) => boardAd.userId === userId
  )
  // const filteredBoardAds = boardAds.filter((boardAd) =>
  //   boardAd.title.includes(
  //     query

  //       .charAt(0)

  //       .toLocaleUpperCase()

  //       .concat(query.charAt(1).toLocaleLowerCase())
  //   )
  // )
  // .filter(
  //   (ad) => !selectedCategory
  //   //  ||
  //   //  ad.category === selectedCategory
  // );

  console.log("selectedCategory:", selectedCategory)

  return (
    <>
      <div className="mb-4">
        <Header userId={userId} anotherUserId={userId} />
      </div>
      <div className="bg-[#ffffff] text-center max-w-sm h-screen ">
        <SearchBar query={query} setQuery={setQuery}></SearchBar>

        <section className="flex justify-around mt-5 ">
          <Link href={`/ads/` + `${userId}`}>
            <button className="rounded-t-md -md mt-4 font-sans font-semibold   px-4 py-1  text-black">
              Låna
            </button>
          </Link>
          <Link href={`/ads/myAds/` + `${userId}`}>
            <button
              className="rounded-t-md -md mt-4 font-sans font-semibold px-4 py-1 text-black"
              onClick={() => {}}
            >
              Mina annonser
            </button>
          </Link>
          <button className="rounded-t-md -md mt-4 font-sans font-semibold   px-4 py-1 bg-[#46649D]  text-white">
            Tavlan
          </button>
        </section>
        <div className="bg-[#46649D] h-2"></div>
        <div className="flex justify-center mt-5 ">
          {/* <button className="flex justify-center p-2 text-gray-900 bg-[#9EBB9D] w-[350px] rounded-sm text-xl font-[500] font-sans">
            <p className="text-black"> Skapa inlägg</p>
          </button> */}
          <ButtonCreateAd userId={userId} />
        </div>
        <div className="text-left px-4">
          <p className="font-medium">Hittar du inte det du söker?</p>
          <p>Skriv på våran anslagstavla!</p>
          <p>Kanske en snäll granne har det du söker.</p>
        </div>
        <section className="flex text-left mb-9 mt-6">
          <button
            onClick={() => {
              router.push(`/board/${userId}`)
            }}
            className="ml-[5.5%] border-r-[1px] pr-[2%] border-black mr-[2%] "
          >
            <p>Alla inlägg</p>
          </button>
          <div></div>
          <button
            // onClick={() => {
            //   router.push(`/board/myAdsBoard/${userId}`)
            // }}

            className="underline decoration-[#9EBB9D] decoration-2 "
          >
            <p>Mina inlägg</p>
          </button>
        </section>
        <section className="pb-40">
          <div className="flex flex-col">
            {filteredBoardAds.map((boardAd) => (
              <div key={boardAd.id} className="">
                <div>
                  <Image
                    className="ml-[5.6%]"
                    src={"/Line.svg"}
                    alt={"#"}
                    width={"347"}
                    height={"280"}
                  ></Image>
                </div>
                <div className="flex items-center">
                  <Image
                    // onClick={() => navigateToAd(ad.id)}
                    className="ml-[7%] mr-[3.5%] mt-[4%]"
                    alt={boardAd.description}
                    src={"/Profil.svg"}
                    width={"75"}
                    height={"98"}
                  />
                  <div>
                    <p className="text-sm font-semibold mr-[7%]">
                      {boardAd.title}
                    </p>
                    <p className="text-sm font-normal mr-[7%]">
                      {boardAd.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <style jsx>{`
          .link {
            cursor: pointer;
          }
        `}</style>
      </div>
    </>
  )
}
export async function getServerSideProps(context: any) {
  try {
    const { userId } = context.query
    console.log("userid: " + userId)

    const client = await clientPromise
    const db = client.db("borrow")

    const boardAds = await db
      .collection("board")
      .find({ publisher: userId })
      .sort({ _id: -1 })
      .toArray()

    console.log(boardAds)

    return {
      props: { boardAds: JSON.parse(JSON.stringify(boardAds)) },
    }
  } catch (e) {
    console.error(e)
  }
}

export default Board
