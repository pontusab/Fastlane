import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import wConfig from '../webpack.config';
import config from './config';

const { PORT } = config;

new WebpackDevServer(webpack(wConfig), {
  publicPath: wConfig.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(PORT, 'localhost', (err) => {
  if (err) console.log(err);
  console.log(`server started on port ${PORT}`);
});
