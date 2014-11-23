/* git task
   ---------------
   add, commit and push to github
*/
var gulp = require('gulp');
var git = require('gulp-git');



gulp.task('git', ['git-add', 'git-commit', 'git-push']);

// Run git add with options
gulp.task('git-add', function(){
  	return gulp.src('')
    	.pipe(git.add({args: '-A'}));
});



gulp.task('git-commit', function(){
	return gulp.src('')
		.pipe(git.commit('testing gulp git flow' ));
});


gulp.task('git-push', function(){
  git.push('origin', 'master', function (err) {
    if (err) throw err;
  });
});


gulp.task('git-pull', function(){
  git.pull('origin', 'master', function (err) {
    if (err) throw err;
  });
});




