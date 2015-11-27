module.exports = (grunt) ->

  # Project config
  grunt.initConfig

    pkg: grunt.file.readJSON('package.json')

    styleSheetSassFolder: 'stylesheets/sass/'
    styleSheetCssFolder: 'stylesheets/css/'

    sass:
      options:
        noCache: true
        style: 'compressed'
      development:
        options:
          style: 'expanded'
          lineNumbers: true
        files: [{
          expand: true
          cwd: '<%= styleSheetSassFolder %>'
          src: '<%= pkg.name %>.sass'
          dest: '<%= styleSheetCssFolder %>'
          ext: '.css'
        }]
      build:
        files: [{
          expand: true
          cwd: '<%= styleSheetSassFolder %>'
          src: '<%= pkg.name %>.sass'
          dest: '<%= styleSheetCssFolder %>'
          ext: '.min.css'
        }]

  grunt.loadNpmTasks 'grunt-contrib-sass'