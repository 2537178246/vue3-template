/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      '3xs': [
        '10px',
        {
          lineHeight: '13px',
          letterSpacing: '0.2px'
        }
      ],
      '2xs': [
        '11px',
        {
          lineHeight: '14px',
          letterSpacing: '0.22px'
        }
      ],
      xs: [
        '12px',
        {
          lineHeight: '15px',
          letterSpacing: '0.24px'
        }
      ],
      xsm: [
        '13px',
        {
          lineHeight: '17px',
          letterSpacing: '0.26px'
        }
      ],
      sm: [
        '14px',
        {
          lineHeight: '18px',
          letterSpacing: '0.28px'
        }
      ],
      'x-base': [
        '15px',
        {
          lineHeight: '19px',
          letterSpacing: '0.3px'
        }
      ],
      base: [
        '16px',
        {
          lineHeight: '21px',
          letterSpacing: '0.32px'
        }
      ],
      md: [
        '18px',
        {
          lineHeight: '24px',
          letterSpacing: '0.36px'
        }
      ],
      lg: [
        '20px',
        {
          lineHeight: '26px',
          letterSpacing: '0.4px'
        }
      ],
      xl: [
        '24px',
        {
          lineHeight: '32px',
          letterSpacing: '0.96px'
        }
      ],
      '2xl': [
        '26px',
        {
          lineHeight: '40px',
          letterSpacing: '1.36px'
        }
      ],
      '3xl': [
        '28px',
        {
          lineHeight: '40px',
          letterSpacing: '1.36px'
        }
      ],
      '4xl': [
        '30px',
        {
          lineHeight: '44px',
          letterSpacing: '1.4px'
        }
      ],
      '5xl': [
        '32px',
        {
          lineHeight: '44px',
          letterSpacing: '1.4px'
        }
      ],
      '6xl': [
        '34px',
        {
          lineHeight: '44px',
          letterSpacing: '1.4px'
        }
      ],
      '7xl': [
        '36px',
        {
          lineHeight: '46px',
          letterSpacing: '1.44px'
        }
      ]
    },
    extend: {
    },
    container: {
      padding: '1rem',
      height: '100%',
      background: '#162E51'
    },
    width: {
      'tj-title-443': '443px'
    },
    colors: {
      'tj-title': '#C4EEFD',
      'bright-4': '#9adf88',
      'bright-0': '#9be6d1',
      'bright-1': '#f0de6a',
      'bright-2': '#c40447',
      'bright-3': '#da6847',
      'status-1': '#9adf88',
      'status-2': '#f0de6a',
      'status-3': '#c40447',
      'status-4': '#9be6d1',
      'status-5': '#303331',
      'status-6': '#d0e0db',
      'status-7': '#da6847',
      'status-8': '#fd000b',
      white: '#FFFFFF',
      gray: '#F1F1F1'
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'tj': '#162E51'
    })
  },
  plugins: [],
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  }
}
