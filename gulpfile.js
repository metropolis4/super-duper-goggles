var concat = require('gulp-concat'),
    stylus = require('gulp-stylus'),
    gulp   = require('gulp');


gulp.task('default', buildStyles)

function buildStyles() {
    return (
        gulp
            .src('./app/app.styl')
            .pipe(stylus())
            .on('error', function(err) { console.log(err)})
            .pipe(concat('app.css'))
            .pipe( gulp.dest('./'))
    );
}
