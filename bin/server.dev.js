const api = require('../api');
const chalk = require('chalk');
const config = require('../webpack.config');
const open = require('open');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const root = process.cwd() + '/static/';
global.__DEVELOPMENT__ = true;

const compiler = webpack(config);

app.use(require('morgan')('short'));

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  inline: true,
  contentBase: root,
  lazy: false,
  publicPath: '/',
  noInfo: true,
  historyApiFallback: true,
}));

app.use(webpackHotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10,
}));

app.use('/api/', api);
app.use(express.static(root));
// app.use(fallback('index.html', { root: root }))

app.listen(port, () => {
  console.log(chalk.yellow('Starting the 🎉\nAvailable on:'));
  console.log(`    ${chalk.green(`http://localhost:${port}`)}\n\n`);
});
