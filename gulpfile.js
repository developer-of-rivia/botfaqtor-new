/* REQUIRE MODULES */
import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
// styles
gulp.task('profile-styles', function (done) {
    return gulp.src('botfaqtor_profile/css-new/scss/**/*.scss')
    .pipe(sass({
        outputStyle: 'expanded'
      }).on('error', sass.logError))
      .pipe(gulp.dest('botfaqtor_profile/css-new/'))
});
// ui-docs
gulp.task('uidocs-styles', function (done) {
  return gulp.src('botfaqtor_dev/_ui-docs/css/components.scss')
  .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(gulp.dest('botfaqtor_dev/_ui-docs/css/'))
});