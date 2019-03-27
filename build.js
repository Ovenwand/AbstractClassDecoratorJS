import Ora from 'ora';
import webpack from 'webpack';
import webpackConfig from './webpack.config';

const spinner = new Ora({
  text: 'Generating build...',
  color: 'green',
});

const entries = [
  webpackConfig({
    filename: 'abstract-class-decorator.min.js',
    minify: true,
    analyze: true,
  }),
  webpackConfig({
    filename: 'abstract-class-decorator.js',
  }),
];

spinner.start();

webpack(entries, (error, stats) => {
  if (error || stats.hasErrors()) {
    if (error) {
      spinner.fail(error.details);
    } else {
      for (const e of stats.toJson().errors) {
        spinner.fail(e);
      }
    }

    spinner.fail('Errored! Shit happens... :(\n');
  }

  process.stdout.write('\n\n' + stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false,
  }) + '\n\n');

  spinner.succeed('AbstractClassDecoratorJS built with success! \\o/');
});
