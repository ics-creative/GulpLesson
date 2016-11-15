/**
 * 1-1. ファイルのリネーム
 */

var gulp = require("gulp");
var rename = require("gulp-rename");

gulp.src("rename", function () {
  gulp.src("src/css/hoge.css")
    .pipe(rename("fuga.css")) // fuga.cssにリネームする
    .pipe(gulp.dest("src/css"));
});

