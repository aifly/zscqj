var config = {
    entry: [
        './index.es6'
    ],
    output: {
        publickPath: './static/js',
        path: './static/js',
        filename: 'index.js'
    },
  /*  devServer: {
        inline: true,
        port: 3000
    },
*/
    module: {
        loaders: [{
            test: /\.js|\.es6$/,
            exclude: /node_modules/,
            loaders:[ 'babel']
        },
            {
                test: /\.(css)$/,
                loader: 'style-loader!css-loader'
            },
            {
                test:/\.(png|jpg)$/,
                loader:'url-loader?limit=8192'
            }]
    }
}

module.exports = config;