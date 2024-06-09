const gulp = require('gulp')
const del = require('del')
const imagemin = require('gulp-imagemin')
const htmlmin = require('gulp-minify-html')
const newer = require('gulp-newer');
const browserSync = require('browser-sync').create();
const babel = require("gulp-babel")

function clean() {
    return del(["dist/*", '!dist/images'])
}

function image () {
     return gulp.src('src/images/*')
     .pipe(newer('dist/images'))
     .pipe(imagemin({
        progressive: true
     }))
     .pipe(gulp.dest('dist/images'))
}

function html() {
    return gulp.src('src/*.html')
    .pipe(htmlmin({
        collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream())
}

function script() {
    return gulp.src("src/js/script.js")
    .pipe(babel({
      presets: ["@babel/preset-env"]
    }))
    .pipe(gulp.dest("dist"));
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./src/"
        }
    });
    gulp.watch('src/*.html', browserSync.reload)
}

const build = gulp.series(clean, gulp.parallel(html,script, image), watch)

exports.clean = clean
exports.watch = watch
exports.image = image
exports.html = html
exports.build = build
exports.default = build