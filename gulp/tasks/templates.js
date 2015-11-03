'use strict';

var gulp = require('gulp-help')(require('gulp'));
var config = require('./../config.js');

var jade = require('gulp-jade');
var data = require('gulp-data');
var plumber = require('gulp-plumber');
var fs = require('fs');
var notify = require('gulp-notify');
var browserSync = require('browser-sync');

var build = require('./../utils/buildHelper.js');
var handleError = require('./../utils/handleError.js');

gulp.task('templates', function() {
  var src = build.isBuild() ? config.templates.srcBuild : config.templates.src;
  var dest = build.isBuild() ? config.templates.destBuild : config.templates.dest;

  return gulp.src(src)
    .pipe(plumber(handleError))
    // .pipe(data(function() {
    //   return JSON.parse(fs.readFileSync(config.templatesData.dataPath));
    // }))
    .pipe(jade(config.templates.cfg))
    .pipe(notify({ title: 'Done', message: 'Converted Jade ✔' }))
    .pipe(gulp.dest(dest));
});
