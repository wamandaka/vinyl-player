// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        spin: {
          "0%": { transform: "rotate-0" },
          "100%": { transform: "rotate-90" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        spin: "spin 3s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
