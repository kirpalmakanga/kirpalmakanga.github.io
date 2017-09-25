module.exports = () => ({
  quiet: false,
  entry: './src/scripts/index.js',
  title: 'MK',
  devServer: {
		quiet: false
	},
  filename: {
    js: '[name].js',
    css: 'style.css',
    static: 'static/[name].[ext]'
  }
})
