var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('watch', function () {
    gulp.watch('_sass/**/*.{sass,scss}', ['sass']);
    gulp.watch('_images/*.{png,jpg,svg}', ['img']);
    gulp.watch(['index.html', '_layouts/*.html', '_posts/*'], ['rebuild']);
});