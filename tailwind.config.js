module.exports = {
  content: [
    './_includes/**/*.{html,js}',
    './_layouts/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('flowbite/plugin'),
  ],
};
