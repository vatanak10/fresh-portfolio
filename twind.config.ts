import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  hash: true,
  theme: {
    extend: {
      colors: {
        "primary": "#0b486b",
        "secondary": "#106799",
        "tertiary": "#0fa3b1",
        "grey-0": "#2a2e35",
        "grey-1": "#454e56",
        "grey-2": "#6c7983",
        "grey-3": "#b2becd",
        "grey-4": "#dbe1e8",
        "grey-5": "#f8f8f8",
        "grey-6": "#12181b",
        transparent: "transparent",
      },
      fontFamily: {
        "sans": ['"Ubuntu", sans-serif'],
      },
    },
  },
} as Options;
