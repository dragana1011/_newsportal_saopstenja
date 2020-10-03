const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');

gulp.task('compile', () => {
    return gulp.src('sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css/'));
});
// gulp.task('compile', () => {
//     return gulp.src('sass/layout_phone-default/hamburger-menu.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest('sass/layout_phone-default/css/'));
// });
gulp.task('clean', () => {
    return del(['main.css', ]);
});
// gulp.task('clean', () => {
//     return del(['hamburger-menu.css', ]);
// });

//clen &compile when change is made to .scss file
gulp.task('watch', () => {
    gulp.watch('sass/**/*.scss', (done) => {
        gulp.series(['clean', 'compile'])
            (done);
    });
});

//clan & compile on demand
gulp.task('default', gulp.series(['clean', 'compile']));





// const gulp = require('gulp');
// const sass = require('gulp-sass');
// // const rename = require('gulp-rename');
// // const uglify = require('gulp-uglify');

// gulp.task('message', function(done) {
//     console.log('Gulp is running');
//     done()
// });

// gulp.task('sass', function(done) {
//     gulp.src('sass/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         // .pipe(rename('style'))
//         // .pipe(uglify())
//         .pipe(gulp.dest('css'));
//     done();
// });
// gulp.task('watch', function() {
//     return gulp.watch('sass/*.scss', gulp.parallel['sass']);
// });


// gulp.task('default', gulp.parallel(['message', 'watch']));

// var src_SCSS = "./sass/main.scss";
// var dest_CSS = "./css/";


//registering a task

// gulp.task('compilescss', function() {
//     return gulp.src('project_test/sass/*.scss')
//         .pipe(sass())
//         // .on('error', console.error.bind(console))
//         .pipe(rename('style'))
//         .pipe(uglify())
//         .pipe(gulp.dest('./css'))
// });

// function compilescss() {
//     return src('./sass/main.scss')
//         .pipe(sass())
//         // .on('error', console.error.bind(console))
//         .pipe(rename('style'))
//         .pipe(uglify())
//         .pipe(dest('./css/'));
// }

// // exporting a task
// module.exports.compilescss = compilescss;
// compilescss.description = "Compiles code from scss/main.scss file to css/style.css";

// registering a task
// gulp.task(helloWorld);
// gulp.task("helloWorld", callback => {
//     console.log("Hello World");
//     callback();
// });

// function helloWorld() {
//     console.log("Hello World");
//     callback();
// }

// function helloWorld(callback) {
//     console.log("Hello World");
//     callback();
// }