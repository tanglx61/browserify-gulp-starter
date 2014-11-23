/* concat libraries task
   ---------------
   concat all the dependent library files into a single libs.js 
*/
var gulp         = require('gulp');
var sourcemaps   = require('gulp-sourcemaps');
var concat       = require('gulp-concat');


gulp.task('concat-libs', function(callback) {
  gulp.src('./libs/*.js')
    .pipe(sourcemaps.init())
        .pipe(concat('libs.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build/'));

  callback();
});


/* concat app task
   ---------------
   concat the app.js and libs.js into bktengine.min.js, also 
   concats their sourcemap
*/
var gulp         = require('gulp');
var concat       = require('gulp-concat');
var sourcemaps   = require('gulp-sourcemaps');


gulp.task('concat-app', function(callback) {
  gulp.src(['./build/libs.js', './build/app.js'])
 	.pipe(sourcemaps.init({loadMaps:true}))
        .pipe(concat('bktengine.min.js'))
    .pipe(sourcemaps.write('./'))
     
    .pipe(gulp.dest('./build/'));

  callback();
});

