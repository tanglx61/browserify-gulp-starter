/* git task
   ---------------
   add, commit and push to github
*/
var gulp = require('gulp');
var git = require('gulp-git');



gulp.task('git', ['git-add', 'git-commit', 'git-push']);

// Run git add with options
gulp.task('git-add', function(callback){
	gulp.src('./')
		.pipe(git.add({args: '-A'}));
    
    callback();
});



gulp.task('git-commit', function(callback){
	gulp.src('./')
		.pipe(git.commit('testing gulp git flow again' ));
	
	callback();
});


gulp.task('git-push', function(callback){
  git.push('origin', 'master', function (err) {
    if (err) throw err;
    else callback();
  });
});


gulp.task('git-pull', function(){
  git.pull('origin', 'master', function (err) {
    if (err) throw err;
  });
});




