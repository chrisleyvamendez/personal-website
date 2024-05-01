/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      backbroundImage: (theme) => ({
        calm: "url('./static/Calm.jpg')",
      }),
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
