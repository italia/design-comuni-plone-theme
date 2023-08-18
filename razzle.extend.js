/**
 * Replace with custom razzle config when needed.
 * @module razzle.config
 */

const makeLoaderFinder = require('razzle-dev-utils/makeLoaderFinder');
const fileLoaderFinder = makeLoaderFinder('file-loader');
const urlLoaderFinder = makeLoaderFinder('url-loader');
const lessLoaderFinder = makeLoaderFinder('less-loader');
const babelLoaderFinder = makeLoaderFinder('babel-loader');

const plugins = (defaultPlugins) => {
  const newPlugins = defaultPlugins.filter((plugin) => plugin !== 'scss');
  newPlugins.push({
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
  return newPlugins;
};

const modify = (webpackConfig, { target, dev }, webpackObject) => {
  const fileLoader = webpackConfig.module.rules.find(fileLoaderFinder);
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
            { name: 'removeTitle', params: { removeTitle: true } },
            { name: 'convertPathData', params: { convertPathData: false } },
            {
              name: 'removeUselessStrokeAndFill',
              params: { removeUselessStrokeAndFill: true },
            },
            { name: 'removeViewBox', params: { removeViewBox: false } },
          ],
        },
      },
    ],
  };

  webpackConfig.module.rules.push(SVG_LOADER);

  const urlLoader = webpackConfig.module.rules.find(urlLoaderFinder);
  urlLoader.exclude = [/\.(png|jpe?g)$/i, ...(urlLoader.exclude || [])];
  // see: node_modules/razzle/config/createConfig.js
  const IMG_LOADER = {
    test: /\.(png|jpe?g)$/i,
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

  webpackConfig.module.rules.push(IMG_LOADER);

  const lessLoader = webpackConfig.module.rules.find(lessLoaderFinder);
  lessLoader.include.push(/node_modules\/volto-data-grid-widget/);

  // See https://github.com/italia/design-react-kit/pull/885#issuecomment-1420886066
  const babelLoader = webpackConfig.module.rules.find(babelLoaderFinder);
  babelLoader.include.push(/node_modules\/design-react-kit/);

  webpackConfig.resolve.alias = {
    // TODO remove the next two when implemented in core
    '@plone/volto/components/theme/Image/Image': `${__dirname}/src/components/Image/Image.jsx`,
    '@plone/volto/helpers/Image/Image': `${__dirname}/src/components/Image/helpers.js`,
    ...webpackConfig.resolve.alias,
    // 'design-comuni-plone-theme': `${__dirname}/src`,
  };

  // remove unused languages. (TODO: move to ENV at build time)
  // webpackConfig.plugins.push(
  //   new webpackObject.ContextReplacementPlugin(
  //     /moment[/\\]locale$/,
  //     /(it|it-it|en-us|en-gb)$/,
  //   ),
  //   // Ignore all locale files of moment.js - new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  // );

  return webpackConfig;
};

module.exports = {
  modify,
  plugins,
};
