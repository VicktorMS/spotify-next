/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/preline/dist/*.js',
    // "./pages/**/*.{ts,tsx}",
    // "./public/**/*.html",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'main-layout-column': '328px 1fr',
      },
      gridTemplateRows: {
        'main-layout-footer': '1fr 80px',
        'aside-layout': '96px 1fr',
      }
    },
  },
  plugins: [
    require('preline/plugin'),
    require('tailwind-scrollbar'),
  ],
}
