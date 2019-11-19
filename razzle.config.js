/**
 * Replace with custom razzle config when needed.
 * @module razzle.config
 */

const jsConfig = require('./jsconfig').compilerOptions;
const path = require('path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const makeLoaderFinder = require('razzle-dev-utils/makeLoaderFinder');
const fileLoaderFinder = makeLoaderFinder('file-loader');
const pathsConfig = jsConfig.paths;
let voltoPath = './node_modules/@plone/volto';
Object.keys(pathsConfig).forEach(pkg => {
  if (pkg === '@plone/volto') {
    voltoPath = `./${jsConfig.baseUrl}/${pathsConfig[pkg][0]}`;
  }
});

//module.exports = require(`${voltoPath}/razzle.config`);

const volto_config = require(`${voltoPath}/razzle.config`);

module.exports = Object.assign({}, volto_config, {
  modify: (config, { target, dev }, webpack) => {
    const base_config = volto_config.modify(config, { target, dev }, webpack);

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

    const BASE_CSS_LOADER = {
      loader: 'css-loader',
      options: {
        importLoaders: 2,
        sourceMap: true,
        localIdentName: '[name]__[local]___[hash:base64:5]',
      },
    };

    const POST_CSS_LOADER = {
      loader: require.resolve('postcss-loader'),
      options: {
        sourceMap: true,
        // Necessary for external CSS imports to work
        // https://github.com/facebookincubator/create-react-app/issues/2677
        ident: 'postcss',
        plugins: () => [
          require('postcss-flexbugs-fixes'),
          autoprefixer({
            flexbox: 'no-2009',
          }),
        ],
      },
    };

    const SASSLOADER = {
      test: /\.s[ac]ss$/i,
      include: [
        path.resolve('./theme'),
        /*/node_modules\/bootstrap-italia/,
        /node_modules\/bootstrap/,*/
      ],
      use: dev
        ? [
            {
              loader: 'style-loader',
            },
            BASE_CSS_LOADER,
            POST_CSS_LOADER,
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  outputStyle: 'expanded',
                  sourceMap: true,
                  includePaths: ['node_modules'],
                },
              },
            },
          ]
        : [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                sourceMap: true,
                modules: false,
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
            POST_CSS_LOADER,
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  outputStyle: 'expanded',
                  sourceMap: true,
                  includePaths: ['node_modules'],
                },
              },
            },
          ],
    };
    base_config.module.rules.push(SVG_LOADER);
    base_config.module.rules.push(SASSLOADER);
    return base_config;
  },
});
