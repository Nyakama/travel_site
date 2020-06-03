var gulp = require('gulp'),    
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    postcss_mixins = require('postcss-mixins'),
    postcss_custom_media = require('postcss-custom-media'),
    postcss_nested = require('postcss-nested'),
    postcss_simple_vars = require('postcss-simple-vars'),    
    postcss_import = require('postcss-import'),
    hexrgba = require('postcss-hexrgba');
    

gulp.task('styles', function() {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([postcss_import, postcss_mixins, postcss_custom_media, postcss_nested, hexrgba, postcss_simple_vars, autoprefixer]))
        .on('error', function(errorInfo){console.log(errorInfo.toString()); this.emit('end');})
        .pipe(gulp.dest('./app/temp/styles'))
        
})