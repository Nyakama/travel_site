var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browser_sync = require('browser-sync').create();

gulp.task('preview_dist', function(){
    browser_sync.init({notify:false,server:{baseDir:'dist'}});
})

gulp.task('delete_dist_folder', function(){
    return del('./dist');
});

gulp.task('optimise_images', function(){
    return gulp.src(['./app/assets/images/**/*','!./app/assets/images/icons','!./app/assets/images/icons/**/*'])
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            multipass: true
        }))
        .pipe(gulp.dest('./dist/assets/images'));
});

gulp.task('usemin', function(){
    return gulp.src('./app/index.html')
        .pipe(usemin({
            css: [function(){
                return rev()
            }, function(){
                return cssnano()
            }],
            js: [function(){return rev()}, function(){return uglify()}]
        }))
        .pipe(gulp.dest('./dist'));
});


gulp.task('build', gulp.series('delete_dist_folder', 'icons', 'styles', 'scripts', 'optimise_images', 'usemin'));