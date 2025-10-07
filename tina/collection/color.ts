import { Collection } from "tinacms"

export const Color: Collection = {
  label: "Colors",
  name: "color",
  path: "content/colors",
  format: "mdx",
  fields: [
    {
      type: "string",
      label: "Name",
      name: "name",
      required: true,
    },
  ],
}
