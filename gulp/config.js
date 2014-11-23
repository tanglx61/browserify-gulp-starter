var dest = "./build";
var src = './src';

module.exports = {
  browserify: {
    // Enable source maps
    debug: true,

    // externalize the sourcemaps instead of embedding them insdie the .js
    externalSourceMaps: true,
    
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/main.js',
      dest: dest,
      outputName: 'app.js'
    }]
  }
};
