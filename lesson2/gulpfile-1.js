/**
 * Browsersyncのタスクのサンプルファイルです。
 */

// プラグインの読み込み
var gulp = require("gulp");
var browserSync = require("browser-sync");

// ローカルサーバーを立て、
// ファイル更新時に自動リロードするタスクです
gulp.task("default", function () {
  // 初期設定です
  browserSync.init({
    server: {
      baseDir: "./src"
    }
  });

  // srcフォルダ以下のファイルが更新されたらリロードします
  gulp.watch("src/**", function () {
    browserSync.reload();
  });
});
