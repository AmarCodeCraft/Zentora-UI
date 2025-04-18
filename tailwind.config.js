/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: '#FAFAFA',
        dark: '#1A1A1A',
        primary: {
          DEFAULT: '#6366F1',
          light: '#818CF8',
          dark: '#4F46E5'
        },
        secondary: {
          DEFAULT: '#818CF8',
          light: '#E0E7FF'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Satoshi', 'Inter', 'system-ui', 'sans-serif']
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.primary.DEFAULT'),
              '&:hover': {
                color: theme('colors.primary.dark'),
              },
            },
            h1: {
              fontFamily: theme('fontFamily.heading'),
              fontWeight: '700',
            },
            h2: {
              fontFamily: theme('fontFamily.heading'),
              fontWeight: '700',
            },
            h3: {
              fontFamily: theme('fontFamily.heading'),
              fontWeight: '600',
            },
            h4: {
              fontFamily: theme('fontFamily.heading'),
              fontWeight: '600',
            },
          },
        },
      }),
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
};