var gulp = require("gulp");
var gulpRename = require("gulp-rename");

gulp.task("rename-test", function() {
  gulp.src("src/test.html")
    .pipe(gulpRename("test2.html"))
    .pipe(gulp.dest("src"));
});

