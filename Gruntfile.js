module.exports = function (grunt) {
    'use strict';
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // we could just concatenate everything, really
        // but we like to have it the complex way.
        // also, in this way we do not have to worry
        // about putting files in the correct order
        // (the dependency tree is walked by r.js)
        sass: {
            dist: {
                options: {
                    paths: [],
                    strictMath: false,
                    sourceMap: true,
                    outputSourceFiles: true,
                    outputStyle: 'compressed',
                    sourceMapURL: '++theme++redturtle.agid.theme/css/redturtleagidtheme.css.map',
                    sourceMapFilename: 'css/redturtleagidtheme.css.map',
                    modifyVars: {
                        "isPlone": "false"
                    }
                },
                files: {
                    // 'destination': 'source'
                    'css/redturtleagidtheme.css': 'sass/redturtleagidtheme.sass',
                }
            }
            bs: {
              files: {
                // 'destination': 'source'
                'css/bootstrap.min.css': 'sass/bootstrap.scss',
              },
            },
        },
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 2 versions']
                    })
                ]
            },
            dist: {
                src: 'css/*.css'
            }
        },
        watch: {
            scripts: {
                files: [
                    'sass/*.sass'
                ],
                tasks: ['sass', 'postcss']
            }
        },
        browserSync: {
            html: {
                bsFiles: {
                    src : [
                      'sass/*.sass'
                    ]
                },
                options: {
                    watchTask: true,
                    debugInfo: true,
                    online: true,
                    server: {
                        baseDir: "."
                    },
                }
            },
            plone: {
                bsFiles: {
                    src : [
                      'sass/*.sass'
                    ]
                },
                options: {
                    watchTask: true,
                    debugInfo: true,
                    proxy: "localhost:8080",
                    reloadDelay: 3000,
                    // reloadDebounce: 2000,
                    online: true
                }
            }
        }
    });


    // grunt.loadTasks('tasks');
  //  grunt.loadNpmTasks('grunt-browser-sync');
  //  grunt.loadNpmTasks('grunt-contrib-watch');
  //  grunt.loadNpmTasks('grunt-contrib-less');
  //  grunt.loadNpmTasks('grunt-postcss');

    // CWD to theme folder
    grunt.file.setBase('./src/redturtle/agidtheme/theme');

    grunt.registerTask('compile', ['sass', 'postcss']);
    grunt.registerTask('default', ['compile']);
    grunt.registerTask('bsync', ["browserSync:html", "watch"]);
    grunt.registerTask('plone-bsync', ["browserSync:plone", "watch"]);
};
