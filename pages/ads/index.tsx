import { ObjectId } from "mongodb"
import clientPromise from "../../lib/mongodb"
import Header from "@/p-components/header"
import Link from "next/link"

interface Ad {
  id: any
  name: string
  description: string
}
interface Props {
  ads: Ad[]
}
export default function Ads({ ads }: Props) {
  return (
    <div className="bg-[#F5F5F5] text-center max-w-sm h-screen ">
      {/* <h1 className="font-sans">Annonser</h1>

      <ul>
        {ads.map((ad: any) => (
          <li>
            <h2>Namn: {ad.name}</h2>
            <h3>Beskrivning: {ad.description}</h3>
          </li>
        ))}
      </ul> */}
      <Header></Header>
      <p className="font-sans text-4xl ">Annonser</p>
      <div className=" font-sans">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="flex-column">
            {ads.map((ad) => (
              <a key={ad.id} className="group">
                <div className="">
                  <div className="mt-4  bg-[#9EBB9D]">
                    <p className="bold"> Namn: {ad.name}</p>

                    <br />
                    <p>Beskrivning: {ad.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <Link href={"/createAd"}>
          <button className="flex items-top justify-center p-2 text-gray-900 bg-[#9EBB9D] rounded text-xl font-[500] font-sans">
            <p className=""> Skapa en annons</p>
          </button>
        </Link>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  try {
    const client = await clientPromise
    const db = client.db("borrow")

    const ads = await db.collection("ads").find({}).toArray()

    return {
      props: { ads: JSON.parse(JSON.stringify(ads)) },
    }
  } catch (e) {
    console.error(e)
  }
}