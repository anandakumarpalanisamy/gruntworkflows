module.exports = function(grunt) {

    grunt.initConfig({

        concat : {
            //This specifies the job in the grunt.js
            options: {
                separator : '\n\n//-------------------------------------\n',
                banner : '\n\n//-------------------------------------\n'
            },
            dist : {
                src : ['components/scripts/*.js'],
                dest : 'builds/development/js/scripts.js'
            }
        },

        sass : {
            dist : {
                options: {
                    style : 'expanded'
                },
                files : [{
                    src : 'components/sass/style.scss',
                    dest: 'builds/development/css/style.css'
                }]
            }
        },

        watch : {
            options : {
                spawn: false,
                livereload: true
            },
            scripts : {
                files: ['builds/development/**/*.html', 'components/scripts/*.js'],
                task: ['concat']
            }
            

        },

        connect : {
            server : {
                options : {
                    hostname: 'localhost',
                    port: '9001',
                    base: 'builds/development',
                    livereload: true
                }
            }
        },

        wiredep : {
            task : {
                src : 'builds/development/**/*.html'
            }
        },

        bower_concat : {
            all : {
                dest: 'builds/development/js/_bower.js'
            }
        }

    }); //init config section

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-bower-concat');
    //Having problems installing node-sass module.
    //grunt.loadNpmTasks('grunt-sass');
    grunt.registerTask('default', ['wiredep', 'bower_concat', 'concat', 'connect', 'watch']);

}; //wrapper function