import { ReactNode } from "react"
import { Metadata } from "next"
import { Roboto } from "next/font/google"
import { cn } from "@/lib/utils"
import "@/styles.css"
import QueryProvider from "@/components/providers/QueryProvider"
import BaseLayout from "@/components/layout/BaseLayout"

const fontRoboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "Eureka App",
  description: "Track your Eureka collection!",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={cn(fontRoboto.variable)}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <QueryProvider>
          <BaseLayout>{children}</BaseLayout>
        </QueryProvider>
      </body>
    </html>
  )
}
