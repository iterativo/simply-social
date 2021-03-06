var webpack = require('webpack');
var path = require('path');

var paths = {
    SRC: path.resolve(__dirname, 'src'),
    DIST: path.resolve(__dirname, 'dist'),
};

module.exports = {
    context: paths.SRC,
    entry: {
        app: './index.js',
    },
    output: {
        path: paths.DIST,
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: paths.SRC,
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'url-loader?limit=10000',
                    'img-loader',
                ],
            },
            {
                test: /\.scss$/,
                loaders: [
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    devtool: 'eval-source-map',
};
