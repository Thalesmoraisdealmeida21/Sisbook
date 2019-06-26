const gulp = require('gulp')
const sass = require('gulp-sass');
const minify = require('gulp-minify')
const refresh = require('gulp-refresh')
const nodemon = require('gulp-nodemon')
const path = require('path')
var browserSync = require("browser-sync").create()


const dest = {
    SrcCss: "build/css",
    SrcJs: "build/js",
    Srcimg: "build/img",
    SrcBuild: "build"
};

gulp.task('server', gulp.series(() => {
    nodemon({
        script: 'app.js',
        ext: 'js'
    })

}))

gulp.task('css', gulp.series(() => {
    return gulp.src('./src/assets/sass/**/*.scss')
        .pipe(minify())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(dest.SrcCss))
        .pipe(browserSync.stream());
}))


gulp.task('js', gulp.series(() => {
    return gulp.src('./src/assets/js/*.js')
        .pipe(minify())
        .pipe(gulp.dest(dest.SrcJs))
        .pipe(refresh())
}))

//Watch de alterações para gulp
gulp.task('watch', () => {
    gulp.watch(path.join('./src/assets/js/*.js'), gulp.parallel(['js'])).on('change', browserSync.reload);
    gulp.watch(path.join('./src/assets/sass/*.scss'), gulp.parallel(['css'])).on('change', browserSync.reload);

})

gulp.task('default', gulp.parallel(['server', 'watch']))