module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn',
        fadeOut: 'fadeOut',
        'bounce-1/2': 'bounce 0.5s linear'
      },

      keyframes: theme => ({
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 100 }
        },
        fadeOut: {
          '0%': { opacity: 100 },
          '100%': { opacity: 0 }
        },
      })
    },
  },
  plugins: [],
}