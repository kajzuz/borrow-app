import Link from "next/link"
import Header from "@/p-components/header"
import { GoSearch } from "react-icons/go"
import { Ad } from "@/types/ads"
import Image from "next/image"
import clientPromise from "@/lib/mongodb"
import { useRouter } from "next/router"
import DesignLine from "@/p-components/designLine"
import ButtonCreateAd from "@/p-components/buttonCreateAd"
import IconAdsEmpty from "@/p-components/iconAdsEmpty"

interface AdId {
  id: string
}

interface Props {
  ads: Ad[]
}
const Ads = ({ ads }: Props) => {
  const router = useRouter()

  const { userId } = router.query
  console.log(userId)

  const navigateToCreateAd = () => {
    router.push(`/createAd/${userId}`)
  }

  function navigateToAd(id: string) {
    router.push(`/ads/viewMyAds/${id}`)
  }
  function navigateToAllAds(id: string) {
    window.location.href = `/ads/${id}`
  }
  const handleClick = async () => {
    console.log("insede handleClick")
    console.log(`${userId}`)

    const response = await fetch(`/api/user/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(`${userId}`),
    })

    const dataResponse = await response.json()

    console.log("dataResponse", dataResponse)
    if (dataResponse) {
    }
  }

  return (
    <div className="bg-[#ffffff] text-center max-w-sm h-screen ">
      <Header userId={userId} anotherUserId={userId}></Header>
      <form>
        <label className="relative">
          <input
            className="bg-[#E6E6E6] font-sans outline-[#9EBB9D] placeholder-black px-6 py-2 rounded-sm w-80"
            type="text"
            placeholder="Sök..."
          />
          <div className="absolute inset-y-0  right-0 flex items-center px-2 text-black">
            <GoSearch />
          </div>
        </label>
      </form>

      <style jsx>{`
        input[type="text"] {
          background-repeat: no-repeat;
          background-size: 16px 16px;
          background-position: 8px 50%;
        }
      `}</style>

      <section className="flex justify-around mt-5 ">
        <button
          className="rounded-t-md -md mt-4 font-sans font-semibold   px-4 py-1  text-black "
          onClick={() => {
            navigateToAllAds(`${userId}`)
          }}
        >
          Låna
        </button>
        <button
          onClick={() => {
            handleClick()
          }}
          className="rounded-t-md -md mt-4 font-sans font-semibold px-4 py-1 bg-[#46649D] text-white"
        >
          Mina annonser
        </button>
        <Link href={"/board/" + `${userId}`}>
          <button className="rounded-t-md -md mt-4 font-sans font-semibold   px-4 py-1  text-black">
            Tavlan
          </button>
        </Link>
      </section>

      <div className="bg-[#46649D] h-2"></div>
      <div>
        <ButtonCreateAd userId={userId}></ButtonCreateAd>
      </div>

      {ads.length === 0 ? <IconAdsEmpty></IconAdsEmpty> : ""}

      <section>
        <div className=" font-sans text-left  mt-8">
          {ads.map((ad) => (
            <div
              key={ad.id}
              onClick={() => navigateToAd(ad.id)}
              className=" grid grid-cols-3 under"
            >
              <div className="pl-6">
                <Image
                  className="aspect-square object-cover w-full rounded-sm"
                  alt={ad.description}
                  src={ad.image}
                  width={"100"}
                  height={"100"}
                />
                <DesignLine></DesignLine>
              </div>
              <div className=" text-[#0f0e0e] mt-1 ml-2 link justify-between">
                <p className="font-bold" onClick={() => navigateToAd(ad.id)}>
                  {ad.title}
                </p>
                <p>{ad.description}</p>
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
  )
}
export async function getServerSideProps(context: any) {
  try {
    const { userId } = context.query
    const client = await clientPromise
    const db = client.db("borrow")

    const ads = await db
      .collection("ads")
      .find({ publisher: userId })
      .sort({ _id: -1 })
      .limit(1000)
      .toArray()

    return {
      props: { ads: JSON.parse(JSON.stringify(ads)) },
    }
  } catch (e) {
    console.error(e)
  }
}
export default Ads
