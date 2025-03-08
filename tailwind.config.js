/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'qc_pattern': "url('/assets/images/footer-pattern.png')",
      },

      colors: {
        gc_primary_100: "#bacff4",
        gc_primary_200: "#99b8ef",
        gc_primary_300: "#6b97e8",
        gc_primary_400: "#4f83e3",
        gc_primary_500: "#2264DC",
        gc_primary_600: "#1f5bc8",
        gc_primary_700: "#19479c",
        gc_primary_800: "#143779",
        gc_primary_900: "#0E2A5C",
        gc_secondary_100: "#ccdbff",
        gc_secondary_200: "#b3caff",
        gc_secondary_300: "#90b2ff",
        gc_secondary_400: "#7ba3ff",
        gc_secondary_500: "#5b8cff",
        gc_secondary_600: "#537fe8",
        gc_secondary_700: "#4063b5",
        gc_secondary_800: "#32ad8c",
        gc_secondary_900: "#263b6b",
        gc_gray_100: "#b0b0b0",
        gc_gray_200: "#8A8A8A",
        gc_grey_300: "#545454",
        gc_grey_400: "#333333",
        gc_gray_500: "#000000",
        gc_grey_800: "#000000",
      },
    },
  },
  plugins: [
    ({ addUtilities }: any) => {
      const newUtilities = {
        ".trans": {
          transitionProperty: "all",
          transitionDuration: "300ms",
          transitionTimingFunction: "ease",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
