'use strict';

const gulp = require('gulp');
const browserify = require('browserify');
const cached = require('gulp-cached');
const debug = require('gulp-debug');
const gulpIf = require('gulp-if');
const cssnano = require('gulp-cssnano');
const notify = require('gulp-notify');
const remember = require('gulp-remember');
const sass = require('gulp-sass');
const sourceMaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const combiner = require('stream-combiner2').obj;
const source = require('vinyl-source-stream');
const uglify = require('gulp-uglify');
const buffer = require('vinyl-buffer');
const jade = require('gulp-jade');
const htmlmin = require('gulp-htmlmin');

const isDevelopment = !process.env.NODE_ENV;

var paths = {
  sass: './sass/*.sass',
  js: './js/**/*.js',
  templates: './jade/**/*.jade'
};

var sassWatcher = function() {
  return gulp.watch(paths.sass, ['sass']);
};

var jsWatcher = function() {
  return gulp.watch(paths.js, ['js']);
};

var templateWatcher = function() {
  return gulp.watch(paths.templates, ['templates']);
};

var sassTask = function() {
  return combiner(
    gulp.src('./sass/main.sass'),
    debug({title: 'SASS'}),
    gulpIf(isDevelopment, sourceMaps.init()),
    sass({includePaths: ['./node_modules/angular-material/']}),
    gulpIf(!isDevelopment, cssnano()),
    gulpIf(isDevelopment, sourceMaps.write()),
    gulp.dest('./public/css'),
    browserSync.stream()
  ).on('error', notify.onError());
};

var jsTask = function() {
  var b = browserify({
    entries: './js/app.js',
    debug: isDevelopment
  });

  return combiner(
    b.bundle(),
    source('app.js'),
    buffer(),
    debug({title: 'JS'}),
    gulpIf(!isDevelopment, uglify()),
    gulp.dest('./public/js/'),
    browserSync.stream()
  ).on('error', notify.onError());
};

var templateTask = function() {
  return combiner(
      gulp.src(paths.templates),
      cached('templates'),
      debug({title: 'TEMPLATES'}),
      jade(),
      gulpIf(!isDevelopment, htmlmin({collapseWhitespace: true})),
      remember('templates'),
      gulp.dest('./public'),
      browserSync.stream()
  ).on('error', notify.onError());
};

var watchTask = function() {
  sassWatcher();
  jsWatcher();
  templateWatcher();
};

var watchSyncTask = function() {
  browserSync.init({
    proxy: 'http://checkers.local',
    open: false
  });

  watchTask();
};

gulp.task('sass', sassTask);
gulp.task('js', jsTask);
gulp.task('templates', templateTask);
gulp.task('watch', watchTask);
gulp.task('watch:sync', watchSyncTask);
gulp.task('build', ['sass', 'js', 'templates']);
