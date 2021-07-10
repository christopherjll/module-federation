const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const ExternalRemotesPlugin = require('external-remotes-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index',
    devServer: {
        port: 5050,
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
            name: 'shell',
            filename: 'remoteEntry.js',
            remotes: {
                bye: 'bye@[byeUrl]/remoteEntry.js',
                hello: 'hello@[helloUrl]/remoteEntry.js',
            },
            shared: ['react', 'react-dom'],
        }),
        new ExternalRemotesPlugin(),
        new HTMLWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
