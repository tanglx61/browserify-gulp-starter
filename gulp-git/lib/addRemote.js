var gutil = require('gulp-util');
var exec = require('child_process').exec;
var escape = require('any-shell-escape');

module.exports = function (remote, url, opt, cb) {
  if (!cb && typeof opt === 'function') {
    // optional options
    cb = opt;
    opt = {};
  }
  if(!url) cb(new Error('gulp-git: Repo URL is required git.addRemote("origin", "https://github.com/user/repo.git")'));
  if(!remote) remote = 'origin';
  if(!opt) opt = {};
  if(!opt.cwd) opt.cwd = process.cwd();
  if(!opt.args) opt.args = ' ';

  var cmd = "git remote add " + opt.args + " " + escape([remote, url]);
  return exec(cmd, {cwd: opt.cwd}, function(err, stdout, stderr){
    if(err) cb(err);
    gutil.log(stdout, stderr);
    cb();
  });
};