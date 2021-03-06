const mix = require('laravel-mix');

require('laravel-mix-splitjs');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .webpackConfig({
      resolve: {
        extensions: [".js", ".jsx"],
        alias: {
          "@": __dirname + "/resources/js"
        }
      }
   })
   .splitJs({
       maxChunks: 1
    });
