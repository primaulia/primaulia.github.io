'use strict';

var gulp = require('gulp-help')(require('gulp'));
var config = require('./../config.js');

var reload = require('browser-sync').reload;

// Watch source files

gulp.task('watch', function () {

    // watch for changes
    // gulp.watch(['app/*.html'], reload);
    gulp.watch(config.watch.styles, ['styles', reload]);
    gulp.watch(config.watch.jade, ['templates', reload]);
    // gulp.watch('app/scripts/**/*.js', ['scripts']);
    // gulp.watch('app/images/**/*', ['images']);
    // gulp.watch('bower.json', ['wiredep']);
});
