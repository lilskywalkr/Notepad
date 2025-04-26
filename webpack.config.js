const path = require('path');

module.exports = {
    mode: 'production',
    entry: ['./src/index.js', './src/app.js'],
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'main.js'
    },
    experiments: {
        topLevelAwait: true
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        allowedHosts: 'all',
        compress: true,
        port: 3000,
        open: true,
    },
};