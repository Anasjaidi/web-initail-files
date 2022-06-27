// call node modules
const {src, dest, series, watch} = require('gulp');
const	gulp = require('gulp') ,
		sass = require('gulp-sass')(require('sass')),
		pug = require('gulp-pug'),
		htmlmin = require('gulp-htmlmin'),
		rename = require('gulp-rename'),
		jsmin = require('gulp-terser'),
		imgmin = require('gulp-imagemin');
		cssmin = require('gulp-clean-css'),
		prefixer = require('gulp-autoprefixer'),
		concat = require('gulp-concat'),
		live = require('browser-sync').create();

// create files and dests vars
const	pugFiles = './index.pug',
		pugDest = '../dist';
const	sassFiles = './sass/**/*.sass',
		sassDest = '../dist/css';
const	jsFiles = './scripts/**/*.js',
		jsDest = '../dist/js';
const	imgFiles = './img/**/*',
		imgDest = '../dist/img';

// create tasks function
const	sassFunction = function (){
	return src(sassFiles, {sourcemaps:true})
			.pipe(sass())
			.pipe(prefixer('last 7 versions'))
			.pipe(dest(sassDest))
}
const pugFunction = function (){
	return src(pugFiles, {sourcemaps:true})
			.pipe(pug({pretty:true}))
			.pipe(dest(pugDest));
}
const jsFunction = function (){
	return src(jsFiles)
			.pipe(concat('main.js'))
			.pipe(dest(jsDest));
}
const	cssminFunction = function (){
	return src('../dist/css/main.css')
			.pipe(cssmin())
			.pipe(dest(sassDest));
}
const	jsminFunction = function (){
	return src('../dist/js/main.js')
			.pipe(jsmin())
			.pipe(dest(jsdest));
}
const	htmlminFunction = function (){
	return src('../dist/index.html')
			.pipe(htmlmin({collapseWhitespace:true}))
			.pipe(dest(pugDest));
}