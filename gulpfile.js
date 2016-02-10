/* jshint node:true */

'use strict';

var gulp = 				require('gulp'),
	gutil = 			require('gulp-util'),
	rimraf = 			require('rimraf'),
	sass = 				require('gulp-sass'),
	autoprefixer = 		require('gulp-autoprefixer'),
	minifyCSS = 		require('gulp-minify-css'),
	jshint = 			require('gulp-jshint'),
	uglify = 			require('gulp-uglify'),
	notify = 			require('gulp-notify'),
	size = 				require('gulp-size'),
	combineMq = 		require('gulp-combine-mq'),
	sourcemaps = 		require('gulp-sourcemaps'),
	browserSync = 		require('browser-sync'),
	imagemin = 			require('gulp-imagemin'),
	changed = 			require('gulp-changed'),
	babel = 			require('gulp-babel'),
	rename = 			require('gulp-rename'),
	browserify = 		require('browserify'),
	buffer = 			require('vinyl-buffer'),
	source = 			require('vinyl-source-stream'),
	reload = 			browserSync.reload;

// Options, project specifics
var options = {};

// browserSync options

// If you already have a server
// Comment out the 'server' option (below)
// Uncomment the 'proxy' option and update its value in 'gulp-config.json'
// You can easily create 'gulp-config.json' from 'gulp-config-sample.json'
// Uncomment 'var config' line below

// Custom browserSync config
var config = require('./gulp-config.json');

options.browserSync = {
	notify: false,
	// server: {
	// 	baseDir: './'
	// },

	proxy: config.browsersync.proxy,

	// If you want to specify your IP adress (on more complex network), uncomment the 'host' option and update it
	// host: config.browsersync.host,

	// If you want to run as https, uncomment the 'https' option
	// https: true
};


// Paths settings
options.distPath = 'public/assets/'; 		// path to your assets distribution folder
options.srcPath = 'assets/src/';		// path to your assets source folder

options.paths = {
	sass: 			options.srcPath + 'sass/',
	js: 			options.srcPath + 'js/',
	images: 		options.srcPath + 'images/',
	fonts: 			options.srcPath + 'fonts/',
	destCss: 		options.distPath + 'css/',
	destJs: 		options.distPath + 'js/',
	destImages: 	options.distPath + 'images/',
	destFonts: 		options.distPath + 'fonts/'
};

// gulp-sass options
options.libsass = {
	errLogToConsole: false,
	sourceMap: true,
	sourceComments: true,
	precision: 10,
	outputStyle: 'expanded',
	imagePath: 'assets/src/images',
};

// gulp-autoprefixer
options.autoprefixer = {
	support: [
		'last 2 version',
		'ie >= 11',
		'safari >= 8',
		'ios >= 8',
		'android >= 5'
	]
};

// gulp-combine-mq
options.combineMq = {
	settings: {
		beautify: false
	}
};

// gulp-babel
options.babelrc = {
    presets: ['es2015']
};

// gulp-uglify
options.uglify = {
	compress: {
		pure_funcs: ['console.log']
	}
};

// gulp-imagemin
options.imagemin = {
	progressive: true,
	interlaced: true,
	optimizationLevel: 3
};


// Delete the dist directory
gulp.task('clean', function(cb) {
	rimraf(options.distPath, cb);
});


// browser-sync task for starting the server. (Use the built-in server or use your existing one by filling the proxy options)
gulp.task('browser-sync', function() {
	browserSync(options.browserSync);
});


