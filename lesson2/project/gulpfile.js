/**
 * ファイルのコピーと削除を行うタスクです。
 */

// プラグインの読み込み
var gulp = require("gulp");
var del = require("del");

// srcフォルダのtest.htmlファイルをdistフォルダにコピーするタスクです。
gulp.task("copy", function () {
  return gulp.src("src/test.html")
    .pipe(gulp.dest("dist/"));
});

// srcフォルダのtest.htmlファイルを削除するタスクです。
gulp.task("clean", function () {
  del("src/test.html");
});

// srcフォルダのtest.htmlファイルをdistフォルダに移動するタスクです。
gulp.task("default", ["copy", "clean"]);
