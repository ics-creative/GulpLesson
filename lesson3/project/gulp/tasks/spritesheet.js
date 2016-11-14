/***
 * スプライトシート作成タスクです。
 */

const gulp = require("gulp");
const spritesmith = require("gulp.spritesmith");

gulp.task("spritesheet", function () {
  var spriteData = gulp.src("src/spritesheet_parts/*")
    .pipe(spritesmith({
        imgName: "spritesheet.png",
        cssName: "_spritesheet.scss",
        imgPath: "images/spritesheet.png",
        cssFormat: "scss",
        cssVarMap: function (sprite) {
          sprite.name = "sprite-" + sprite.name; // 変数の名前空間
        }
      })
    );
  spriteData.img.pipe(gulp.dest("src/images"));
  spriteData.css.pipe(gulp.dest("src/css"));
});
