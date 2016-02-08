var path = require('path');
var extractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './app/app.js',
    devtool: 'sourcemap',
    output: {
        filename: 'test.js',
        library: 'testlib',
        libraryTarget: 'var',
        path: './Content/Scripts',
        pathinfo: true
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
                test: /\.less/,
                loader: extractTextPlugin.extract(
                    "css?sourceMap!" +
                    "less?relativeUrls&noIeCompat"
                    )
            },
            { test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/, loader: 'file?name=app/generated/[name].[ext]' },
        ]
    },
    plugins: [
        new extractTextPlugin("../css/styles.css"),
    ]
}