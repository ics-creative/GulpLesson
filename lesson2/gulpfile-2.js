/**
 * ベンダープレフィックス自動設定タスクのサンプルファイルです。
 */

// プラグインの読み込み
var gulp = require("gulp");
var autoprefixer = require("gulp-autoprefixer");

// iOS Safari 8以上、Android 4以上対象で
// ベンダープレフィックスを設定します
gulp.task("default", function () {
  gulp.src("src/css/style.css")
    .pipe(autoprefixer({
      browsers: ["ios_saf >= 8", "Android >= 4"]
    }))
    .pipe(gulp.dest("dist/"));
});