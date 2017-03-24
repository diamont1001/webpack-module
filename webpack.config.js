// webpack.config.js

module.exports = {
    entry: {
        bundle: './src/main.js'
    },
    output: {
        path: './dist',
        filename: '[name].js',
        libraryTarget: 'umd', // 组件采用UMD格式打包
        library: 'Demo' // 打包后模板对象名
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
