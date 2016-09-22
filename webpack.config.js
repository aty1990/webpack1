var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
	devtool: 'eval-source-map',
	entry:{
		admin:'./admin/index.js',
		consumer:'./consumer/index.js'
	},
	plugins:[
		new webpack.optimize.UglifyJsPlugin()
	],
	output:{
		path:path.join(__dirname,'dist'),
		publicPath:"/dist/",
		filename:'[name].bundle.js'		
	},
	module:{
		loaders:[
			{test: /\.css$/,loader: "style-loader!css-loader"}
			/*{test: /\.css$/,loader: ExtractTextPlugin.extract("style","css")}*/

		]
	}/*,
	plugins:[
		new ExtractTextPlugin("css/[name].css")
	]*/
}