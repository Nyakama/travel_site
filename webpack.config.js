var path = require('path');

module.exports = {
    mode: 'development',
    entry: {
      App: "./app/assets/scripts/App.js",
      Vendors: "./app/assets/scripts/Vendors.js"
    },    
    output: {
        path: path.resolve(__dirname, "./app/temp/scripts"),
        filename: "[name].js"
    }
    ,
    // module: {        
    //     rules: [
    //         // rules for modules (configure loaders, parser options, etc.)
    //         {
    //             loader: "babel-loader",                
    //             options: {
    //                 presets: ["env"]                   
    //             },
    //             enforce: "pre",
    //             enforce: "post",
    //             test: /\.js$/,
    //             exclude:[ path.resolve(__dirname, "/node_modules/") ] 
    //         }
    //     ]
    // }
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
}

