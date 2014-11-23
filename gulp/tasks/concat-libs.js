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

