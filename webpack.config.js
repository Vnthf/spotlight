const path = require('path');


const WEBPACK_DIST_PATH = path.join(__dirname, './dist');
const WEBPACK_DIST_FILE = '[name].js';

const config = {
	cache: false,
	entry: {
		spotlight: './src/index.js'
	},
	context: __dirname,
	output: {
		path: WEBPACK_DIST_PATH,
		publicPath: '/dist',
		filename: WEBPACK_DIST_FILE,
		libraryTarget: "umd"
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules(?!\/webpack-dev-server)/,
			use: {
				loader: 'babel-loader',
				options: {
					cacheDirectory: true
				}
			}
		}]
	},
	devtool: 'inline-source-map',
	devServer: {
		overlay: true
	},
	optimization: {
		minimize: false,
	}
}

module.exports = config;