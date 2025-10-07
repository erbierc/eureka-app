import { Collection } from "tinacms"

export const EurekaPiece: Collection = {
  label: "Eureka Pieces",
  name: "eurekaPiece",
  path: "content/eurekaPieces",
  format: "mdx",
  fields: [
    {
      type: "reference",
      label: "Eureka",
      name: "eureka",
      collections: ["eureka"],
      //   required: true,
    },
    {
      type: "reference",
      label: "Color",
      name: "color",
      collections: ["color"],
      //   required: true,
    },
    {
      type: "string",
      label: "Slot",
      name: "slot",
      options: [
        { value: "head", label: "Head" },
        { value: "hands", label: "Hands" },
        { value: "feet", label: "Feet" },
      ],
      //   required: true,
    },
    {
      type: "image",
      label: "Image",
      name: "image",
      //   required: true,
    },
  ],
}
