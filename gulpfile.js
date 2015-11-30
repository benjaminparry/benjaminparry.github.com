// Require
var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var imageOptim = require('gulp-imageoptim');
// TODO
// https://github.com/johnotander/immutable-css
// var immutableCss = require('immutable-css');
// https://github.com/1000ch/gulp-stylestats
// var stylestats = require('gulp-stylestats');



// Tasks

// CSS
gulp.task('css', function () {
  var processors = [
    autoprefixer
  ];
  return gulp.src('./assets/css/*.css')
    .pipe(postcss(processors))
    .pipe(minifyCSS())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('./post/css/'));
});

// Performance
gulp.task('images', function() {
    return gulp.src('assets/im/**/*')
        .pipe(imageOptim.optimize())
        .pipe(gulp.dest('post/images'));
});

// CSS Stats
// gulp.task('stylestats', function () {
//   gulp.src('./post/css/*.css')
//     .pipe(stylestats());
// });



// Watch
gulp.task('watch', function () {
   gulp.watch('assets/css/*.css', ['css']);
});

// Commands
gulp.task('default', ['css']);
