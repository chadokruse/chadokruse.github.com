module.exports = {
  content: [
    './src/_includes/**/*.{html,js}',
    './src/_layouts/**/*.{html,js}',
    './src/*.html',
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
