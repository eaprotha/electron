const path = require('path');

module.exports = {
    entry: {
        login: './js/login.jsx',
        home: './js/home.jsx'
    },
    output: {
        // filename: 'bundle.js',
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    node: {
        fs: 'empty'
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