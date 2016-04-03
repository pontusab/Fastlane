import path from 'path';
import express from 'express';
import webpack from 'webpack';
import settings from '../webpack.config';
import config from '../config';

const server = express();
const compiler = webpack(settings);

const { PORT } = config;

server.use(require('webpack-dev-middleware')(compiler, {
  publicPath: settings.output.publicPath,
  stats: {
    colors: true,
  },
}));

server.use(require('webpack-hot-middleware')(compiler));
server.use('/static', express.static('public'));
server.use('/assets', express.static('assets'));

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

server.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
