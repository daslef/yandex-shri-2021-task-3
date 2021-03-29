const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const sharedConfig = {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test:/\.(s*)css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader, 
                        options: {
                            publicPath: ''
                        }
                    },
                    'css-loader',
                    'resolve-url-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                          postcssOptions: {
                            plugins: [
                              [
                                "postcss-preset-env",
                                { browsers: 'last 2 versions' },
                                "autoprefixer",
                              ],
                            ],
                          },
                        },
                    },
                    'sass-loader',
                ]
            },
            {
                test: /\.(ttf)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      limit: 8192,
                    }
                  },
                ],
               type: 'javascript/auto'
              },
        ],
    },
}

const buildApp = {
    name: 'buildApp',
    entry: {
        index: './src/index.ts',
        frame: './src/frame.ts',
    },
    devtool: 'inline-source-map',
    devServer: { 
        contentBase: './dist',
        proxy: {
            "/api/*": {
              target: "http://localhost:9090"
            }
        } 
    },
    plugins: [
        new CopyPlugin({ patterns: ['public'] }),
        new HtmlWebpackPlugin({ filename: 'index.html', chunks: ['index'], template: 'src/index.html' }),
        new HtmlWebpackPlugin({ filename: 'frame.html', chunks: ['frame'], template: 'src/frame.html' }),
        new MiniCssExtractPlugin(),
    ],
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: '[name].[contenthash:8].js',
        path: path.resolve(__dirname, 'dist'),
    },
    performance: {
        hints: false,
    },
};
  
const buildSlides = {
    name: 'buildSlides',
    entry: './src/slides/stories.js',
    output: {
      filename: 'stories.js',
      path: path.resolve(__dirname, 'public')
    },
    optimization: {
        minimize: false
    },
    plugins: [
        new MiniCssExtractPlugin({
           filename: 'stories.css',
        }),
    ]
};
  
  
  
module.exports = [{ ...sharedConfig, ...buildApp }, { ...sharedConfig, ...buildSlides }];