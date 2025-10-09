import { client } from "@/tina/__generated__/client"
import Image from "next/image"

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const eurekaResult = await client.queries.eureka({
    relativePath: `${slug}.mdx`,
  })

  // const piecesResult = await client.queries.eurekaPiece({

  // })

  const eureka = eurekaResult.data.eureka

  return (
    <article>
      <h1>{eureka.name}</h1>
      <p>{eureka.quality}</p>
      {eureka.style?.image && (
        <Image src={eureka.style.image} alt="" width={155} height={50} />
      )}
      {eureka.label?.image && (
        <Image src={eureka.label.image} alt="" width={155} height={50} />
      )}

      <div>
        {eureka.color?.map((color, index) => (
          <div className="flex flex-row" key={index}>
            <Image
              src={color?.head_image || "/notfound.png"}
              alt={eureka.name + " " + color?.color?.name + " head"}
              width={100}
              height={100}
            />
            <Image
              src={color?.hands_image || "/notfound.png"}
              alt={eureka.name + " " + color?.color?.name + " hands"}
              width={100}
              height={100}
            />
            <Image
              src={color?.feet_image || "/notfound.png"}
              alt={eureka.name + " " + color?.color?.name + " feet"}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </article>
  )
}
