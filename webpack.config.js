const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
    template: './public/index.html',
    filename: './index.html',
});

module.exports = {
    entry: ['./src/index.js'],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'].map(require.resolve),
                        },
                    },
                ],
            },
        ],
    },
    output: {
        path: path.join(__dirname, '/public/webpack/'),
        filename: 'bundle.js',
    },
    // resolve: {
    //     alias: {
    //         config$: './configs/app-config.js',
    //         // react: './vendor/react-master',
    //     },
    //     extensions: ['.js', '.jsx'],
    //     modules: ['node_modules', 'bower_components', 'shared', '/shared/vendor/modules'],
    // },
    plugins: [htmlPlugin],
};
