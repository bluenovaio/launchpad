import * as path from 'path';
import * as fs from 'fs';

import { renderLaunchPad } from '../lib/template';
import { createBuilder } from '../lib/builder';

export const command = 'init [name]';

export const describe =
  'Create a new launchpad.yaml file.';

export const builder = createBuilder({
  'name': {
    alias: ['n'],
    required: true,
    describe: 'The name of the application.',
  },
});

interface Args {
  name: string;
}

export async function handler (argv: Args) {
  const { name } = argv;

  const file = renderLaunchPad({
    name,
  });

  fs.writeFileSync(path.join('.', 'launchpad.yaml'), file);
}
