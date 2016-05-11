var gulp = require('gulp');
var gutil = require('gulp-util');
var browserSync = require('browser-sync');

gulp.task('serve', function () {
	browserSync({
		notify: false,
		logPrefix: 'SoN',
		server: 'www'
	});

	gulp.watch(['www/**/*'], browserSync.reload);
	//gulp.watch(['www/**/*.html'], reload);
	//gulp.watch(['www/css/**/*.css'], reload);
	//gulp.watch(['www/js/**/*.js'], reload);
	//gulp.watch(['www/images/**/*'], reload);
});

gulp.task('default', function() {
  gutil.log('hello world !');
});
