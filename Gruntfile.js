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
		less: {
			dist: {
				options: {
					paths: [],
					strictMath: false,
					sourceMap: true,
					outputSourceFiles: true,
					sourceMapURL: '++theme++redturtle.agidtheme/barceloneta/barceloneta-backend.css.map',
					sourceMapFilename: 'barceloneta/barceloneta-backend.css.map',
					modifyVars: {
						"isPlone": "true"
					}
				},
				files: {
					'barceloneta/barceloneta-backend.css': 'barceloneta/less/barceloneta.backend.less'
				}
			}
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
					'css/redturtleagidtheme.print.css': 'sass/redturtleagidtheme.print.scss',
					'css/redturtleagidtheme.backend.css': 'sass/redturtleagidtheme.backend.scss',
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
				map: true,
				processors: [
					require('autoprefixer')({
						browsers: ['last 2 versions'],
					}),
				],
			},
			dist: {
				src: ['css/*.css', 'barceloneta/*.css'],
			},
		},
		uglify: {
			agidtheme: {
				options: {
					sourceMap: true,
					sourceMapIncludeSources: false,
				},
				files: {
					'../browser/static/redturtle-agidtheme-bundle-compiled.min.js': ['../browser/static/integration.js'],
				},
			},
		},
		watch: {
			styles: {
				files: [
					'sass/*.scss',
					'sass/components/*.scss',
					'sass/components/plone/*.scss',
					'barceloneta/less/*.less'
				],
				tasks: ['less', 'sass', 'postcss', 'sed:version'],
			},
			scripts: {
				files: [
					'../browser/static/integration.js',
				],
				tasks: ['uglify'],
			},
		},
		browserSync: {
			html: {
				bsFiles: {
					src: [
						'css/*.css',
					],
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
					src: [
						'css/*.css',
						'barceloneta/*.css',
					],
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
		sed: {
			version: {
				path: 'index.html',
				pattern: /\.?v=\d+/g,
				replacement: 'v=' + grunt.template.today('yyyymmdd'),
			},
		},
	});

	// CWD to theme folder
	grunt.file.setBase('./src/redturtle/agidtheme/theme');

	grunt.registerTask('compile', ['less', 'sass', 'postcss', 'uglify', 'sed:version']);
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('bsync', ['browserSync:html', 'watch']);
	grunt.registerTask('plone-bsync', ['browserSync:plone', 'watch']);
};
