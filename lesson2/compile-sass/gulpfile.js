var gulp = require("gulp")
var sass = require("gulp-sass");

gulp.task("compile-sass", function (options) {
  // scssファイルの配置フォルダー及びマッチパターン
  gulp.src("sass/**/*.scss")
  // scssファイルの変換処理と、エラーが起こった場合のログ書き出し
    .pipe(sass().on("error", sass.logError))
    // cssを書き出すフォルダーの指定
    .pipe(gulp.dest("css"));
});
