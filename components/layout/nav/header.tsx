import Image from "next/image"

export const Header = () => {
  return (
    <>
      <header className="flex items-center gap-2 fixed z-20 w-full border-b bg-[#6B4350]">
        <Image
          src="/Icon_Eureka.webp"
          alt="Eureka App"
          width={50}
          height={50}
        />
        <span className="font-bold text-[#e4ba92]">Eureka App</span>
        <nav></nav>
      </header>
      <div className="h-14" />
    </>
  )
}
