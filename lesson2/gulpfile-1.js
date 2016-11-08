var gulp = require("gulp");
var browserSync = require("browser-sync");

gulp.task("default", function () {
  browserSync.init({
    online: true,
    server: {
      baseDir: "./src"
    }
  });

  gulp.watch("src/**", function () {
    browserSync.reload();
  });
});
