const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index',
    devServer: {
        port: 4040,
        watchContentBase: true,
    },
    output: {
        publicPath: 'auto',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'hello',
            filename: 'remoteEntry.js',
            exposes: {
                './App': './src/Hello',
            },
            shared: ['react', 'react-dom'],
        }),
        new HTMLWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
