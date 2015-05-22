var gulp        = require('gulp');
var browserSync = require('browser-sync');

gulp.task('rebuild', ['build'], function () {
    browserSync.reload();
});