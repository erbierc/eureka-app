import Image from "next/image"

type DescriptorProps = {
  image: string | undefined
  name: string
  height?: number
  mobileDisplay?: boolean
}

export const Descriptor = ({
  image,
  name,
  height = 30,
  mobileDisplay = false,
}: DescriptorProps) => {
  return (
    <div className={`${!mobileDisplay && "hidden md:block"}`}>
      {image ? (
        <Image
          src={image}
          alt={name}
          width={0}
          height={height}
          sizes="auto"
          style={{ width: "auto", height: height }}
        />
      ) : (
        <span>{name}</span>
      )}
    </div>
  )
}
