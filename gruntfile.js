module.exports = function (grunt) {
  grunt.initConfig({
    less: {
      portfolio: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2,
          paths: ["css"],
          livereload: true,
          sourceMap: true,
          sourceMapFilename: 'portfolio/css/app.css.map',
          sourceMapUrl: 'portfolio/css/app.css.map',
          sourceMapRootpath: 'http://localhost:8888/'
        },
        files: {
          'portfolio/css/app.css': 'portfolio/css/app.less'
        }
      },
      cms: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2,
          paths: ["css"],
          livereload: true,
          sourceMap: true,
          sourceMapFilename: 'admin/css/app.css.map',
          sourceMapUrl: 'admin/css/app.css.map',
          sourceMapRootpath: 'http://localhost:8888/'
        },
        files: {
          'admin/css/app.css': 'admin/css/app.less'
        }
      }
    },
    watch: {
      portfolio: {
        options: {
          livereload: true
        },
        files: [
          'portfolio/css/**/*.less'
        ],
        tasks: [
          'less:portfolio'
        ]
      },
      cms: {
        options: {
          livereload: true
        },
        files: [
          'admin/css/**/*.less'
        ],
        tasks: [
          'less:cms'
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
}