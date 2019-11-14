/**
 * Replace with custom razzle config when needed.
 * @module razzle.config
 */

const jsConfig = require('./jsconfig').compilerOptions;
const path = require('path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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

    const BASE_CSS_LOADER = {
      loader: 'css-loader',
      options: {
        importLoaders: 2,
        sourceMap: true,
        localIdentName: '[name]__[local]___[hash:base64:5]',
      },
    };

    const SVG_LOADER = {
      test: /\.svg$/,
      loader: 'svg-inline',
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
            browsers: [
              '>1%',
              'last 4 versions',
              'Firefox ESR',
              'not ie < 9', // React doesn't support IE8 anyway
            ],
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
    //base_config.module.rules.push(SVG_LOADER);
    base_config.module.rules.push(SASSLOADER);
    return base_config;
  },
});
