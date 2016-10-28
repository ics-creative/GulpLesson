var gulp = require("gulp");
var eslint = require("gulp-eslint");

gulp.task("lint-javascript", function () {
  return gulp.src(["src/**.js"])
    .pipe(eslint(".eslintrc"))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
