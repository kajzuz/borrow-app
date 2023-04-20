import { useEffect } from "react"
import { useRouter } from "next/router"
import Header from "@/p-components/header"
import { NextPage } from "next"

interface Props {}

const Index: NextPage<Props> = () => {
  const router = useRouter()

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/login")
    }, 1800)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="bg-[#F5F5F5] max-w-sm h-screen flex items-center">
      <div className=" flex-column justify-items-center pl-16">
        <h1 className="text-[#C7784C] text-7xl ">Borrow</h1>

        <section className="font-sans py-2 mt-2 pl-8 font-medium text-lg">
          Låna och låna inom din <br />
          bostandsförening!
        </section>
      </div>
    </div>
  )
}

export default Index
