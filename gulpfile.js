'use strict';

var browserify = require('browserify');
var gulp = require('gulp');
var bump = require('gulp-bump');
var clean = require('gulp-clean');
var git = require('gulp-git');
var header = require('gulp-header');
var rename = require('gulp-rename');
var size = require('gulp-size');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');

var extended = [
  '/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''
].join('\n');

var succint = '// <%= pkg.name %>@v<%= pkg.version %>, <%= pkg.license %> licensed. <%= pkg.homepage %>\n';

gulp.task('clean', function () {
  gulp.src('./dist', { read: false })
    .pipe(clean());
});

gulp.task('build', ['clean', 'bump'], function () {
  var pkg = require('./package.json');

  return browserify('./src/estimate.js')
    .bundle({ debug: true, standalone: 'estimate' })
    .pipe(source('estimate.js'))
    .pipe(streamify(header(extended, { pkg : pkg } )))
    .pipe(gulp.dest('./dist'))
    .pipe(streamify(rename('estimate.min.js')))
    .pipe(streamify(uglify()))
    .pipe(streamify(header(succint, { pkg : pkg } )))
    .pipe(streamify(size()))
    .pipe(gulp.dest('./dist'));
});

gulp.task('bump', function () {
  var bumpType = process.env.BUMP || 'patch'; // major.minor.patch

  return gulp.src(['./package.json', './bower.json'])
    .pipe(bump({ type: bumpType }))
    .pipe(gulp.dest('./'));
});

gulp.task('tag', ['build'], function () {
  var pkg = require('./package.json');
  var v = 'v' + pkg.version;
  var message = 'Release ' + v;

  return gulp.src('./')
    .pipe(git.commit(message))
    .pipe(git.tag(v, message))
    .pipe(git.push('origin', 'master', '--tags'))
    .pipe(gulp.dest('./'));
});

gulp.task('npm', ['tag'], function (done) {
  var child = require('child_process').exec('npm publish', {}, function () {
    done();
  });

  child.stdout.pipe(process.stdout);
  child.stderr.pipe(process.stderr);
  child.on('error', function () {
    throw new Error('unable to publish');
  });
});

gulp.task('release', ['npm']);
