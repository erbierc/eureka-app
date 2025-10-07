import { Collection } from "tinacms"

export const Eureka: Collection = {
  label: "Eurekas",
  name: "eureka",
  path: "content/eurekas",
  format: "mdx",
  fields: [
    {
      type: "string",
      label: "Name",
      name: "name",
      required: true,
    },
    {
      type: "number",
      label: "Quality",
      name: "quality",
      required: true,
    },
    {
      type: "reference",
      label: "Label",
      name: "label",
      collections: ["label"],
    },
    {
      type: "reference",
      label: "Style",
      name: "style",
      collections: ["style"],
    },
  ],
}
