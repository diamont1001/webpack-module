// webpack.config.js

module.exports = {
    entry: {
        utils: './src/main.js'
    },
    output: {
        path: './dist',
        filename: '[name].js',
        libraryTarget: 'umd' // 组件采用UMD格式打包
    },

    module: {
        loaders: [
            {
                test: /\.js$/, loader: 'babel-loader',
                exclude: /(node_modules|libs)/
            }
        ]
    }
};