/**
 * 1-3. PNG画像のファイルサイズ削減
 */

var gulp = require("gulp");
var rename = require("gulp-rename");
var imageMin = require("gulp-imagemin");
var pngquant = require("imagemin-pngquant");

gulp.task("imagemin", function () {
  gulp.src("src/images/animal.png")
    .pipe(imageMin(
      [pngquant({quality: "70"})]
    ))
    .pipe(rename(function (path) {
      // ファイル名.min.pngにリネームする
      path.basename += ".min";
    }))
    .pipe(gulp.dest("src/images"));
});
