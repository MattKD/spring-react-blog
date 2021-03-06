module.exports = {
  entry: __dirname + '/src/App.js',
	
  output: {
    path: __dirname + '/public/js',
    filename: 'index.js',
  },
	
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};

