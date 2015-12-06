module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                loadPath: [
                "lib/bower_components/bootstrap-sass/assets/stylesheets"
                ],
            },
            dist: {
                files: {
                    'assets/css/<%= pkg.name %>.css' : 'assets/src/scss/<%= pkg.name %>.scss'
                }
            }
        },
        watch: {
            css: {
                files: [
                    'assets/src/scss/**/*.scss',
                    'assets/src/js/**/*.js'
                ],
                tasks: ['sass', 'concat']
            }
        },

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    'assets/src/js/**/*.js'
                ],
                dest: 'assets/js/<%= pkg.name %>.js'
            }
        }

        //TODO: specify uglify task for production builds

    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default',['concat', 'watch']);
    
    grunt.registerTask('dist', ['concat']);
}