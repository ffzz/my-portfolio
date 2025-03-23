import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0070f3',
          '50': '#eef8ff',
          '100': '#d9eeff',
          '200': '#bce0ff',
          '300': '#8acdff',
          '400': '#51b1ff',
          '500': '#288cff',
          '600': '#0070f3',
          '700': '#005edb',
          '800': '#004eb4',
          '900': '#00378d',
          '950': '#00245e',
        },
        secondary: {
          DEFAULT: '#ff4081',
          '50': '#fff1f6',
          '100': '#ffe5ef',
          '200': '#ffd0e0',
          '300': '#ffacc6',
          '400': '#ff7aa8',
          '500': '#ff4081',
          '600': '#e61e64',
          '700': '#c7164f',
          '800': '#a51744',
          '900': '#861a3c',
          '950': '#4f0820',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        mono: ['var(--font-roboto-mono)', 'Roboto Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
        'slide-up': 'slide-up 0.5s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config; 