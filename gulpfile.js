// including plugins

var gulp = require('gulp'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify'),
    to5 = require('gulp-6to5');

gulp.task('es6-es5', function(){
	return gulp.src([
				'./public/app/ServerApp.js',
				'./public/app/*/**.js',
				'./public/app/*/*/**.js'
			]
		)
		.pipe(to5())
		.pipe(gulp.dest('./public/build/es5/'));
});

gulp.task('build', function(){
    return gulp.src(
    		[
				'./public/js/jquery.min.js',
				'./public/js/modernizr.js',
				'./public/js/bootstrap.js', 
				'./public/js/bootstrap-hover-dropdown.js', 
				'./public/js/jquery.easing.1.3.js', 
				'./public/js/skrollr.min.js',
				'./public/js/smooth-scroll.js',
				'./public/js/jquery.appear.js',
				'./public/js/wow.min.js',
				'./public/js/page-scroll.js',
				'./public/js/jquery.easypiechart.js',
				'./public/js/jquery.parallax-1.1.3.js',
				'./public/js/jquery.isotope.min.js', 
				'./public/js/owl.carousel.min.js',
				'./public/js/jquery.magnific-popup.min.js',
				'./public/js/popup-gallery.js',
				'./public/js/text-effect.js',
				'./public/js/counter.js',
				'./public/js/jquery.countTo.js',
				'./public/js/imagesloaded.pkgd.min.js',
				'./public/js/classie.js',
				'./public/js/hamburger-menu.js',
				'./public/js/main.js'
    		]
    	)
        .pipe(gp_concat('gulp-concat.js'))
        .pipe(gulp.dest('./public/min/'))
        .pipe(gp_rename('vendor.min.js'))
        .pipe(gp_uglify())
        .pipe(gulp.dest('./public/build/'));
});

gulp.task('watch', function() {
    gulp.watch(['./public/app/ServerApp.js', './public/app/*/**.js', './public/app/*/*/**.js'], ['es6-es5']);
});

gulp.task('default', ['es6-es5', 'build', 'watch'], function(){});