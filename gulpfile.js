var gulp = require('gulp'),
	gutil = require('gulp-util'),
	browserify = require('gulp-browserify'),
	concat = require('gulp-concat');
	
var jsSources = [
	'components/scripts/bootstrap.js'
]	

gulp.task('log',function(){
	gutil.log('Khabarfeed are news portail website')
	
});

gulp.task('js', function(){
	gulp.src(jsSources)
		.pipe(concat('script.js'))
		.pipe(browserify())
		.pipe(gulp.dest('builds/development/js'))
});