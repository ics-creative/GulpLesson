/**
 * Sassのコンパイルタスクのサンプルファイルです。
 */

// プラグインの読み込み
var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");

// style.scssをコンパイルします。
// コンパイル後は、src/cssフォルダにソースマップとともにファイルを保存します。
gulp.task("sass", function () {
  gulp.src("src/css/style.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: "expanded"}))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("src/css/"));
});
