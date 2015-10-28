var concat = require('gulp-concat');
var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('default', [], function () {

  return gulp.src(['./animation.js', './modules/*.js'])
             .pipe(concat('animation.atomic-es.min.js'))
             .pipe(uglify())
             .pipe(gulp.dest('./dest'));

});