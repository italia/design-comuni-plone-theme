/**
 * Replace with custom razzle config when needed.
 * @module razzle.config
 */

const jsConfig = require('./jsconfig').compilerOptions;
const path = require('path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { map } = require('lodash');
const glob = require('glob').sync;
const fs = require('fs');
const makeLoaderFinder = require('razzle-dev-utils/makeLoaderFinder');
const fileLoaderFinder = makeLoaderFinder('file-loader');
const projectRootPath = path.resolve('.');
const packageJson = require(path.join(projectRootPath, 'package.json'));
const pathsConfig = jsConfig.paths;
let voltoPath = path.resolve('./node_modules/@plone/volto');
Object.keys(pathsConfig).forEach(pkg => {
  if (pkg === '@plone/volto') {
    voltoPath = path.resolve(`./${jsConfig.baseUrl}/${pathsConfig[pkg][0]}`);
  }
});

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

    const jsconfigPaths = {};
    if (fs.existsSync(`${projectRootPath}/jsconfig.json`)) {
      const jsConfig = require(`${projectRootPath}/jsconfig`).compilerOptions;
      const pathsConfig = jsConfig.paths;
      Object.keys(pathsConfig).forEach(packageName => {
        const packagePath = `${projectRootPath}/${jsConfig.baseUrl}/${pathsConfig[packageName][0]}`;
        jsconfigPaths[packageName] = packagePath;
        if (packageName === '@plone/volto') {
          voltoPath = packagePath;
        }
      });
    }

    const customizations = {};
    let { customizationPaths } = packageJson;
    if (!customizationPaths) {
      customizationPaths = ['src/customizations/'];
    }
    customizationPaths.forEach(customizationPath => {
      map(
        glob(
          `${customizationPath}**/*.*(svg|png|jpg|jpeg|gif|ico|less|js|jsx)`,
        ),
        filename => {
          const targetPath = filename.replace(
            customizationPath,
            `${voltoPath}/src/`,
          );
          if (fs.existsSync(targetPath)) {
            customizations[
              filename
                .replace(customizationPath, '@plone/volto/')
                .replace(/\.(js|jsx)$/, '')
            ] = path.resolve(filename);
          } else {
            console.log(
              `The file ${filename} doesn't exist in the volto package (${targetPath}), unable to customize.`,
            );
          }
        },
      );
    });

    config.resolve.alias = {
      ...customizations,
      ...config.resolve.alias,
      ...base_config.resolve.alias,
      '../../theme.config$': `${projectRootPath}/theme/theme.config`,
      ...jsconfigPaths,
      '@plone/volto': `${voltoPath}/src`,
      // to be able to reference path uncustomized by webpack
      '@plone/volto-original': `${voltoPath}/src`,
      // be able to reference current package from customized package
      '@design': `${projectRootPath}/src`,
    };

    return base_config;
  },
});
