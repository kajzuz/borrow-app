import Products from "@/p-components/products"
import Header from "@/p-components/header"
import { NextPage } from "next"
import Link from "next/link"
interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <div className="bg-[#F5F5F5] max-w-sm h-screen">
      <Header></Header>

      <section className="flex flex-column justify-center">
        <Link href={"/login"}>
          <h1 className="pt-10 text-gray-900">Welcome to BORROW!</h1>
        </Link>
      </section>
    </div>
  )
}

export default Index
