const webpack = require('webpack');
const sass = require('node-sass');

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
            '++theme++design.plone.theme/barceloneta/barceloneta-backend.css.map',
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
        implementation: sass,
        sourceMap: true,
        outputStyle: 'compressed',
      },
      dist: {
        files: {
          // 'destination': 'source'
          'css/designplonetheme.css': 'sass/designplonetheme.scss',
          'css/designplonetheme.print.css': 'sass/designplonetheme.print.scss',
          'css/designplonetheme.backend.css':
            'sass/designplonetheme.backend.scss',
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
            grid: true,
            browsers: ['last 2 versions', 'ie >= 11', 'iOS >= 9'],
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
          'css/designplonetheme.css',
          'css/designplonetheme.print.css',
        ],
        dest: 'css/design-plone-theme-bundle.css',
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
            'src/design/plone/theme/theme/js/dist'
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
          'js/dist/design-plone-theme-bundle-compiled.min.js': [
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
          'js/dist/design-plone-theme-icons-bundle.min.js': [
            'js/dist/rt-icons.js',
          ],
        },
      },
    },
    requirejs: {
      'design-plone-theme': {
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
      'design-plone-theme-icons': {
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
  });

  // CWD to theme folder
  grunt.file.setBase('./src/design/plone/theme/theme');

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
};
