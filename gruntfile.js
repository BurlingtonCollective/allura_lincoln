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
          sourceMapRootpath: 'http://localhost:8888/allura_lincoln/'
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
          sourceMapFilename: 'css/cms/app.css.map',
          sourceMapUrl: 'css/cms/app.css.map',
          sourceMapRootpath: 'http://localhost:4000/'
        },
        files: {
          'css/cms/app.css': 'css/cms/app.less'
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
          'css/cms/**/*.less'
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