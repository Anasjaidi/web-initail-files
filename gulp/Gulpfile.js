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
