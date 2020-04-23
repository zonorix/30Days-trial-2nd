const { src, dest, watch, parallel } = require("gulp");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sass = require("gulp-sass");
const mqpacker = require("css-mqpacker");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const browserSync = require("browser-sync").create();

const compileSass = () => {
  src("src/assets/scss/*.scss")
    .pipe(
      sass({
        outputStyle: "expanded"
      })
    )
    .pipe(
      postcss([
        autoprefixer({
          grid: true,
          cascade: false
        }),
      ])
    )
    .pipe(postcss([mqpacker()]))
    .pipe(dest("dist/css"));
};

const taskBabel = () => {
  src("src/assets/js/**/*.js")
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(uglify())
    .pipe(
      rename({
        extname: ".min.js",
      })
    )
    .pipe(dest("dist/js"));
};

const serve = () => {
  browserSync.init({
    files: [
      "**/**/*.html",
      "**/**/*.css",
      "**/**/*.js",
      "**/**/*.png",
      "**/**/*.gif",
      "**/**/*.jpg"
    ],
    server: {
      baseDir: "dist/",
      index: "index.html"
    },
    startPath: "index.html",
    notify: false,
    open: "external",
    host: "192.168.11.11"
  });
};

const watchFiles = (done) => {
  watch("src/assets/scss/**/*.scss", compileSass);
  watch("src/assets/js/**/*.js", taskBabel);
  done();
};

exports.default = parallel(serve, watchFiles);
exports.compile = compileSass;
