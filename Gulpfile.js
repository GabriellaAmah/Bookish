let gulp = require('gulp');
//let tsLint = require('tslint');
let ts = require('gulp-typescript')

const createProject = ts.createProject({
    removeComments : true,
    target : 'ES6',
    module : 'es2015',
    declaration : false,
    noImplicitAny : true,
    moduleResolution : 'node',
    allowSyntheticDefaultImports : true

})

gulp.task('lintFolders', function(done){
    gulp.src('./src/**/*.ts')
    .pipe(createProject())
    .js
    .pipe(gulp.dest('./main/src'))

    done()
})


gulp.task('default', gulp.series('lintFolders'))