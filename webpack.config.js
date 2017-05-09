/* global __dirname */

var path = require('path');

var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var dir_js = path.resolve(__dirname, 'js');
var dir_html = path.resolve(__dirname, 'html');
var dir_build = path.resolve(__dirname, 'docs');

module.exports = {
    entry: path.resolve(dir_js, 'main.js'),
    output: {
        publicPath: 'http://localhost:8080/',
        path: dir_build,
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: dir_build,
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            },
            test: dir_js,
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            loader: "style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]"
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            loader: "style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader"
        }]
    },
    plugins: [
        // Simply copies the files over
        // new CopyWebpackPlugin([{
        //         from: dir_html
        //     } // to: output.path
        // ]),

        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.js', '.es6','.jsx']
    },
};