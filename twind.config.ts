import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      colors: {
        primary: "#0b486b",
        secondary: "#106799",
        transparent: "transparent",
      },
    },
  },
} as Options;
