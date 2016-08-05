var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

gulp.task('default', function() {
  
});

gulp.task('less2css', function () {
  return gulp.src('./statics/less/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./statics/css'));
});

gulp.task('watch', function() {
  gulp.watch(['./statics/less/*.less'],['less2css']);

});