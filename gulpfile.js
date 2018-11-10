
'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const cssnano = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const del = require('del');
const cache = require('gulp-cache');
const jshint = require('gulp-jshint');
const htmlmin = require('gulp-htmlmin');
const csslint = require('gulp-csslint');
const notify = require('gulp-notify');
const pngquant = require('gulp-pngquant');
const htmlbeautify = require('gulp-html-beautify');
const spritesmith = require('gulp-spritesmith');



gulp.task('default', ['sass'], function() {
    browserSync.init({
        server: 'src'
    });

    gulp.watch('src/**/*.scss', ['sass']);
    gulp.watch('src/**/*.pug').on('change', browserSync.reload);
    gulp.watch('src/js/*.js').on('change', browserSync.reload);
});


gulp.task('pug', function() {
  return gulp.src('src/pug/*.pug')
      .pipe(plumber())
      .pipe(pug())
      .pipe(htmlbeautify({
        indentSize: 2,
      }))
      .pipe(gulp.dest('src/'))
      .pipe(browserSync.stream());
});


gulp.task('sass', function() {
    return gulp.src('src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css/'))
    .pipe(browserSync.stream());
});


// gulp.task('html', function() {
//     return gulp.src('src/*.html')
//         .pipe(htmlmin({collapseWhitespace: true}))
//         .pipe(gulp.dest('dist/'))
// });


// gulp.task('css', function() {
//     return gulp.src('src/css/*.+(scss|sass)')
//         .pipe(sourcemaps.init())
//         .pipe(sass())
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions'],
//             cascade: false
//         }))
//         .pipe(csslint())
//         .pipe(cssnano())
//         .pipe(concat('main.css'))
//         .pipe(plumber({errorHandler: onError}))
//         .pipe(sourcemaps.write())
//         .pipe(gulp.dest('dist/css'))
//         .pipe(browserSync.stream());
// });

// let onError = function(err) {
//     notify.onError({
//         title: 'Error in ' + err.plugin,
//         message: err.message
//     }) (err);
//     this.emit('end');
// }

// gulp.task('js', function() {
//     return gulp.src('src/js/*.js')
//         .pipe(sourcemaps.init())
//         .pipe(uglify())
//         .pipe(concat('script.js'))
//         .pipe(jshint())
//         .pipe(plumber())
//         .pipe(sourcemaps.write())
//         .pipe(gulp.dest('dist/js'))
//         .pipe(browserSync.stream());
// })


// gulp.task('imagemin', function() {
//     return gulp.src('src/img/**/*')
//         .pipe(cache(imagemin({
//             interlaced: true,
//             progressive: true,
//             use: [pngquant()]
//         })))
//         .pipe(gulp.dest("dist/img"))
//         .pipe(browserSync.stream());
// });


// gulp.task('fonts', function() {
//     return gulp.src('src/fonts/**/*')
//         .pipe(gulp.dest('dist/fonts'))
// });


// gulp.task('del', function() {
//   return del.sync(['dist/**', '!dist']);
// });


// gulp.task('clear', function() {
//     cache.clearAll()
// });


// gulp.task('default', ['del', 'pug', 'sass', 'html', 'imagemin', 'css', 'js', 'fonts']);