'use strict';

var gulp = require('gulp-help')(require('gulp'));

var rubySass = require('gulp-ruby-sass');

var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var plumber = require('gulp-plumber');
var replace = require('gulp-replace');

var autoprefixer = require('autoprefixer');
var reload = require('browser-sync').reload();

var config = require('./../config.js');
var handleError = require('./../utils/handleError.js');

// Compile scss using ruby sass

gulp.task('styles', 'Compile Sass to CSS', function () {
  return rubySass(config.styles.src, config.styles.sassCfg)
    .on('error', handleError)
    .pipe(replace('../../bower_components/bootstrap-sass/assets/fonts/bootstrap/', '../fonts/'))
    .pipe(postcss([
      autoprefixer(config.styles.autoprefixerCfg)
    ]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.styles.dest))
});
