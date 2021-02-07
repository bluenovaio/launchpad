import * as path from 'path';
import * as cli from 'yargs';

(async () => {
  cli
    .scriptName('launchpad')
    .commandDir(path.join(__dirname, 'commands'), {
      extensions: ['ts', 'js'],
      exclude: /\.d\.ts$/,
    })
    .command({
      command: '*',
      handler () {
        console.log('Please use --help if you don\'t know which command to use...')
      },
    })
    .option('debug', {
      alias: 'd',
      describe: 'Verbose logging for debugging',
    })
    .fail((msg, err, yargs) => {
      console.log('\n');
      console.log(`ERROR: ${msg}`);
      console.log('\n');
      process.exit(1);
    })
    .help()
    .showHelpOnFail(false).argv;
})();
