module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'script',
  },
  env: {
    es2021: true,
    node: true,
    browser: true,
  },
  plugins: [
    'eslint-plugin-html',
  ],
  extends: 'eslint:recommended',
  rules: {},
};
