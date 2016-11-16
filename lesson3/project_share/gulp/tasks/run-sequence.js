/**
 * 2-2. 複雑な同期・非同期処理の取り扱い
 */

var gulp = require("gulp");
var runSequence = require("run-sequence");

gulp.task("runSequence", function () {
  runSequence("task1-clean",
    ["task2-sass", "task2-concat", "task2-imagemin"],
    "task3-copy",
    "task4-clean"
  );
});

/*
 * 個別のタスク定義です。
 */

// distフォルダを削除するタスクです
var del = require("del");

gulp.task("task1-clean", function () {
  return del("dist");
});

// Sassのコンパイルタスクです
var sass = require("gulp-sass");

gulp.task("task2-sass", function () {
  return gulp.src("src/css/style.scss")
    .pipe(sass())
    .pipe(gulp.dest("src/css/"));
});

// JSの結合タスクです
var concat = require("gulp-concat");

gulp.task("task2-concat", function () {
  return gulp.src(["src/js/*.js", "!src/js/script.js"]) // script.js意外のJSを操作対象に
    .pipe(concat("script.js"))
    .pipe(gulp.dest("src/js"));
});

// png画像の圧縮タスクです
var imageMin = require("gulp-imagemin");
var rename = require("gulp-rename");
var pngquant = require("imagemin-pngquant");

gulp.task("task2-imagemin", function () {
  return gulp.src("src/images/animal.png")
    .pipe(imageMin(
      [pngquant({quality: "70", speed: 1})]
    ))
    .pipe(rename("animal.min.png"))
    .pipe(gulp.dest("src/images"));
});

// コピータスクです
gulp.task("task3-copy", function () {
  return gulp.src(["src/**/*", "!src/spritesheet_parts/**/*", "!**/*.scss"])
    .pipe(gulp.dest("dist"));
});

// 削除タスクです

gulp.task("task4-clean", function () {
  del(["dist/spritesheet_parts", "dist/**/*.scss", "dist/**/*.css.map"])
});

