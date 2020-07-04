var gulp = require('gulp');
var tiny = require('gulp-tinypng-nokey');

var del = require('del');

gulp.task('tinypng', () => {
  del.sync(['./dist/**']);
  return gulp
    .src(['./src/**/*.png','./src/**/*.jpg'])
    .pipe(tiny())
    .pipe(gulp.dest('./dist'));
});
