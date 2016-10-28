var gulp = require("gulp");
var eslint = require("gulp-eslint");

/*
 * lintを使ってJavaScriptファイルのチェックを行う
 */

gulp.task("lint-javascript", function () {
  return gulp.src(["src/**.js"])
    .pipe(eslint(".eslintrc"))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
