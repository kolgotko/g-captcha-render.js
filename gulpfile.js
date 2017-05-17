const gulp = require('gulp');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const jsmin = require('gulp-jsmin');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('default', [ 'build-js' ]);

gulp.task('watch', () => {

    gulp.watch('src/*.js', ['build-js']);

});

gulp.task('build-js', () => {
    gulp.src('src/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['latest']
        }))
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('public'))
});
