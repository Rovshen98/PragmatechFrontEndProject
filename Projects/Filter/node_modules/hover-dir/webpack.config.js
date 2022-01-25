const path = require('path');
const packageJson = require('./package.json');

module.exports = {
    entry: packageJson.main,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'hoverDir.min.js',
        library: 'hoverDir',
        libraryTarget: 'var'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    devtool: false
};