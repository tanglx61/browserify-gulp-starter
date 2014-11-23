var dest = "./build";
var src = './src';

var ENTRY_MAIN = '/main.js';

var pkg = require('../package.json');

module.exports = {
  browserify: {
    // Enable source maps
    debug: true,

    // externalize the sourcemaps instead of embedding them insdie the .js
    externalSourceMaps: true,
    
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + ENTRY_MAIN,
      dest: dest,
      outputName: 'app.js'
    }]
  }



};
