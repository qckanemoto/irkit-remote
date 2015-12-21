var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var watchify = require('gulp-watchify');
var streamify = require('gulp-streamify');
var browserSync = require('browser-sync');

gulp.task('build', ['build:css']);

gulp.task('build:css', function () {
    gulp.src('sass/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('public/css'));
});

var watching = false;
gulp.task('enable-watching', function () {
    watching = true;
});

gulp.task('browserify', watchify(function (watchify) {
    gulp.src('src/app.js')
        .pipe(plumber())
        .pipe(watchify({
            watch: watching,
            transform : [['babelify', {presets: 'react'}]]
        }))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest('public/js'));
}));

gulp.task('watchify', ['enable-watching', 'browserify']);

gulp.task('watch', ['build', 'watchify'], function () {
    gulp.watch('sass/*.scss', ['build:css']);
});

gulp.task('serve', ['watch'], function () {
    browserSync.init({
        server: {
            baseDir: './public'
        }
    });
});

gulp.task('default', ['build', 'browserify']);