// Node Sass
gulp.task('sass', function() {
	// List all .scss files that need to be processed
	return gulp.src([
		options.paths.sass + 'main.scss'
	])

	.pipe(sourcemaps.init())

	.pipe(sass(options.libsass))

	// Catch any SCSS errors and prevent them from crashing gulp
	.on('error', function (error) {
		gutil.log(gutil.colors.red(error.message));
		this.emit('end');
	})

	.pipe(sourcemaps.init())

	// Add vendor prefixes
	.pipe(autoprefixer(options.autoprefixer.support))

	.pipe(gutil.env.type === 'prod' ? combineMq() : gutil.noop())
	.pipe(gutil.env.type === 'prod' ? minifyCSS() : gutil.noop())

	// Write final .map file for Dev only
	.pipe(gutil.env.type === 'prod' ? gutil.noop() : sourcemaps.write())

	// Output the processed CSS
	.pipe(gulp.dest(options.paths.destCss))

	.pipe(notify('Sass compiled'))
	.pipe(size({title: 'CSS'}))
	.pipe(reload({stream:true}));
});

// ES6 -> CommonJS -> JS Transpiler/Compiler
gulp.task('clean-temp', function(cb){
	return rimraf(options.srcPath + 'temp/', cb);
});

gulp.task('es6-commonjs', ['clean-temp'], function(){
	return gulp.src([
		options.paths.js + '**/*.js'
	])
	.pipe(babel(options.babelrc))
	.pipe(gulp.dest(options.srcPath + 'temp/'));
});

gulp.task('scripts', ['es6-commonjs'], function(){
	return browserify([options.srcPath + 'temp/app.js']).bundle()
	.pipe(source('app.js'))
	.pipe(buffer())
	.pipe(uglify())
	.pipe(rename('app.min.js'))
	.pipe(gulp.dest(options.paths.destJs));
});

// Copy Modernizr
gulp.task('modernizr', function () {
	return gulp.src([
		options.paths.js + 'libs/modernizr.js'
	])
	.pipe(uglify())
	.pipe(gulp.dest(options.paths.destJs));
});


// Images
gulp.task('images', function() {
	return gulp.src(options.paths.images + '**/*')
		.pipe(changed(options.paths.destImages)) // Ignore unchanged files
		.pipe(imagemin(options.imagemin)) // Optimize
		.pipe(gulp.dest(options.paths.destImages));
});


// Fonts
gulp.task('fonts', function() {
	return gulp.src(options.paths.fonts + '**/*.{ttf,woff,woff2,eot,svg}')
		.pipe(changed(options.paths.destFonts)) // Ignore unchanged files
		.pipe(gulp.dest(options.paths.destFonts));
});


// JS hint task (WIP)
gulp.task('jshint', function() {
	return gulp.src([
		options.paths.js + '*.js',
		'./gulpfile.js'
	])
	.pipe(jshint('.jshintrc'))
	.pipe(jshint.reporter('jshint-stylish'));
});


// gulp serve           -> build for dev
// gulp build           -> build for prod
// gulp serve:dist      -> build and serve the output from the dist build

gulp.task('serve', [
	'sass',
	'jshint',
	'scripts',
	'modernizr',
	'images',
	'fonts',
	'browser-sync'
	], function() {

		// Watch Sass
		gulp.watch(options.paths.sass + '**/*.scss', ['sass'])
		.on('change', function(evt) {
			// notify('[watcher] File ' + evt.path.replace(/.*(?=sass)/,'') + ' was ' + evt.type + ', compiling...');
		console.log(
			'[watcher] File ' + evt.path.replace(/.*(?=sass)/,'') + ' was ' + evt.type + ', compiling...'
		);
	});

	// Watch JS
	gulp.watch(options.paths.js + '**/*.js', ['jshint', 'scripts']);

	// Watch images
	gulp.watch(options.paths.images + '**/*', ['images']);

});

// Build and serve the output from the dist build
gulp.task('serve:dist', ['default'], function () {
	browserSync(options.browserSync);
});

gulp.task('build', ['clean'], function () {
	gutil.env.type = 'prod';
	gulp.start('sass', 'scripts', 'modernizr', 'images', 'fonts');
	return gulp.src(options.distPath + '**/*').pipe(size({title: 'build', gzip: false}));
});

gulp.task('default', function () {
	gulp.start('build');
});
