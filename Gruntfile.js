const webpack = require('webpack');

module.exports = function(grunt) {
  'use strict';
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // we could just concatenate everything, really
    // but we like to have it the complex way.
    // also, in this way we do not have to worry
    // about putting files in the correct order
    // (the dependency tree is walked by r.js)
    less: {
      dist: {
        options: {
          paths: [],
          strictMath: false,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL:
            '++theme++redturtle.agidtheme/barceloneta/barceloneta-backend.css.map',
          sourceMapFilename: 'barceloneta/barceloneta-backend.css.map',
          modifyVars: {
            isPlone: 'true',
          },
        },
        files: {
          'barceloneta/barceloneta-backend.css':
            'barceloneta/less/barceloneta.backend.less',
        },
      },
    },
    sass: {
      options: {
        sourceMap: true,
        outputStyle: 'compressed',
      },
      dist: {
        files: {
          // 'destination': 'source'
          'css/redturtleagidtheme.css': 'sass/redturtleagidtheme.scss',
          'css/redturtleagidtheme.print.css':
            'sass/redturtleagidtheme.print.scss',
          'css/redturtleagidtheme.backend.css':
            'sass/redturtleagidtheme.backend.scss',
        },
      },
      bs: {
        files: {
          // 'destination': 'source'
          'css/bootstrap.min.css': 'sass/bootstrap.scss',
        },
      },
    },
    postcss: {
      options: {
        map: {
          inline: false,
          annotation: 'css/',
        },
        processors: [
          require('autoprefixer')({
            browsers: ['last 2 versions', 'ie >= 11', 'iOS >= 6'],
          }),
          require('postcss-flexbugs-fixes')(),
        ],
      },
      dist: {
        src: ['css/*.css', 'barceloneta/*.css'],
      },
    },
    concat_css: {
      options: {},
      all: {
        src: [
          'css/bootstrap.min.css',
          'css/redturtleagidtheme.css',
          'css/redturtleagidtheme.print.css',
        ],
        dest: 'css/redturtle-agidtheme-bundle.css',
      },
    },
    webpack: {
      options: {
        stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development',
      },
      fa_rt: {
        entry: './js/src/fa',
        output: {
          filename: 'fa.js',
          path: require('path').resolve(
            __dirname,
            'src/redturtle/agidtheme/theme/js/dist'
          ),
          library: 'fa_rt',
          libraryTarget: 'amd',
        },
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['env'],
                },
              },
            },
          ],
        },
        plugins: [
          new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"',
          }),
        ],
      },
    },
    uglify: {
      agidtheme: {
        options: {
          sourceMap: true,
          sourceMapIncludeSources: false,
        },
        files: {
          'js/dist/redturtle-agidtheme-bundle-compiled.min.js': [
            'js/dist/bundle-compiled.js',
          ],
        },
      },
      agidtheme_icons: {
        options: {
          sourceMap: true,
          sourceMapIncludeSources: false,
        },
        files: {
          'js/dist/redturtle-agidtheme-icons-bundle.min.js': [
            'js/dist/rt-icons.js',
          ],
        },
      },
    },
    requirejs: {
      'redturtle-agidtheme': {
        options: {
          baseUrl: './',
          generateSourceMaps: true,
          preserveLicenseComments: false,
          paths: {
            jquery: 'empty:',
            ellipsed: './node_modules/ellipsed/lib/ellipsed',
          },
          wrapShim: true,
          name: './js/src/index.js',
          exclude: ['jquery'],
          out: './js/dist/bundle-compiled.js',
          optimize: 'none',
        },
      },
      'redturtle-agidtheme-icons': {
        options: {
          baseUrl: './',
          generateSourceMaps: true,
          preserveLicenseComments: false,
          paths: {
            fa_rt: './js/dist/fa',
          },
          wrapShim: true,
          name: './js/src/icons.js',
          out: './js/dist/rt-icons.js',
          optimize: 'none',
        },
      },
    },
    watch: {
      styles: {
        files: [
          'sass/*.scss',
          'sass/components/*.scss',
          'sass/components/plone/*.scss',
          'barceloneta/less/*.less',
        ],
        tasks: ['less', 'sass', 'postcss', 'concat_css'],
      },
      scripts: {
        files: ['js/src/index.js', 'js/src/icons.js'],
        tasks: ['requirejs', 'uglify'],
      },
      fa: {
        files: ['js/src/fa.js'],
        tasks: ['webpack', 'requirejs', 'uglify'],
      },
    },
    browserSync: {
      html: {
        bsFiles: {
          src: ['css/*.css'],
        },
        options: {
          watchTask: true,
          debugInfo: true,
          online: true,
          server: {
            baseDir: '.',
          },
        },
      },
      plone: {
        bsFiles: {
          src: ['css/*.css', 'barceloneta/*.css'],
        },
        options: {
          watchTask: true,
          debugInfo: true,
          proxy: 'localhost:8080',
          reloadDelay: 3000,
          reloadDebounce: 1000,
          online: true,
        },
      },
    },
  });

  // CWD to theme folder
  grunt.file.setBase('./src/redturtle/agidtheme/theme');

  grunt.registerTask('compile', [
    'less',
    'sass',
    'postcss',
    'concat_css',
    'webpack',
    'requirejs',
    'uglify',
  ]);
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('bsync', ['browserSync:html', 'watch']);
  grunt.registerTask('plone-bsync', ['browserSync:plone', 'watch']);
};
