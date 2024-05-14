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
        turnArmMovement: {
          "0%": { transform: "rotate(0deg)" },
          "5%": { transform: "rotate(5deg)" },
          "10%": { transform: "rotate(10deg)" },
          "15%": { transform: "rotate(10deg)" },
          "20%": { transform: "rotate(12deg)" },
          "25%": { transform: "rotate(12deg)" },
          "30%": { transform: "rotate(13deg)" },
          "35%": { transform: "rotate(13deg)" },
          "40%": { transform: "rotate(14deg)" },
          "45%": { transform: "rotate(14deg)" },
          "50%": { transform: "rotate(15deg)" },
          "55%": { transform: "rotate(15deg)" },
          "60%": { transform: "rotate(16deg)" },
          "65%": { transform: "rotate(16deg)" },
          "70%": { transform: "rotate(17deg)" },
          "75%": { transform: "rotate(17deg)" },
          "80%": { transform: "rotate(18deg)" },
          "85%": { transform: "rotate(18deg)" },
          "90%": { transform: "rotate(19deg)" },
          "95%": { transform: "rotate(19deg)" },
          "100%": { transform: "rotate(20deg)" },
        },
      },
      animation: {
        spin: "spin 3s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        turnArmMovement: "turnArmMovement 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
