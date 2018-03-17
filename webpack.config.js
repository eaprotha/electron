const path = require('path');

module.exports = {
    entry: {
        test: './js/login.jsx'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react', 'es2015']
                    }
                }
            }
        ]
    }
};