/**
 * 1-2. JavaScriptファイルの結合
 */

var gulp = require("gulp");
var concat = require("gulp-concat");

gulp.task("concat", function () {
  gulp.src(["src/js/*.js", "!src/js/script.js"]) // script.js意外のJSを操作対象に
    .pipe(concat("script.js"))
    .pipe(gulp.dest("dist/js"));
});