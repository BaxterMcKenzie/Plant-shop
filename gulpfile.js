const gulp = require('gulp'); // Gulp is the task runner
const sass = require('gulp-sass')(require('sass')); // Compiles Sass to CSS
const cleanCSS = require('gulp-clean-css'); // Minifies CSS files
const rename = require('gulp-rename'); // Renames files
const livereload = require('gulp-livereload'); // Reloads the browser when files change
const connect = require('gulp-connect'); // Creates a local server
const jshint = require('gulp-jshint'); // Checks JavaScript for errors
const uglify = require('gulp-uglify'); // Minifies JavaScript files

// Server Task - Sets up a live server
function serve(done) {
    connect.server({
        root: '', // Root directory for the server
        port: 1988, // Port number for the server
        livereload: true // Enable live reload
    });
    done(); // Indicate that the task is done
}

// Styles Task - Compiles Sass, minifies CSS, and reloads the server
function styles(done) {
    gulp.src('css/style.scss') // Source file for Sass
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError)) // Compile Sass to CSS 
        .pipe(rename({
            suffix: '.min'
        })) // Rename the compiled CSS file with a .min suffix  
        .pipe(cleanCSS({
            inline: ['none']
        })) // Minify CSS without processing imports
        .pipe(gulp.dest('css/')) // Destination folder for the minified CSS file  
        .pipe(connect.reload()); // Reload the server   
    done(); // Indicate that the task is done
}

// HTML Task - Reloads the server when HTML files change
function html(done) {
    gulp.src('./*.html') // Source files for HTML       
        .pipe(connect.reload()); // Reload the server   
    done(); // Indicate that the task is done
}

// JS Lint Task - Checks JavaScript files for errors
function lint(done) {
    gulp.src(['js/script.js', '!js/*.min.js']) // Source files for JavaScript, excluding minified files    
        .pipe(jshint()) // Check JavaScript for errors     
        .pipe(jshint.reporter('default')) // Use the default reporter to display errors     
        .pipe(connect.reload()); // Reload the server  
    done(); // Indicate that the task is done
}

// JS Minification Task - Minifies JavaScript files and reloads the server
function minifyJs(done) {
    gulp.src(['js/script.js', '!js/*.min.js']) // Source files for JavaScript, excluding minified files     
        .pipe(uglify()) // Minify JavaScript    
        .pipe(rename({
            suffix: '.min'
        })) // Rename the minified JavaScript file with a .min suffix     
        .pipe(gulp.dest('js/')) // Destination folder for the minified JavaScript file   
        .pipe(connect.reload()); // Reload the server  
    done(); // Indicate that the task is done
}

// Watch Task - Watches for changes in files and runs the corresponding tasks
function watch(done) {
    gulp.watch('css/*.scss', gulp.series(styles)); // Watch for changes in Sass files and run the styles task   
    gulp.watch('./*.html', gulp.series(html)); // Watch for changes in HTML files and run the html task  
    gulp.watch(['js/script.js', '!js/*.min.js'], gulp.series(lint, minifyJs)); // Watch for changes in JavaScript files and run the lint and minifyJs tasks    
    done(); // Indicate that the task is done
}

// Default Task - Runs the serve, watch, lint, minifyJs, html, and styles tasks in sequence
gulp.task('default', gulp.series(serve, watch, lint, minifyJs, html, styles));