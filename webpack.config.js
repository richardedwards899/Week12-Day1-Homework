var config = {
  entry: __dirname + '/client/src/app.js',
  output: {
    path: __dirname + '/client/build',
    filename: 'bundle.js'
  },
  devtool: 'source-map'
};

module.exports = config;
