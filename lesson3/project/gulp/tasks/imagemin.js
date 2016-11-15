/**
 * 1-3. PNG画像のファイルサイズ削減
 */

var gulp = require("gulp");
var imageMin = require("gulp-imagemin");
var pngquant = require("imagemin-pngquant");

gulp.task("imagemin", function () {
  gulp.src("src/images/*")
    .pipe(imageMin(
      [pngquant({quality: "70", speed: 1})]
    ))
    .pipe(gulp.dest("dist/images"));
});

