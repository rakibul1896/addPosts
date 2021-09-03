module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'signIn-btn': '#c3bed7',
        'border-btn': '#7a7a85',
        'bg-btn': 'rgb(159,197,248)',
        'main-bg': 'rgb(236,236,236)',
      },
      width: {
        680: '680px',
        '90%': '90%',
      },
      height: {
        sm: '8px',
      },
      maxHeight: {
        '9/1': '90%',
      },
      maxWidth: {
        '7/1': '70%',
      },
      boxShadow: {
        basic: '5px 5px 0px  #7a7a85',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
