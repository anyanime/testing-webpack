const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Javascript-Dev",
            myPageHeader: 'I am the king of the jungle',
            template: './src/index.html',
            filename: './dist/index.html' //relative to root of the application
        }),
    ],
};