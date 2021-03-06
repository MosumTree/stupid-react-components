var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //跟踪代码错误位置
    devtool:false,
    //页面入口文件配置
    entry:'./index',
    //入口文件输出配置
    output:{
        path: path.resolve(__dirname, 'dist'),//打包后的文件存放的地方
        filename: '[name]-[hash:5].min.js', //打包后输出文件的文件名
        publicPath: "./"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            comments: false,        //去掉注释
            compress: {
                warnings: false    //忽略警告,要不然会有一大堆的黄色字体出现……
            }
        }),
        new HtmlWebpackPlugin({
            template: __dirname + "/index.tpl.html",
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
            filename: 'index.html',
            //要把script插入到标签里
            inject: 'body'
        }),

        new webpack.ProvidePlugin({
            'Promise':'es6-promise',
            'fetch': 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
        }),

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
        
    ],
    module: {
        rules: [
            {
                test: /\.(less|css)$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader?sourceMap',
                        options: {
                            minimize: true,
                            modules: true,
                            localIdentName: '[name]-[local]-[hash:base64:5]',
                            importLoaders: 1
                        }
                    },
                    // 'postcss-loader',
                    { 
                        loader: 'postcss-loader', 
                        options: { sourceMap: true } 
                    },
                    'less-loader?sourceMap'
                ]
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options:  { presets: 
                    [
                        "es2015",
                        'react',
                        "babel-preset-stage-2"
                    ] 
                }
            },
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                use: [
                    'file-loader' 
                ]
            },
            {
                test: /\.(gif|jpg|png|woff|eot|ttf)$/,
                exclude: /node_modules/,
                use: [
                    'file-loader' // 图片小于8k就转化为 base64, 或者单独作为文件
                ]
            }
        ]
    },
    node: {
        fs: 'empty',
        net:'empty'
    },
    resolve: {
        extensions: ['.js'],
        modules: ['node_modules','components','view'],
        alias: {
        }
    }

}