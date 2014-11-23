/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
*/

var gulp  = require('gulp');

gulp.task('watch', ['setWatch', 'browserify'], function(){
	watchApp();
});

function watchApp(){
	gulp.watch('./build/app.js', function(){
		if (global.isWatching){
			require('./concat')['concat-app']();
		}
	});
}
