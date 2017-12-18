const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		editor: './src/index.js'
	},
	devServer: {
		historyApiFallback: {
			index: '/editor'
		}
	},
	output: {
		path: path.resolve(__dirname, 'lib'),
		publicPath: '/editor',
		filename: './index.js'
	},
	resolve: {
		extensions: ['.js'],
		alias: {
			'mergely':		path.join(__dirname, 'node_modules', 'mergely'),
			'CodeMirror':	path.join(__dirname, 'node_modules', 'codemirror'),
			'jQuery':		path.join(__dirname, 'node_modules', 'jquery'),
			'$':			path.join(__dirname, 'node_modules', 'jquery')
		}
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('css-loader')
			}
		]
	},
	externals: {
	},
	plugins: [
		new ExtractTextPlugin('index.css'),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			CodeMirror: 'codemirror'
		}),
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			filename: 'index.html'
		})
	]
};
