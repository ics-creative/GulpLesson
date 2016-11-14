var gulp = require("gulp");
var imageMin = require("gulp-imagemin");
// pngの圧縮
var pngquant = require("imagemin-pngquant");

gulp.task("imagemin", function() {
  gulp.src("src/images/*")
    .pipe(imageMin(
      [pngquant({quality: "70", speed: 1})]
    ))
    .pipe(gulp.dest("dist/images"));
});

