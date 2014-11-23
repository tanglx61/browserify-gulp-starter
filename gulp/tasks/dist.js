/* dist task
   ---------------
   concat libs -> build(browserify -> concat app.js + libs.js) 
   			   -> copy-dist -> git
*/

var gulp = require('gulp');
var argv = require('yargs').argv;
var concat = require('gulp-concat');
var streamqueue = require('streamqueue');

global.gitMessage = argv.m;

gulp.task('dist', ['browserify'], function(){
	var libsJS = require('./concat')['concat-libs']();

    var appJS = require('./concat')['concat-app']();
    				
    var stream = new streamqueue({objectMode: true});

    stream.queue(libsJS)
    	.queue(appJS)
    	.done()
    	.pipe(concat('bktengine.min.js'))
    	.pipe(gulp.dest('./build/'))
    	.pipe(gulp.dest('./dist/'))
    	.on('end', function(){
    		require('./git').git();
    	});
});





			


