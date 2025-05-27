import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "colors-color-overlays-whiteoverlay65":
          "var(--colors-color-overlays-whiteoverlay65)",
        "colors-primary-colors-blue": "var(--colors-primary-colors-blue)",
        "colors-secondary-colors-blue-blue-700":
          "var(--colors-secondary-colors-blue-blue-700)",
        "pitch-deck-figma-slides-template-BRIX-agency-color-1":
          "var(--pitch-deck-figma-slides-template-BRIX-agency-color-1)",
        "pitch-deck-figma-slides-template-BRIX-agency-color-3":
          "var(--pitch-deck-figma-slides-template-BRIX-agency-color-3)",
        "pitch-deck-figma-slides-template-BRIX-agency-color-4":
          "var(--pitch-deck-figma-slides-template-BRIX-agency-color-4)",
      },
      fontFamily: {
        "display-6-regular": "var(--display-6-regular-font-family)",
      },
    },
  },
  plugins: [],
};

export default config;
