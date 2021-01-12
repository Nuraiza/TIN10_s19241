const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');


 const dirname = 'C:/Users/test/Desktop/Tin/Labs/Assignment10/TIN10_s19241';

 module.exports = {
  entry: path.resolve(dirname, './src/entry-point.js'),
  output: {
    path: path.resolve(dirname, './dist'),
    filename: 'bundle.js',
  },
    
  devServer: {
    contentBase: path.resolve(dirname, './dist'),
  },
      optimization: {
    minimizer: [
      new TerserPlugin(),
        new CssMinimizerPlugin(),
    ],
  },
};
