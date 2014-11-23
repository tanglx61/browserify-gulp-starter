/* copy dist task
   ---------------
   copy the necessary files for distribution into ./dist folder

*/
var gulp = require('gulp');

var files = [
	'./build/bktengine.min.js',
];


gulp.task('copy-dist', function(callback) {
  gulp.src(files)     
    .pipe(gulp.dest('./dist/'));

  callback();
});

