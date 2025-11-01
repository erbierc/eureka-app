import { ReactNode } from "react"
import { Metadata } from "next"
import { Inter as FontSans, Lato, Nunito } from "next/font/google"
import { cn } from "@/lib/utils"
import "@/styles.css"
import QueryProvider from "@/components/providers/QueryProvider"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
})

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: "400",
})

export const metadata: Metadata = {
  title: "Eureka App",
  description: "Track your Eureka collection!",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={cn(fontSans.variable, nunito.variable, lato.variable)}
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  )
}
