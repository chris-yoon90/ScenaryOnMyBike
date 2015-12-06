module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                loadPath: [
                    "lib/bower_components/bootstrap-sass/assets/stylesheets"
                ],
            },
            dev: {
                files: {
                    'assets/css/<%= pkg.name %>.css' : 'src/scss/<%= pkg.name %>.scss'
                }
            },
            dist: {
                options: {
                    sourcemaps: 'none'
                },
                files: {
                    'assets/css/<%= pkg.name %>.css' : 'src/scss/<%= pkg.name %>.scss'
                }
            }
        },
        watch: {
            hbs: {
                files: [
                    'templates/**/*.hbs'
                ],
                tasks: ['includereplace:dev']
            },
            
            css: {
                files: [
                    'src/scss/**/*.scss',
                ],
                tasks: ['sass:dev']
            },
            js: {
                files: [
                    'src/js/**/*.js'
                ],
                tasks: ['concat:dev']
            }
        },

        concat: {
            options: {
                separator: ';'
            },            
            dev: {
                options: {
                    sourceMap: true
                },
                src: [
                    'src/js/**/*.js'
                ],
                dest: 'assets/js/<%= pkg.name %>.js'
            }
        },
        
        includereplace: {
            dev: {
                options: {
                    includesDir: 'src/templates/dev-templates/'
                },
                files: [
                    {
                        src: 'src/templates/_default.hbs',
                        dest: 'default.hbs'
                    }
                ]
            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-include-replace');
    
    grunt.registerTask('default',['sass:dev', 'concat:dev', 'includereplace:dev', 'watch']);
}