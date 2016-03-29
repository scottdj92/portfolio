var gulp = require('gulp');
//add plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');

//Server
gulp.task('connect', function() {
	connect.server({
		'root': 'dist',
		'port': 4000
	});
});

//Browserify
gulp.task('browserify', function() {
	return browserify('./app/app.js')
	.bundle()
	.pipe(source('main.js'))
	.pipe(gulp.dest('./dist/js/'));
});

//Lint
gulp.task('lint', function() {
	return gulp.src('app/**/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

//Scss
gulp.task('styles', function() {
	return gulp.src('app/scss/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('dist/css'));
});

//Watch
gulp.task('watch', function() {
	gulp.watch('app/**/*.js', ['lint', 'browserify']);
	gulp.watch('app/**/*.scss', ['styles']);
	gutil.log('Now watching...');
});
//Default

gulp.task('default', ['connect', 'lint', 'browserify', 'styles', 'watch']);