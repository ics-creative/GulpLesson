// Sassのコンパイルタスクです。
var gulp = require("gulp");
var sass = require("gulp-sass");

// ビルドタスクです。
gulp.task("build", function () {
  gulp.src("src/css/style.scss")
    .pipe(sass())
    .pipe(gulp.dest("src/css/"));
});

// watchタスクの設定
gulp.task("watch", function () {
  gulp.watch("src/css/style.scss", function () {
    gulp.src("src/css/style.scss")
      .pipe(sass())
      .pipe(gulp.dest("src/css/"))
  });
});

