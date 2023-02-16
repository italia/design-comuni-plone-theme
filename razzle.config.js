/**
 * Replace with custom razzle config when needed.
 * @module razzle.config
 */

const jsConfig = require('./jsconfig').compilerOptions;
const path = require('path');

const makeLoaderFinder = require('razzle-dev-utils/makeLoaderFinder');
const fileLoaderFinder = makeLoaderFinder('file-loader');
const urlLoaderFinder = makeLoaderFinder('url-loader');
const lessLoaderFinder = makeLoaderFinder('less-loader');
const babelLoaderFinder = makeLoaderFinder('babel-loader');
const projectRootPath = path.resolve('.');

const pathsConfig = jsConfig.paths;
let voltoPath = path.resolve('./node_modules/@plone/volto');
Object.keys(pathsConfig).forEach((pkg) => {
  if (pkg === '@plone/volto') {
    voltoPath = path.resolve(`./${jsConfig.baseUrl}/${pathsConfig[pkg][0]}`);
  }
});

const volto_config = require(`${voltoPath}/razzle.config`);

const plugins = (volto_config.plugins || []).filter(
  (plugin) => plugin !== 'scss',
);
plugins.push({
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
});

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

    const lessLoader = base_config.module.rules.find(lessLoaderFinder);
    lessLoader.include.push(/node_modules\/volto-data-grid-widget/);

    // See https://github.com/italia/design-react-kit/pull/885#issuecomment-1420886066
    const babelLoader = base_config.module.rules.find(babelLoaderFinder);
    babelLoader.include.push(/node_modules\/design-react-kit/);

    base_config.resolve.alias = {
      // TODO remove the next two when implemented in core
      '@plone/volto/components/theme/Image/Image': `${projectRootPath}/src/components/Image/Image.jsx`,
      '@plone/volto/helpers/Image/Image': `${projectRootPath}/src/components/Image/helpers.js`,
      ...webpackConfig.resolve.alias,
      ...base_config.resolve.alias,
      '@italia': `${projectRootPath}/src`, // TODO deprecated: remove in version 8
      'design-comuni-plone-theme': `${projectRootPath}/src`,
    };

    // remove unused languages. (TODO: move to ENV at build time)
    base_config.plugins.push(
      new webpackObject.ContextReplacementPlugin(
        /moment[/\\]locale$/,
        /(it|it-it|en-us|en-gb)$/,
      ),
      // Ignore all locale files of moment.js - new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    );

    return base_config;
  },
  plugins,
});
