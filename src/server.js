import path from 'path';
import express from 'express';
import webpack from 'webpack';
import config from '../webpack.config';

const server = express();
const compiler = webpack(config);

const { PORT } = process.env;

server.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
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
