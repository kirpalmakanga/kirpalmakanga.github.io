# 0. Paquets globaux:
Installer https://nodejs.org/en/


Ouvrir un terminal (n'importe où) et:

`npm install -g gulp-cli`

# 1. Arborescence
Créer un dossier gulp-scss avec l'arborescence suivante

```
assets/
-styles/
--main.scss
--modules/
---_global.scss
---_module.scss
index.html
```

# 2. Créer un projet npm (ouvre l'assistant de création du package.json)
ouvrir le terminal dans le dossier du projet (maj + clic droit dans le dossier + ouvrir une fenetre de commande) et:

`npm init`

# 3. Installer les paquets (--save-dev ajoute les paquets dans le package.json)
`npm install browser-sync del gulp gulp-load-plugins gulp-watch gulp-sass gulp-concat gulp-cssnano --save-dev`

# 4. Créer gulpfile.js

copier les scripts suivants dans le gulpfile

## 4.1. Variables

``` js
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins(); //($.concat, $.sass, $.cssnano)
const browserSync = require('browser-sync').create();
const del = require('del');
```

## 4.2. Préprocessing de la css

``` js
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
    .pipe(gulp.dest('dist'));
});
```

## 4.3. Live reload

``` js
gulp.task('watch', () => {
  browserSync.init({
    files: [
      'assets/styles/**/*.scss',
      '*.html'
    ],
    proxy: 'http://localhost/customer-manager/public/' //(remplacer localhost par 127.0.0.1:8080 pour easyphp)
  });
  gulp.watch('assets/styles/**/*.scss', ['styles']);
});
```

## 4.4. Suppression du dist

```js
gulp.task('clean', done => {
  del(['dist']);
  done();
});
```

# 5. Fichier scss principal

Ajouter les lignes:

```scss
@import 'modules/_global';
@import 'modules/_module';
```

# 6. Générer la css
remplir global.scss et module.scss puis:
`gulp && gulp watch`

# 7. Démarrer le projet
`npm install && gulp && gulp watch`
