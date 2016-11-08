var gulp = require("gulp");
var autoprefixer = require("gulp-autoprefixer");

gulp.task("default", function () {
  gulp.src("src/css/style.css")
    .pipe(autoprefixer({
      browsers: ["Android >= 4", "ios_saf >= 8"]
    }))
    .pipe(gulp.dest("dist/"));
});