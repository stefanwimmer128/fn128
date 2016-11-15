/**
 * Created on 15.11.16 at 21:55
 * @author Stefan Wimmer <stefanwimmer128@gmail.com>
 */

const path = require("path");

module.exports = {
    entry: "./src/fn128",
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: [
                        "es2015",
                    ],
                    plugins: [
                        "add-module-exports",
                    ],
                },
            },
            {
                test: /\.json$/,
                loader: "json-loader",
            },
        ],
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "fn128.js",
        
        library: "fn128",
        libraryTarget: "umd",
    },
};
