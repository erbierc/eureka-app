import { PropsWithChildren } from "react"
import { Header } from "./nav/header"
import { Footer } from "./nav/footer"

export default function BaseLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-screen-xl md:px-4">{children}</main>
      <Footer />
    </>
  )
}
