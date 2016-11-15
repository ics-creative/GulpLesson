var gulp = require("gulp");
var concat = require("gulp-concat");

gulp.task("concat", function() {
  return gulp.src("src/js/*.js")
    .pipe(concat("script.js"))
    .pipe(gulp.dest("dist/js"));
});