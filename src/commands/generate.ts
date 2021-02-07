export const command = 'generate';

export const describe =
  'Generate a new LaunchPad Github Actions Workflow.';

export const builder = {
  overwrite: {
    alias: ['o'],
    describe: 'Overwrite the existing workflows.'
  }
};

export async function handler(argv: any) {
  console.log('WIP');
}
