import webpack from 'webpack';
import webpackConfig from '../webpack/prod';
import ora from 'ora';

const spinner = ora({
  text: 'Building...',
  spinner: 'circleQuarters',
  color: 'green'
});

spinner.start();

let done = function(error, stats) {
  if (error) {
    throw error;
  }

  process.stdout.write('\n\n' + stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n');

  spinner.stop();
}
webpack(webpackConfig, done);
