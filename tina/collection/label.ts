import { Collection } from "tinacms"

export const Label: Collection = {
  label: "Labels",
  name: "label",
  path: "content/labels",
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
    },
  ],
}
