/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // flowbite.content(),
 // For React
  ],
  theme: {
    extend: {
      fontFamily: {
        lobster: ["Lobster", "sans-serif"],
      },
    },
  },
  plugins: [
    // flowbite.plugin(),
  ],
};
