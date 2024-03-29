/* git task
   ---------------
   add, commit and push to github
*/
var gulp = require('gulp');
var git = require('gulp-git');
var moment = require('moment');



gulp.task('git', doGit);

function doGit(){
  gulp.src('./')
    .pipe(git.add({args: '-A'}))
    .pipe(git.commit(getCommitMessage(), {}, push));
   
}


function push(){
	git.push('origin', 'master', function (err) {
	  if (err) throw err;
	  console.log('github push complete!');
	});
}

function getCommitMessage(){
	return global.gitMessage? 
				global.gitMessage : 'dist: ' + moment().format('YYYY-MM-DD-hh-mm-ss');
}


module.exports = {
	'git' : doGit
};



