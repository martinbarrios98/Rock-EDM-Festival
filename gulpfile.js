
const  {series, src, dest, parallel, watch } = require('gulp');
const webp = require('gulp-webp');
const notify = require('gulp-notify');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');

const paths = {
    imagenes: 'src/img/**/*',
    js: 'src/js/**/*'
}

function js (){
    return src(paths.js)
        .pipe( concat('App.js') )
        .pipe(dest( './build/js' ))
        .pipe( notify({message: 'Archivos JS unidos!'}) )
}

function minificarImagenes (){
    return src(paths.imagenes)
        .pipe( imagemin() )
        .pipe( dest('./build/img'))
        .pipe( notify ({message: 'Imagen Optimizada'}) )
}

function versionWebp (){
    return src(paths.imagenes)
        .pipe(webp())
        .pipe(dest('./build/img'))
        .pipe(notify({message: 'Version Webp Lista!'}))
}

function watchArchivos(){
    watch(paths.js, js)
}

exports.minificarImagenes = minificarImagenes;
exports.default = series (minificarImagenes, versionWebp, watchArchivos);