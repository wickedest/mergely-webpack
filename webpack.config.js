const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',

	entry: './src/index.js',

	module: {
		rules: [{
			include: [
				path.resolve(__dirname, 'src')
			],
			test: /\.js$/
		}, {
			test: /\.css$/,
			use: [{
				loader: 'style-loader'
			}, {
				loader: 'css-loader'
			}]
		}]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'index.html'),
			inject: 'head'
		}),
		new webpack.ProvidePlugin({
			mergely: 'mergely'
		})
	],
	externals: {
		CodeMirror: 'CodeMirror'
	}
};
