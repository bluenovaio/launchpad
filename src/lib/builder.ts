import * as yargs from 'yargs';

export function createBuilder (builder: yargs.CommandBuilder) {
  return {
    ...builder,
    version: { hidden: true },
  };
}
