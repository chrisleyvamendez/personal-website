/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  dasiyui: {
    themes: [
      "dark",
      "light",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
    ],
  },
  theme: {
    extend: {
      backbroundImage: (theme) => ({
        calm: "url('./static/Calm.jpg')",
      }),
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
