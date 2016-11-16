/**
 * Sassのコンパイルタスクのサンプルファイルです。
 * 1-4. ソースマップの出力
 *
 * サンプルとして、src/css/style.scssのSassファイルをコンパイルし、
 * 同階層にソースマップを出力します。
 */

// プラグインの読み込み
var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");

gulp.task("sourcemaps", function () {
  gulp.src("src/css/style.scss")
    .pipe(sourcemaps.init())  // ソースマップ出力処理の初期化
    .pipe(sass())
    .pipe(sourcemaps.write("./"))  // CSSと同階層にソースマップを出力する
    .pipe(gulp.dest("src/css/"));
});
