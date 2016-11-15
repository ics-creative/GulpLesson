/**
 * 1-2. JavaScriptファイルの結合
 */

var gulp = require("gulp");
var concat = require("gulp-concat");

gulp.task("concat", function () {
  gulp.src("src/js/*.js")
    .pipe(concat("script.js"))
    .pipe(gulp.dest("dist/js"));
});