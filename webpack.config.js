const webpack = require('webpack')
const path = require('path')

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    devServer: {
        contentBase: './public',
        port: 8080
    },
    output: {
        filename: "./bundle.js",
        path: path.join(__dirname, '/public')
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [ 
                        '@babel/preset-env', 
                        '@babel/preset-react'
                    ]
                }
            }
        ]
    }
}