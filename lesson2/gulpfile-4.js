/**
 * ファイルのコピーと削除を行うタスクです。
 */

// プラグインの読み込み
var gulp = require("gulp");
var del = require("del");

// srcフォルダのソースファイルをdistフォルダにコピーするタスクです。
gulp.task("copy", function () {
  gulp.src("src/**")
    .pipe(gulp.dest("dist/"));
});

// distフォルダ以下のSassファイルを削除するタスクです。
gulp.task("clean", function () {
  del("dist/**/*.scss");
});
