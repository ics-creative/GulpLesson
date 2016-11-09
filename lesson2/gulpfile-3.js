/**
 * Sassのコンパイルタスクのサンプルファイルです。
 */

// プラグインの読み込み
var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var autoprefixer = require("gulp-autoprefixer");

// style.scssをコンパイルします。
// コンパイル後は、src/cssフォルダにソースマップとともにファイルを保存します。
gulp.task("default", function () {
  gulp.src("src/css/style.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: "expanded"}))
    .pipe(autoprefixer({
      browsers: ["ios_saf >= 8", "Android >= 4"]
    }))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("src/css/"));
});
