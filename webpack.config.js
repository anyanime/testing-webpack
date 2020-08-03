const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "development",
    plugins: [
        new htmlWebpackPlugin({
            title: "Javascript-Dev",
        }),
    ],
};