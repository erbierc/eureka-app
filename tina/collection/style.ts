import { Collection } from "tinacms"

export const Style: Collection = {
  label: "Styles",
  name: "style",
  path: "content/styles",
  format: "mdx",
  fields: [
    {
      type: "string",
      label: "Name",
      name: "name",
      required: true,
    },
    {
      type: "image",
      label: "Image",
      name: "image",
      required: true,
    },
  ],
}
