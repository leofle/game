/*global module:false*/
module.exports = function(grunt) {
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);
    // this is not required but it shows the elapsed time at the end of the grunt task. just do it. :)
    require('time-grunt')(grunt);


    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        // Task configuration.
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            build: {
                src: 'js/main.js',
                dest: 'js/build/production.min.js'
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/'
                }]
            }
        },
        autoprefixer: {
            dist: {
                files: {
                    'css/build/styleprfx.css': 'css/style.css'
                }
            }
        },
        cssmin: {
          add_banner: {
            options: {
              banner: '/* My minified css file */'
            },
            files: {
              'css/build/stylemin.css': ['css/build/styleprfx.css']
            }
          }
        },
        watch: {
            scripts: {
                files: ['js/*.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                },
            },
            another: {
                files: ['images/*.*'],
                tasks: ['imagemin'],
                options: {
                    spawn: false,
                },
            },
            styles: {
                files: ['css/style.css'],
                tasks: ['autoprefixer']
            }
        }

    });

    // Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['uglify','imagemin', 'autoprefixer', 'cssmin', 'watch']);
    grunt.registerTask('nw', ['uglify', 'autoprefixer', 'cssmin']);
};