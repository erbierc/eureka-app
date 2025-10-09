import { PropsWithChildren } from "react"
import { Header } from "./nav/header"
import { Footer } from "./nav/footer"

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden pt-20">{children}</main>
      <Footer />
    </>
  )
}
