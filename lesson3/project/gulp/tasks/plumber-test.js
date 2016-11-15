"use strict";

/**
 * Sassのコンパイルタスクのサンプルファイルです。
 */

// プラグインの読み込み
var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var sourcemaps = require("gulp-sourcemaps");


// style.scssをコンパイルします。
// コンパイル後は、src/cssフォルダにソースマップとともにファイルを保存します。
gulp.task("plumber-test", function () {
  return gulp.watch("src/css/style.scss", function () {
    gulp.src("src/css/style.scss")
      .pipe(sourcemaps.init())
      .on("error", function (err) {
        console.log(err.message);
        this.emit("end")
      })
      .pipe(sass())
      .pipe(sourcemaps.write("./"))
      .pipe(gulp.dest("src/css"));
  });
});
