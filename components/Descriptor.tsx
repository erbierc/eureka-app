import Image from "next/image"

type DescriptorProps = {
  image: string | undefined
  name: string
  height?: number
}

export const Descriptor = ({ image, name, height = 30 }: DescriptorProps) => {
  return (
    <div>
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
