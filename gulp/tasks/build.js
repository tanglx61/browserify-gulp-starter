/* build task, used for local dev testing
   ---------------
   browserify -> concat app.js + libs.js 
*/

var gulp = require('gulp');

gulp.task('build', ['concat-app']);
