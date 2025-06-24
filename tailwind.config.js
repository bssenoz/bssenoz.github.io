/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'minion': ['minion-pro', 'serif'],
      'minion-italic': ['minion-pro', 'serif'],
      'futura': ['futura-pt', 'sans-serif'],
      'futura-bold': ['futura-pt-bold', 'sans-serif'],
      'reminder': ['pf-reminder', 'sans-serif'],
      'reminder-bold': ['pf-reminder', 'sans-serif'],
      'MrsSaintDelafield-Regular': ['MrsSaintDelafield-Regular', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '0',
      screens: {
        desktop: "1200px",
      },
    },
    darkMode: 'class',
    extend: {
      screens: {
        '2xs': '320px',
        'xs': '400px',
        'sm': '640px',
        'md': '768px',
        'lg': '1200px',
        'xl': '1280px',
        '2xl': '1440px',
        '3xl': '1792px',
        '4xl': '2048px',
        '5xl': '2560px',
      },
      colors: {
        'dark': '#000000',
        'white': '#FFFFFF',
        'bg-dark': '#1C1C1C',
        'bg-blue': '#EBF8FA',
        'bg-blue-2': '#E7F2F5',
        'bg-gray': '#DBDAD7',
        'bg-beige': '#F7F7F5',
        'bg-green': '#8BB985',
      },
      fontSize: {
        'title-xl': '72px',
        'title-lg': '64px',
        'title-md': '48px',
        'title-sm': '35px',
        'content': '15px',
        'content-lg': '16px',
        'content-md': '13px',
        'content-sm': '12px',
      },
    },
  },
  plugins: []
}