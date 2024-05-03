const path = require("path")

module.export = {
    entry: ".src//index.js",
    output: {
        chunkFormat: 'jsonp',
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
};