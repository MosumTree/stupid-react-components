var webpack = require('webpack');
var path = require('path');
var marked = require("marked");
var renderer = new marked.Renderer();
module.exports = {
    //跟踪代码错误位置
    devtool:'cheap-module-eval-source-map',
    //页面入口文件配置
    entry:'./index',
    //入口文件输出配置
    output:{
        path: path.resolve(__dirname, 'dist'),//打包后的文件存放的地方
        filename: 'bundle.js', //打包后输出文件的文件名
        publicPath: "/dist/"
    },
    plugins: [
        
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
            },
            {
            test: /\.md$/,
            use: [
                {
                    loader: "html-loader"
                },
                {
                    loader: "markdown-loader",
                    options: {
                        pedantic: true,
                        renderer
                    }
                }
            ]
        }
        ]
    }

}