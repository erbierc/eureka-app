import { Eureka as EurekaType } from "@/tina/__generated__/types"
import Image from "next/image"

export const Eureka = (props: EurekaType) => {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={3}></th>
          <th colSpan={3}>Head</th>
          <th colSpan={3}>Hands</th>
          <th colSpan={3}>Feet</th>
        </tr>
      </thead>
      <tbody>
        {props.color?.map((color, index) => (
          <tr key={index}>
            <td colSpan={3}>{color?.color?.name}</td>

            {/* Head */}
            <td>
              <input type="checkbox" />
            </td>
            <td colSpan={2}>
              <Image
                src={color?.head_image || "placeholder.png"}
                alt={props.name + " " + color?.color?.name + " head"}
                width={50}
                height={50}
              />
            </td>

            {/* Hands */}
            <td>
              <input type="checkbox" />
            </td>
            <td colSpan={2}>
              <Image
                src={color?.hands_image || "placeholder.png"}
                alt={props.name + " " + color?.color?.name + " hands"}
                width={50}
                height={50}
              />
            </td>

            {/* Feet */}
            <td>
              <input type="checkbox" />
            </td>
            <td colSpan={2}>
              <Image
                src={color?.feet_image || "placeholder.png"}
                alt={props.name + " " + color?.color?.name + " feet"}
                width={50}
                height={50}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
