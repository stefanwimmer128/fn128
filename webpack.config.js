/**
 * Created on 15.11.16 at 21:55
 * @author Stefan Wimmer <stefanwimmer128@gmail.com>
 */

const path = require("path");
const combineLoaders = require("webpack-combine-loaders");

module.exports = {
    entry: "./src/fn128",
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: combineLoaders([
                    {
                        loader: "string-replace-loader",
                        query: {
                            search: "${version}",
                            replace: require("./package.json").version,
                        },
                    },
                    {
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
                ]),
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
