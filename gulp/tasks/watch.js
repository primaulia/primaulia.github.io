'use strict';

var gulp = require('gulp-help')(require('gulp'));
var config = require('./../config.js');

var reload = require('browser-sync').reload;

// Watch source files

gulp.task('watch', ['serve'], function () {

    // watch for changes
    // gulp.watch(['app/*.html'], reload);
    gulp.watch(['app/*.jade'], ['templates']);
    // gulp.watch('app/styles/**/*.scss', ['styles']);
    // gulp.watch('app/scripts/**/*.js', ['scripts']);
    // gulp.watch('app/images/**/*', ['images']);
    // gulp.watch('bower.json', ['wiredep']);
});
