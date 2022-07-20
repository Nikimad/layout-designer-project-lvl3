const { src, dest, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');

const buildSass = () => {
  console.log('Компиляция SASS');

  return src('app/scss/app.scss')
    .pipe(sass())
    .pipe(dest('build/styles/'));
}

const buildPug = () => {
  console.log('Компиляция Pug');

  return src('app/pages/*.pug')
    .pipe(pug({ pretty: true }))
    .pipe(dest('build/'));
}

const getAssets = () => {
  console.log("Копирование дополнительных файлов");
  return src('app/assets/**/*')
    .pipe(dest('build/assets/'));
}

exports.build = parallel(buildSass, buildPug, getAssets);