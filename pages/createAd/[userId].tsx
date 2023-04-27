import React, { useState } from "react"
import Head from "next/head"
import Upload from "@/p-components/upload"
import CreateAd from "@/p-components/createAd"
import Header from "@/p-components/header"
import { useRouter } from "next/router"

const App = () => {
  const [imageUrl, setImageUrl] = useState("")

  const router = useRouter()

  const { userId } = router.query

  // const handleSetImageUrl = (url: React.SetStateAction<string>) => {
  //   setImageUrl(url)
  // }

  return (
    <div>
      <div className="bg-[#ffffff] text-center max-w-sm h-screen ">
        <Header></Header>
        <CreateAd userId={userId} imageUrl={imageUrl} />
      </div>
    </div>
  )
}

export default App