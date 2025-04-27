import { QuartzConfig } from "../cfg"
import { PluginTypes } from "./types"

export const CustomCSS: PluginTypes["transformers"] = () => {
  return {
    name: "CustomCSS",
    transform(data, { fileData }) {
      data.head.push({
        tag: "link",
        attrs: {
          rel: "stylesheet",
          href: "/custom.css",
        },
      })
      return data
    },
  }
}
