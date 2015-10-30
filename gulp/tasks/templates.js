'use strict';

var gulp = require('gulp-help')(require('gulp'));
var config = require('./../config.js');

var jade = require('gulp-jade');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var browserSync = require('browser-sync');


gulp.task('templates', function() {
  var src = config.templates.src;
  var dest = config.templates.dest;

  return gulp.src(src)
    .pipe(plumber())
    .pipe(jade(config.templates.cfg))
    .pipe(notify({ title: 'Done', message: 'Converted Jade ✔' }))
    .pipe(gulp.dest(dest))
    .pipe(browserSync.reload({ stream:true }));
});
