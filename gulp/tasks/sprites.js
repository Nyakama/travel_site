var gulp = require('gulp'),
svg_sprite = require('gulp-svg-sprite'),
del = require('del'),
copy_sprite_css = require('gulp-svg-sprite'),
rename = require('gulp-rename');

var config = {
    mode: {
        css: {
            sprite: 'sprite.svg',
            render: {
                css: {
                    template: './gulp/templates/sprite.css'
                }
            }

        }
    }
}

gulp.task('begin_clean', function(){
    return del(['./app/temp/sprite', './app/assets/images/sprites']);
})

gulp.task('create_sprite', function(){
    return gulp.src('./app/assets/images/icons/**/*.svg')
        .pipe(svg_sprite(config))
        .pipe(gulp.dest('./app/temp/sprite/'));
});

gulp.task('copy_sprite_graphic', function(){
    return gulp.src('./app/temp/sprite/css/**/*.svg')
        .pipe(gulp.dest('./app/assets/images/sprites'));
});

gulp.task('copy_sprite_css', function(){
    return gulp.src('./app/temp/sprite/css/*.css')
        .pipe(rename('_sprite.css'))
        .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('end_clean', function(){
    return del('./app/temp/sprite');
});

gulp.task('icons', gulp.series('begin_clean', 'create_sprite', 'copy_sprite_graphic', 'copy_sprite_css', 'end_clean'));