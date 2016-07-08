var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');

gulp.task('pranie', function(){
	console.log('robię pranie i co');
});

gulp.task('dojshint', function() {
	return gulp.src('js/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default')) 
});

gulp.task('sass', function(){
	return gulp.src('scss/*.scss')
		.pipe(sass({errLogToConsole:true, 
			outputStyle: 'expanded', //nested jest domyślny, expanded najbardziej przyjazny (czytelny), compact rezygnuje z enterów i spacji, compressed tworzy najmniejszy możliwy plik
			sourceComments: 'map'}))
		.pipe(gulp.dest('css'))
});


gulp.task('watch', function(){
	gulp.watch('scss/*.scss', ['sass']);
});