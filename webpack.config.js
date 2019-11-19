const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = (env, argv) => {
  const { getConfig } = require('@cdssnc/webpack-starter')
  const config = getConfig({
    mode: argv.mode,
    entry: {
      styles: './assets/scss/app.scss',
      app: './assets/js/app.js',
      personal: './routes/personal/js/personal.js',
    },
    output: {
      filename: 'js/[name].[chunkhash].js',
      path: path.resolve(__dirname, 'public/dist'),
    },
    stats: 'errors-only',
    module: {
      rules: [
        // ... other rules
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        // this will apply to both plain `.js` files
        // AND `<script>` blocks in `.vue` files
        {
          test: /\.js$/,
          loader: 'babel-loader',
        },
        // this will apply to both plain `.css` files
        // AND `<style>` blocks in `.vue` files
        {
          test: /\.css$/,
          use: ['vue-style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
      // make sure to include the plugin!
      new VueLoaderPlugin(),
    ],
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js', // Use the full build
      },
    },
  })

  return config
}
