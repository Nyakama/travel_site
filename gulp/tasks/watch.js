var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browser_sync = require('browser-sync').create();

gulp.task('html', async function() {browser_sync.reload()}) 

gulp.task('watch', async function() {
    browser_sync.init({notify:false,server:{baseDir:'app'}})
    gulp.watch('./app/index.html', gulp.series('html'))
    gulp.watch('./app/assets/styles/**/*.css', gulp.series('css_inject'))    
})

gulp.task('css_inject', gulp.series('styles', function() { 
    return gulp.src('./app/temp/styles/styles.css').pipe(browser_sync.stream())
})) 