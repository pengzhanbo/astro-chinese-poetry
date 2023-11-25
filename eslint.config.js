import config from '@pengzhanbo/eslint-config-astro'

export default config({}, {
  files: ['**/*.astro'],
  rules: {
    'astro/no-unused-css-selector': 'off',
    'style/jsx-indent': 'off',
    'style/jsx-one-expression-per-line': 'off',
  },
})
