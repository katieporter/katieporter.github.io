var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('sync', ['sass', 'build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});