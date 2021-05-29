const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV == "production";

const wwwroot = path.resolve('../Zapp.Web/wwwroot/dist');

const styleHandler = MiniCssExtractPlugin.loader;

const cssHandler = {
	loader: 'css-loader',
	options: { importLoaders: 1 }
}

const postcssHandler = {
	loader: 'postcss-loader',
	options: {
		postcssOptions: {
			plugins: [
				[
					'postcss-preset-env', { browsers: 'last 2 versions', autoprefixer: { grid: true } }
				],
				[	
					'postcss-modules', { generateScopedName: '_[local]__[hash:base64:8]' } 
				]
			]
		}
	}
}

const config = {
	entry: "./src/index.js",
	output: {
		filename: 'js/[name].bundle.js',
		path: wwwroot,
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: 'css/[name].bundle.css' })
	],
	module: {
		rules: [
			{
				test: /\.(c|le|sa|sc)ss$/i,
				use: [styleHandler, cssHandler, postcssHandler]
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: "asset",
			},
		],
	},
	devtool: 'source-map',
};

module.exports = () => {
	if (isProduction) {
		config.mode = "production";
	} else {
		config.mode = "development";
	}
	return config;
};
