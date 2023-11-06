/** @type {import('tailwindcss').Config} */
// Lovely pig has arrived!
//                               _
//  _._ _..._ .-',     _.._(`))
// '-. `     '  /-._.-'    ',/
//    )         \            '.
//   / _    _    |             \
//  |  a    a    /              |
//  \   .-.                     ;
//   '-('' ).-'       ,'       ;
//      '-;           |      .'
//         \           \    /
//         | 7  .__  _.-\   \
//         | |  |  ``/  /`  /
//        /,_|  |   /,_/   /
//           /,_/      '`-'
//
// Follow me, speak: "I am a pig, lovely pig XD"
// const theme = require('tailwindcss/defaultTheme')
// const plugin = require('tailwindcss/plugin')
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  variants: {
    lineClamp: ['responsive', 'hover'],
  },
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      width: {
        // 12: '48px' (default * 4)
        // '12px': '12px'
        // '12%': '12%'
        4.5: '18px',
        5.5: '22px',
        6.5: '26px',
        'cut-1': 'calc(100% - 8px)',
        'cut-2': 'calc(100% - 16px)',
        'cut-3': 'calc(100% - 24px)',
        'cut-4': 'calc(100% - 32px)',
      },
      height: {
        // 12: '48px' (default * 4)
        // '12px': '12px'
        // '12%': '12%'
        4.5: '18px',
        5.5: '22px',
        6.5: '26px',
        'cut-1': 'calc(100% - 8px)',
        'cut-2': 'calc(100% - 16px)',
        'cut-3': 'calc(100% - 24px)',
        'cut-4': 'calc(100% - 32px)',
      },
      borderRadius: {
        s: '4px',
        m: '6px',
        l: '8px',
      },
      boxShadow: {
        DEFAULT: '0px 0px 40px 0px rgba(185,185,185,0.25)',
      },
      maxWidth: {},
      container: {
        padding: '1rem',
        height: '100%',
        background: '#f1f1f1',
      },
      animation: {
        'entrance-in': 'e-in .2s linear',
        'entrance-out': 'e-out .2s linear',
      },
      keyframes: {
        'e-in': {
          '0%': { width: '33%' },
          '100%': { width: '66%' },
        },
        'e-out': {
          '0%': { width: '66%' },
          '100%': { width: '33%' },
        },
      },
    },
    fontSize: {
      title: [
        '20px',
        {
          'line-height': '28px',
          'text-align': 'center',
          'font-weight': '800',
        },
      ],
      '3xs': [
        '10px',
        {
          lineHeight: '13px',
          letterSpacing: '0.2px',
        },
      ],
      '2xs': [
        '11px',
        {
          lineHeight: '14px',
          letterSpacing: '0.22px',
        },
      ],
      xs: [
        '12px',
        {
          lineHeight: '15px',
          letterSpacing: '0.24px',
        },
      ],
      xsm: [
        '13px',
        {
          lineHeight: '17px',
          letterSpacing: '0.26px',
        },
      ],
      sm: [
        '14px',
        {
          lineHeight: '18px',
          letterSpacing: '0.28px',
        },
      ],
      'x-base': [
        '15px',
        {
          lineHeight: '19px',
          letterSpacing: '0.3px',
        },
      ],
      base: [
        '16px',
        {
          lineHeight: '28px',
          letterSpacing: '0.32px',
        },
      ],
      md: [
        '18px',
        {
          lineHeight: '24px',
          letterSpacing: '0.36px',
        },
      ],
      lg: [
        '20px',
        {
          lineHeight: '26px',
          letterSpacing: '0.4px',
        },
      ],
      xl: [
        '24px',
        {
          lineHeight: '32px',
          letterSpacing: '0.96px',
        },
      ],
      '2xl': [
        '26px',
        {
          lineHeight: '40px',
          letterSpacing: '1.36px',
        },
      ],
      '3xl': [
        '28px',
        {
          lineHeight: '40px',
          letterSpacing: '1.36px',
        },
      ],
      '4xl': [
        '30px',
        {
          lineHeight: '44px',
          letterSpacing: '1.4px',
        },
      ],
      '5xl': [
        '32px',
        {
          fontWeight: 800,
          lineHeight: '38px',
          letterSpacing: '1.2px',
        },
      ],
      '6xl': [
        '34px',
        {
          lineHeight: '44px',
          letterSpacing: '1.4px',
        },
      ],
      '7xl': [
        '36px',
        {
          lineHeight: '46px',
          letterSpacing: '1.44px',
        },
      ],
      xm: [
        '12px',
        {
          lineHeight: '25px',
        },
      ],
    },
    colors: {
      a1: '#a1a1a1',
      a7: '#a7a7a7',
      bb: '#bbbbbb',
      b5: '#B5B5B5',
      b8: '#b8b8b8',
      c3: '#c3c3c3',
      c4: '#C4C4C4',
      dd: '#dddddd',
      e0: '#E0E0E0',
      e1: '#E1E1E1',
      e2: '#E2E2E2',
      e3: '#E3E2E2',
      e5: '#e5e5e5',
      e6: '#e6e6e6',
      e7: '#e7e7e7',
      f1: '#f1f1f1',
      f2: '#f2f2f2',
      f3: '#f3f3f3',
      fa: '#fafafa',
      ff: '#ffffff',
      '00': '#000000',
      11: '#111111',
      22: '#222222',
      33: '#333333',
      44: '#444444',
      55: '#555555',
      66: '#666666',
      69: '#696969',
      77: '#777777',
      88: '#888888',
      99: '#999999',
      base: 'var(--color-base)',
      'b-base': 'var(--color-base-bg)',
      warn: '#FF5656',
      info: '#44B063',
      'is-active': '#0091fe',
      active: '#e3f2fd',
    },
    gradientColorStops: (theme) => ({
      ...theme('colors'),
    }),
    borderColor: (theme) => ({
      ...theme('colors'),
    }),
    backgroundColor: (theme) => ({
      ...theme('colors'),
    }),
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
}
