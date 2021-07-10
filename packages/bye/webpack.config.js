const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'index.bundle.js',
    },
    devServer: {
        port: 3030,
        watchContentBase: true,
    },
    entry: './src/index',
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
            name: 'bye',
            filename: 'remoteEntry.js',
            exposes: {
                './App': './src/Bye',
            },
            shared: ['react', 'react-dom'],
        }),
        new HTMLWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
