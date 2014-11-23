/* concat app task
   ---------------
   concat the app.js and libs.js into bktengine.min.js
*/
var gulp         = require('gulp');
var concat       = require('gulp-concat');


gulp.task('concat-app', function(callback) {
  gulp.src(['./build/libs.js', './build/app.js'])
     .pipe(concat('bktengine.min.js'))
    .pipe(gulp.dest('./build/'));

  callback();
});

