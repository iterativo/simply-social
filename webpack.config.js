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
        ],
    },
    devtool: 'eval-source-map',
};
