import Products from "@/p-components/products"
import Header from "@/p-components/header"
import { NextPage } from "next"
import Link from "next/link"
interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <div className="bg-[#F3F0EC] max-w-sm">
      <Header></Header>

      <section className="flex flex-column justify-center">
        <Link href={"/login/login"}>
          <h1>Welcome to BORROW!</h1>
        </Link>
      </section>
    </div>
  )
}

export default Index
