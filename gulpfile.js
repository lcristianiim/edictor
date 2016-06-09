const
    gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    csswring = require('csswring'),
    sass = require('gulp-sass'),
    autoprefixer = require('autoprefixer'),
    lost = require('lost');


gulp.task('styles', function() {
    var developPreprocessors = [lost, autoprefixer];
    var productionPreprocessors = [lost, csswring];

    return gulp.src('styles/styles.scss')
        .pipe(sass({sourceComments: 'map'}))
        .pipe(postcss(developPreprocessors))
        .pipe(gulp.dest('styles/'))
});

gulp.task('watch', function() {
    gulp.watch('styles/*scss', ['styles']);
    gulp.watch('styles/components/*scss', ['styles'])
});
