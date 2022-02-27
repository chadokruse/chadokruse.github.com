module.exports = {
  content: [
    './src/_includes/**/*.{html,js}',
    './src/_layouts/**/*.{html,js}',
    './src/index.html',
    './src/resume.html',
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('flowbite/plugin'),
  ],
};
