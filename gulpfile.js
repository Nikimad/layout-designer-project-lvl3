const { src, dest, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');

const buildSass = () => {
  console.log('Компиляция SASS');

  return src('app/sass/app.scss')
    .pipe(sass())
    .pipe(dest('build/styles/'));
}

const buildPug = () => {
  console.log('Компиляция Pug');

  return src('app/pages/*.pug')
    .pipe(pug({ pretty: true }))
    .pipe(dest('build/'));
}

exports.build = parallel(buildSass, buildPug);