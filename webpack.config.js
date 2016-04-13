var config = {
    entry: {
        'index':"./index.es6",
        'huigu':'./huigu.es6',
        'licheng':'./licheng.es6',
        'tushuo':'./tushuo.es6',
        'fengcai':'./fengcai.es6',
        'shuhuai':'./shuhuai.es6'
    },
    output: {
        publickPath: './static/js',
        path: './static/js',
        filename: "[name].js",
        chunkFilename: "[name].js"
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