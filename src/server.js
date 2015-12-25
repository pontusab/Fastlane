import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from '../webpack.config';

const { PORT } = process.env;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true,
  },
}).listen(PORT, 'localhost', (err) => {
  if (err) console.log(err);
  console.log(`Server started on port ${PORT}`);
});
