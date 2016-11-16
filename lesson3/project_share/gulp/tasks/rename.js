/**
 * 1-1. ファイルのリネーム
 */

var gulp = require("gulp");
var rename = require("gulp-rename");

gulp.task("rename", function () {
  gulp.src("src/css/hoge.css")
  .pipe(rename("fuga.css")) // fuga.cssにリネームする
  //   .pipe(rename(function (path) {  // hoge.min.cssにリネームする
  //     path.basename += ".min";
  //   }))
    .pipe(gulp.dest("src/css"));
});
