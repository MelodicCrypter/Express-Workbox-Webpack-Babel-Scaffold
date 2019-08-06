const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const AutoCleanBuildPlugin = require('webpack-auto-clean-build-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

// Frontend config ==================================================
const frontConfig = {
    target: 'web',
    entry: {
        app: [path.resolve(__dirname, './public/js/main.js')],
    },
    output: {
        path: path.resolve(__dirname, './public/build/'),
        filename: '[name].[contenthash].main.bundle.js',
        publicPath: '/build/',
    },
    watchOptions: {
        ignored: /node_modules/,
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: [/.css$|.scss$/],
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                // eslint-disable-next-line global-require
                                require('autoprefixer')({
                                    browsers: ['> 1%', 'last 2 versions'],
                                }),
                            ],
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: devMode,
                        },
                    },
                ],
            },
            {
                test: /\.(ico|ttf|woff|woff2|eot)(\?[\s\S]+)?$/,
                use: 'file-loader',
            },
            {
                test: /\.(gif|png|jpe?g|ico)$/i,
                use: ['file-loader'],
            },
        ],
    },
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    plugins: [
        new webpack.HashedModuleIdsPlugin(),
        new CleanWebpackPlugin(),
        new WorkboxWebpackPlugin.InjectManifest({
            swSrc: path.resolve(__dirname, './src-sw.js'),
            swDest: path.resolve(__dirname, './sw.js'),
            globDirectory: 'public/',
            globPatterns: ['views/**/*.html', 'server-bundle.js'],
            importsDirectory: 'wbassets',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        }),
        new webpack.DefinePlugin({
            'process.env.AUTHOR': JSON.stringify('hughcaluscusin'),
        }),
    ],
};

// Backend config =======================================================
const backConfig = {
    target: 'node',
    entry: {
        app: [path.resolve(__dirname, './public/server.js')],
    },
    output: {
        path: path.resolve(__dirname, './public/'),
        filename: 'server-bundle.js',
    },
    node: {
        __dirname: true,
        __filename: true,
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
};

// Combined
module.exports = [frontConfig, backConfig];
