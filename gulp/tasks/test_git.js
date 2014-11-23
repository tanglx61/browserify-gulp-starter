var gulp = require('gulp');
var git = require('gulp-git');

// Run git init
// src is the root folder for git to initialize
gulp.task('init', function(){
  git.init(function (err) {
    if (err) throw err;
  });
});

// Run git init with options
gulp.task('init', function(){
  git.init({args: '--quiet --bare'}, function (err) {
    if (err) throw err;
  });
});


gulp.task('try', function(){
  gulp.src('./')
    .pipe(git.add({args: '-A'}))
    .pipe(git.commit('commiting test', {}, function(){
      console.log('commit ended');
    }));
    
   
});
 

// // Run git add
// // src is the file(s) to add (or ./*)
// gulp.task('add', function(){
//   return gulp.src('')
//     .pipe(git.add());
// });

// Run git add with options
gulp.task('add', function(done){
  gulp.src('')
    .pipe(git.add({args: '-A'}, function(){
      console.log('add complete');
      done();
    }));
});

// Run git commit
// src are the files to commit (or ./*)
gulp.task('commit', function(done){
  gulp.src('')
    .pipe(git.commit('testing git'), function(){

    });

  console.log('commit complete');
});

/*// Run git commit with options
gulp.task('commit', function(){
  return gulp.src('./git-test/*')
    .pipe(git.commit('initial commit', {args: '-A --amend -s'}));
});*/

// Run git remote add
// remote is the remote repo
// repo is the https url of the repo
gulp.task('remote', function(){
  git.addRemote('origin', 'https://github.com/stevelacy/git-test', function (err) {
    if (err) throw err;
  });
});

// Run git push
// remote is the remote repo
// branch is the remote branch to push to
gulp.task('push', function(done){
  git.push('origin', 'master', function (err) {
    if (err) throw err;
    if (done) done();
    console.log('push complete');
  });
});

// Run git push with options
// branch is the remote branch to push to
/*gulp.task('push', function(){
  git.push('origin', 'master', {args: " -f"}, function (err) {
    if (err) throw err;
  });
});*/

// Run git pull
// remote is the remote repo
// branch is the remote branch to pull from
gulp.task('pull', function(){
  git.pull('origin', 'master', {args: '--rebase'}, function (err) {
    if (err) throw err;
  });
});


// Clone a remote repo
gulp.task('clone', function(){
  git.clone('https://github.com/stevelacy/gulp-git', function (err) {
    if (err) throw err;
  });
});


// Tag the repo with a version
gulp.task('tag', function(){
  git.tag('v1.1.1', 'Version message', function (err) {
    if (err) throw err;
  });
});

// Tag the repo With signed key
gulp.task('tagsec', function(){
  git.tag('v1.1.1', 'Version message with signed key', {args: "signed"}, function (err) {
    if (err) throw err;
  });
});

// Create a git branch
gulp.task('branch', function(){
  git.branch('newBranch', function (err) {
    if (err) throw err;
  });
});

// Checkout a git branch
gulp.task('checkout', function(){
  git.checkout('branchName', function (err) {
    if (err) throw err;
  });
});

// Create and switch to a git branch
gulp.task('checkout', function(){
  git.checkout('branchName', {args:'-b'}, function (err) {
    if (err) throw err;
  });
});

// Merge branches to master
gulp.task('merge', function(){
  git.merge('branchName', function (err) {
    if (err) throw err;
  });
});

// Reset a commit
gulp.task('reset', function(){
  git.reset('SHA', function (err) {
    if (err) throw err;
  });
});

// Git rm a file or folder
gulp.task('rm', function(){
  return gulp.src('./gruntfile.js')
    .pipe(git.rm());
});

gulp.task('addSubmodule', function(){
  git.addSubmodule('https://github.com/stevelacy/git-test', 'git-test', { args: '-b master'});
});

gulp.task('updateSubmodules', function(){
  git.updateSubmodule({ args: '--init' });
});

// Working tree status
gulp.task('status', function(){
  git.status({args: '--porcelain'}, function (err, stdout) {
    if (err) throw err;
  });
});

// Other actions that do not require a Vinyl
gulp.task('log', function(){
  git.exec({args : 'log --follow index.js'}, function (err, stdout) {
    if (err) throw err;
  });
});

// Run gulp's default task
gulp.task('default',['add']);