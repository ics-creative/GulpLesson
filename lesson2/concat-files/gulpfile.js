var gulp = require("gulp");
var concat = require("gulp-concat");

/*
 * CSS・JavaScriptファイルの結合
 */

gulp.task("concat-files", ["concat-javascript", "concat-css"]);


/*
 * JavaScriptファイルの結合
 */

gulp.task("concat-javascript", function () {
  return gulp.src("src/**.js")
  // 結合後のファイル名を指定
    .pipe(concat("main.js"))
    // 出力フォルダを指定
    .pipe(gulp.dest("dist/"));
});

/*
 * CSSファイルの結合
 */

gulp.task("concat-css", function () {
  return gulp.src("css/**.css")
  // 結合後のファイル名を指定
    .pipe(concat("style.css"))
    // 出力フォルダを指定
    .pipe(gulp.dest("dist/"));
});
