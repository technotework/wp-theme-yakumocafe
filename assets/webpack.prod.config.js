const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.config.js");
const TerserPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = merge(baseConfig, {
    mode: "production",
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    parallel: true,
                    sourceMap: true


                },
            }),
        ],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './public/images',
                    to: '../images'
                },
            ]
        }),
    ]
});
