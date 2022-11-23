/**
 * Replace with custom razzle config when needed.
 * @module razzle.config
 */

const jsConfig = require('./jsconfig').compilerOptions;
const path = require('path');

const makeLoaderFinder = require('razzle-dev-utils/makeLoaderFinder');
const fileLoaderFinder = makeLoaderFinder('file-loader');
const urlLoaderFinder = makeLoaderFinder('url-loader');
const projectRootPath = path.resolve('.');

const pathsConfig = jsConfig.paths;
let voltoPath = path.resolve('./node_modules/@plone/volto');
Object.keys(pathsConfig).forEach((pkg) => {
  if (pkg === '@plone/volto') {
    voltoPath = path.resolve(`./${jsConfig.baseUrl}/${pathsConfig[pkg][0]}`);
  }
});

const volto_config = require(`${voltoPath}/razzle.config`);

module.exports = Object.assign({}, volto_config, {
  modifyWebpackConfig: ({
    env: { target, dev },
    webpackConfig,
    webpackObject,
    options,
  }) => {
    const base_config = volto_config.modifyWebpackConfig({
      env: { target, dev },
      webpackConfig,
      webpackObject,
      options,
    });

    const fileLoader = base_config.module.rules.find(fileLoaderFinder);
    fileLoader.exclude = [
      /bootstrap-italia\/src\/svg\/.*\.svg$/,
      ...fileLoader.exclude,
    ];

    const SVG_LOADER = {
      test: /bootstrap-italia\/src\/svg\/.*\.svg$/,
      use: [
        {
          loader: 'svg-loader',
        },
        {
          loader: 'svgo-loader',
          options: {
            plugins: [
              { removeTitle: true },
              { convertPathData: false },
              { removeUselessStrokeAndFill: true },
              { removeViewBox: false },
            ],
          },
        },
      ],
    };

    base_config.module.rules.push(SVG_LOADER);

    const urlLoader = base_config.module.rules.find(urlLoaderFinder);
    urlLoader.exclude = [/\.(png|jpe?g|webp)$/i, ...(urlLoader.exclude || [])];
    // see: node_modules/razzle/config/createConfig.js
    const IMG_LOADER = {
      test: /\.(png|jpe?g|webp)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'static/media/[name].[hash:8].[ext]',
            emitFile: target === 'web',
          },
        },
        {
          // currently webpack 5 w/ asset is not supported by webpack-image-resize-loader
          // see https://github.com/Calvin-LL/webpack-image-resize-loader/issues/491
          // when Volto moves to webpack 5 w/ asset, this loader need to be reevaluated
          // or substituted by responsive-loader
          loader: 'webpack-image-resize-loader',
          // see https://github.com/Calvin-LL/webpack-image-resize-loader for options.
          // options: {
          //   width: 1000,
          // },
        },
      ],
    };

    base_config.module.rules.push(IMG_LOADER);
    // RegExp.prototype.toJSON = function() { return this.source; };
    // console.log(JSON.stringify(base_config.module.rules, null, 2))

    webpackConfig.resolve.alias = {
      // TODO remove the next two when implemented in core
      '@plone/volto/components/theme/Image/Image': path.resolve(
        `${projectRootPath}/src/components/Image/Image.jsx`,
      ),
      '@plone/volto/helpers/Image/Image': path.resolve(
        `${projectRootPath}/src/components/Image/helpers.js`,
      ),

      ...webpackConfig.resolve.alias,
      ...base_config.resolve.alias,
      '../../theme.config$': `${projectRootPath}/theme/theme.config`,

      '@plone/volto': `${voltoPath}/src`,
      // to be able to reference path uncustomized by webpack
      '@plone/volto-original': `${voltoPath}/src`,
      // be able to reference current package from customized package
      '@italia': `${projectRootPath}/src`, // TODO deprecated: remove in version 8
      'design-volto-theme': `${projectRootPath}/src`,
    };

    return base_config;
  },
  plugins: [
    ...(volto_config.plugins || {}),
    {
      name: 'scss',
      options: {
        sass: {
          dev: {
            sassOptions: {
              includePaths: ['node_modules'],
              outputStyle: 'expanded',
              sourceMap: true,
              quiet: true,
              quietDeps: true,
            },
          },
          prod: {
            sassOptions: {
              includePaths: ['node_modules'],
              outputStyle: 'expanded',
              sourceMap: true,
              quiet: true,
              quietDeps: true,
            },
          },
        },
      },
    },
  ],
});
