// jshint esversion: 6, asi: true
const gulp = require('gulp')
const gulpLoadPlugins = require('gulp-load-plugins')
const $ = gulpLoadPlugins()
const browserSync = require('browser-sync').create()
const del = require('del')


//Process Images
gulp.task('images', () => {
  return gulp.src('assets/images/**/*')
    .pipe($.if($.if.isFile, $.cache($.imagemin({
      progressive: true,
      interlaced: true,
      svgoPlugins: [{cleanupIDs: false}]
    }))
    .on('error', err => {
      console.log(err)
      this.end()
    })))
    .pipe(gulp.dest('dist/images'))
})

//Process Fonts
gulp.task('fonts', function() {
  return gulp.src('assets/fonts/**/**')
    .pipe($.flatten())
    .pipe(gulp.dest('dist/fonts'))
    .pipe(browserSync.stream())
})

//Process Scripts
gulp.task('scripts', () => {
  return gulp.src([
      'node_modules/js-cookie/src/js.cookie.js',
      'node_modules/imgwatcher/dist/imgwatcher.js',
      'assets/scripts/**/*.js'
    ])
    .pipe($.sourcemaps.init())
    .pipe($.concat('scripts/main.js'))
    .pipe($.babel({
      presets: ['es2015']
    }))
    .pipe($.uglify())
    .pipe($.sourcemaps.write('.', {
      sourceRoot: 'assets/scripts/'
    }))
    .pipe(gulp.dest('dist'))
})

//Process Styles
gulp.task('styles', () => {
  return gulp.src([
      'assets/styles/main.scss'
    ])
    .pipe($.sass({
      outputStyle: 'nested',
      precision: 10
    }).on('error', $.sass.logError))
    .pipe($.concat('styles/main.css'))
    .pipe($.cssnano())
    .pipe(gulp.dest('dist'))
})

//Watch files
gulp.task('watch', () => {
  browserSync.init({
    files: [
      'assets/styles/**/*.scss',
      'assets/images/**/*',
      'assets/scripts/**/*.js',
      './*.html'
    ],
    proxy: 'http://localhost/mk-dev/'
  })
  gulp.watch('assets/styles/**/*.scss', ['styles'])
  gulp.watch('assets/images/**/*', ['images'])
  gulp.watch('assets/scripts/**/*.js', ['scripts'])
})

//Delete dist folder
gulp.task('clean', () => del(['dist']))

gulp.task('build', () => gulp.start('fonts', 'images', 'styles', 'scripts'))

//Default gulp
gulp.task('default', () => del(['dist']).then(gulp.start('build')))
