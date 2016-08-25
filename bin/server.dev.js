require('../babel.server');
const webpack = require('webpack');
const config = require('../webpack.config');
const open = require('open');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const chalk = require('chalk');

const compiler = webpack(config);

app.use(require('morgan')('short'));
app.use(express.static('public'));

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  noInfo: true,
  historyApiFallback: true,
}));

app.use(webpackHotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10,
}));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/api/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`\n${chalk.green(`the 🎉  is happening at http://localhost:${port}`)}\n`);
});
