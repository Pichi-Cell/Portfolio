/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{astro,js,ts,jsx,tsx}',
    './src/App.jsx',
    './src/context/**/*.{js,jsx,ts,tsx}',
    './src/components/layout/**/*.{js,jsx,ts,tsx}',
    './src/components/blog/**/*.{astro,js,jsx,ts,tsx}',
    './src/layouts/**/*.{astro,js,jsx,ts,tsx}',
    './src/components/ui/{FloralIllustration,LanguageSwitcher,LazyVideo}.{js,jsx,ts,tsx}',
    './src/sections/{Contact,Experience,Hero,Portfolio,SkillsMatrix}.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F4F1EA',
        paperLight: '#F9F8F6',
        walnut: '#3E2723',
        teak: '#5D4037',
        clay: '#8D6E63',
      },
      fontFamily: {
        serif: ['EB Garamond', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
};
