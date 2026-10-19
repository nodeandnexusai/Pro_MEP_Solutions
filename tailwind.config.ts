import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { burgundy: "#621215", gold: "#e1ab4e", ink: "#17283c", cream: "#fbfaf8" }
      },
      fontFamily: {
        sans: ["Poppins", "Arial", "Helvetica", "sans-serif"],
        roboto: ["Roboto", "Arial", "Helvetica", "sans-serif"],
        display: ["Poppins", "Arial", "Helvetica", "sans-serif"],
        poppins: ["Poppins", "Arial", "Helvetica", "sans-serif"]
      },
      boxShadow: { soft: "0 20px 60px rgba(23, 40, 60, .10)" }
    }
  },
  plugins: []
};

export default config;
