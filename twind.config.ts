import { Options } from "$fresh/plugins/twind.ts";
import { setup } from "twind";

setup({
  theme: {
    colors: {
      primary: "#0b486b",
    },
  },
});

export default {
  selfURL: import.meta.url,
} as Options;
