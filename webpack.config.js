const webpack = require('webpack')

const commitDate = require('child_process')
  .execSync('git log -1 --format=%cs HEAD')
  .toString().replace(/-/g, '').trim()

const commitHash = require('child_process')
  .execSync('git log -1 --format=%h HEAD')
  .toString().trim()

module.exports = (env, argv) => {
  return {
    mode: argv.mode,

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [".js", ".ts", ".tsx"]
    },

    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "ts-loader"
            }
          ]
        },
        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        {
          enforce: "pre",
          test: /\.js$/,
          loader: "source-map-loader"
        }
      ]
    },

    plugins: [
      new webpack.DefinePlugin({
        __DEV__: argv.mode === 'development',
        __COMMITDATE__: JSON.stringify(commitDate),
        __COMMITHASH__: JSON.stringify(commitHash),
      }),
    ],

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
    }
  }
}
