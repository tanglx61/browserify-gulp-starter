/* git task
   ---------------
   add, commit and push to github
*/
var gulp = require('gulp');
var git = require('gulp-git');



gulp.task('git', function(callback){
	/*gulp.src(['./package.json'])
		.pipe(git.add({args: '-A'}))
		.pipe(git.commit('testing commit'))
		.pipe(git.push('origin', 'master', function(err){
			if (err) throw err;
			callback();
		}));*/
	git.add({args: '-A'});
	git.commit('testing commit msg');
	

	console.log('git push');
	git.push('origin', 'master', function(err){
		if (err) throw err;
		console.log('done');
		callback();
	});
});

gulp.task('testgit', ['git-add', 'git-commit']);

// Run git add with options
gulp.task('git-add', function(callback){
	gulp.src('./package.json')
		.pipe(git.add({args: '-A'}));
    console.log('git added');
    callback();
});



gulp.task('git-commit', function(callback){
	gulp.src('./')
		.pipe(git.commit('git test' ));
	console.log('git commited');
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




