
  var gulp = require("gulp"); // Load Gulp!
  // Now that we've installed the uglify package we can require it:
 
  var browserSync = require('browser-sync').create();

  var terser = require("gulp-terser"),
      rename = require("gulp-rename"),
      eslint = require("gulp-eslint");
  const babel = require("gulp-babel");
    
  var sass = require("gulp-sass"),
      autoprefixer = require("gulp-autoprefixer"),
      cssnano = require("gulp-cssnano"),
      prettyError = require("gulp-prettyerror"),
      rename = require("gulp-rename");

  gulp.task("script", function() {
    return gulp.src("./js/*.js") // What files do we want gulp to consume?
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(
        babel({
          presets: ['env']
        })
      )
      .pipe(terser()) // Call the uglify function on these files
      .pipe(rename({ extname: ".min.js" })) // Rename the uglified file
      .pipe(gulp.dest("./build/js")); // Where do we put the result?
  });


  gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('js/*.js', gulp.series('script', 'reload'));
    gulp.watch('sass/*.scss', gulp.series('sass', 'reload'));
  });

    gulp.task('reload', function() { 
        browserSync.reload();
    });
  
gulp.task('default', gulp.series('script', 'browser-sync'));

gulp.task("sass", function() {
    return gulp
      .src("./sass/style.scss")
      .pipe(prettyError()) 
      .pipe(sass())
      .pipe(
        autoprefixer({
          browsers: ["last 2 versions"]
        })
      )
      .pipe(gulp.dest("./build/css"))
      .pipe(cssnano())
      .pipe(rename("style.min.css"))
      .pipe(gulp.dest("./build/css"));
  });

 