let mix = require('laravel-mix');

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

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');

mix.styles([

    'resources/assets/css/libs/font-awesome.css',
    'resources/assets/css/libs/sky-forms.css',
    'resources/assets/css/libs/sky-mega-menu.css',
    'resources/assets/css/libs/sky-tabs.css',
    'resources/assets/css/libs/summernote.css',
    'resources/assets/css/libs/toastr.css',
    'resources/assets/css/libs/animate.css',
    'resources/assets/css/libs/select2.min.css',
    'resources/assets/css/libs/bootstrap.css',

], 'public/css/libs.css');

mix.scripts([

    'resources/assets/js/libs/jquery.min.js',
    'resources/assets/js/libs/bootstrap.js',    
    'resources/assets/js/libs/jquery-ui.min.js',
    'resources/assets/js/libs/jquery.form.min.js',
    'resources/assets/js/libs/jquery.validate.min.js',
     'resources/assets/js/libs/jquery.maskedinput.min.js',
    'resources/assets/js/libs/jquery.modal.js',
    'resources/assets/js/libs/jquery.placeholder.min.js',
    'resources/assets/js/libs/summernote.js',
    'resources/assets/js/libs/toastr.min.js',
    'resources/assets/js/libs/select2.min.js',

], 'public/js/libs.js');
