module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'assets/css/<%= pkg.name %>.css' : 'assets/scss/<%= pkg.name %>.scss'
                }
            }
        },
        watch: {
            css: {
                files: 'assets/scss/**/*.scss',
                tasks: ['sass']
            }
        }

        //TODO: specify uglify task for production builds

    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['watch']);
}