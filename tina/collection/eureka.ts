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
      searchable: true,
    },
    {
      type: "number",
      label: "Quality",
      name: "quality",
      required: true,
      searchable: true,
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
      searchable: true,
    },
    {
      type: "object",
      label: "Color",
      name: "color",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item?.color || "No color",
        }),
      },
      fields: [
        {
          type: "reference",
          label: "Color",
          name: "color",
          collections: ["color"],
        },
        {
          type: "image",
          label: "Head Image",
          name: "head_image",
        },
        {
          type: "image",
          label: "Hands Image",
          name: "hands_image",
        },
        {
          type: "image",
          label: "Feet Image",
          name: "feet_image",
        },
      ],
    },
  ],
}
