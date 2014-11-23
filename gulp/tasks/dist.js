/* dist task
   ---------------
   concat libs -> build(browserify -> concat app.js + libs.js) 
   			   -> copy-dist -> git
*/

var gulp = require('gulp');
var argv = require('yargs').argv;

global.gitMessage = argv.m;

gulp.task('dist', function(){
	gulp.run('concat-libs', function(){
		gulp.run('build', function(){
			gulp.run('copy-dist', function(){
				gulp.run('git', function(){
					console.log('distribution complete');
				});
			});
		});
	});
});


