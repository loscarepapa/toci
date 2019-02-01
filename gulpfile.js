const {src, dest, parallel, watch} = require('gulp');
const stylus = require('gulp-stylus')
const rename = require('gulp-rename');
const babel = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');

function css() {
    return src('index.styl') 
        .pipe(stylus({
            compress: true
        }))
        .pipe(rename('app.css'))
        .pipe(dest('./public'))
}

function assets() {
    return src('./assets/*')
        .pipe(dest('./public'))
}

function scripts() {
    return browserify('./src/index.js')
        .transform(babel)
        .bundle()
        .on('error', function (err) {
            console.log(err);
            this.emit('end')
        })
        .pipe(source('index.js'))
        .pipe(rename('app.js'))
        .pipe(dest('public'))
}

exports.scripts = scripts;
exports.css = css;
exports.assets = assets;
exports.default = parallel(scripts, css, assets);

watch('index.styl', css);
watch('./assets/*', assets);
watch('./src/*/*', scripts);
watch('./src/index.js', scripts);


