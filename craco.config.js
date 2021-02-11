// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
    webpack: {
      alias: {},
      plugins: {
        add: [], /* An array of plugins */
        remove: [],  /* An array of plugin constructor's names (i.e. "StyleLintPlugin", "ESLintWebpackPlugin" ) */
      },
      configure: { /* Any webpack configuration options: https://webpack.js.org/configuration */ },
    },
  },
}
