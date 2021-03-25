var gulp = require("gulp");

gulp.task("default", defaultTask);

function defaultTask(done) {
    // place code for your default task here
    console.log("Hello World!");
    done();
}

//rename
var rename = require("gulp-rename");

//sass
var sass = require("gulp-sass");
sass.compiler = require("node-sass");
gulp.task("sass", function () {
    return gulp.src("./sass/**/*.scss").pipe(sass().on("error", sass.logError)).pipe(gulp.dest("./css"));
});
gulp.task("sass:watch", function () {
    gulp.watch("./sass/**/*.scss", ["sass"]);
});

//concat
var concat = require("gulp-concat");
gulp.task("scripts", function () {
    return gulp.src("./lib/*.js").pipe(concat("all.js")).pipe(gulp.dest("./dist/"));
});

//notify
var notify = require("gulp-notify");
gulp.src("./src/test.ext").pipe(notify("Hello Gulp!"));

//include
const fileinclude = require("gulp-file-include");
gulp.task("fileinclude", function () {
    gulp.src(["src/*.html"])
        .pipe(
            fileinclude({
                prefix: "@@",
                basepath: "@file",
            })
        )
        .pipe(gulp.dest("dist/"));
});
