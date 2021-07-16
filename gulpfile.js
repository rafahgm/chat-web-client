
const gulp = require("gulp");
const sass = require("gulp-dart-sass");
const sourcemaps = require("gulp-sourcemaps");


gulp.task("sass", function(){
    return gulp.src("./sass/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: "expanded"}).on("error", sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("css"));
});


gulp.task("sass:watch", function(){
    gulp.watch("./sass/**/*.scss", gulp.series('sass'))
});