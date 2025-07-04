/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        green: '#5FD788',
        'gray-text': '#9CA3AF',
        'dark-text': '#1F2937',
        'background-gray': '#F3F4F6',
      },
    },
  },
  plugins: [],
}

