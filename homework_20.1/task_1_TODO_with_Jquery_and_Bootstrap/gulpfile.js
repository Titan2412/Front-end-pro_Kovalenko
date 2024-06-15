const gulp = require('gulp')
const del = require('del')
const imagemin = require('gulp-imagemin')
const htmlmin = require('gulp-minify-html')
const newer = require('gulp-newer');
const browserSync = require('browser-sync').create();
const babel = require("gulp-babel")
const cssmin = require('gulp-clean-css')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')

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

function styles() {
    return gulp.src('src/css/*.css')
    .pipe(cssmin())
    .pipe(gulp.dest('dist/css'))
}

function script() {
    return gulp.src("src/js/*.js")
    .pipe(babel({
      presets: ["@babel/preset-env"]
    }))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"));
}

function jQuery() {
    return gulp.src("src/jQuery/*.js")
    .pipe(uglify())
    .pipe(concat('jquery-3.7.1.js'))
    .pipe(gulp.dest("dist/jQuery"));
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./src/"
        }
    });
    gulp.watch('src/*.html', browserSync.reload)
}

const build = gulp.series(clean, gulp.parallel(html,script, styles, image), jQuery)

exports.clean = clean
exports.watch = watch
exports.image = image
exports.html = html
exports.styles = styles
exports.build = build
exports.default = build