module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      scale: {
        '-1': '-1'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require('tw-elements/dist/plugin')],
    content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],

}
