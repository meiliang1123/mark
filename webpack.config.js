var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");



var config = {

    entry: {
        app: './index.js',
        //server:'./server.js',
        vender: ['react', "react-dom", "react-router", 'react-addons-css-transition-group', "classnames"],
    },
    output: {
        path: "assets/build/",
        filename: '[name].js',
        //publicPath: '/',
    },
    module: {
        loaders:[
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a valid name to reference
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react', 'stage-2']
                }
            }, {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            }, {
                test: /\.css/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=25000'
            }
        ]
    },
    postcss: [autoprefixer],
    plugins: [
        new webpack.DefinePlugin({
            DEBUG: process.env.NODE_ENV !== 'production'
        }),
        new ExtractTextPlugin("[name].css"),
        new webpack.optimize.CommonsChunkPlugin("vender", 'common.js'),

        //new HtmlWebpackPlugin({
        //    template: '../wx/index.html'
        //}),
        //new OpenBrowserPlugin({ url: 'http://localhost:8080' })
    ]
};
if(process.argv.find(item=> item =='--publish')){
    config.output =  {
        path: "../wx/static",
        filename: '[name].build.js',
        publicPath: '/static/',
    };
    config.plugins.push( new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        mangle: false
    }));
}
module.exports = config;
