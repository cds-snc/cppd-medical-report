const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const WebpackNotifierPlugin = require('webpack-notifier')

module.exports = (env, argv) => {
  const { getConfig } = require('@cdssnc/webpack-starter')
  const config = getConfig({
    mode: argv.mode,
    entry: {
      styles: './assets/scss/app.scss',
      app: './assets/js/app.js',
      personal: './routes/personal/js/personal.js',
      add_condition: './routes/add_condition/js/add_condition.js',
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
      ],
    },
    plugins: [
      // make sure to include the plugin!
      new VueLoaderPlugin(),
      new WebpackNotifierPlugin({
        title: 'Node Starter Build',
        contentImage:
          'https://github.com/cds-snc/common-assets/raw/master/EN/cds-snc.png',
      }),
    ],
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js', // Use the full build
      },
    },
  })

  return config
}
