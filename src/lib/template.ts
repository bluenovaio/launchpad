import * as path from 'path';
import * as fs from 'fs';
import * as ejs from 'ejs';

const DIR_CURRENT = __dirname;

type TemplateFileName = 'launchpad.yaml'
  | 'deployment.yaml';

function readTemplateFile (fileName: TemplateFileName) {
  return fs.readFileSync(path.join(DIR_CURRENT, '..', 'templates', fileName)).toString();
}

export interface ConfigLaunchPad {

}

export function renderLaunchPad (input: ConfigLaunchPad) {
  const template = readTemplateFile('launchpad.yaml');
  console.log(template);
  return ejs.render(template, input);
}

export interface ConfigDeployment {

}

export function renderDeployment (input: ConfigDeployment) {
  const template = readTemplateFile('deployment.yaml');
  return ejs.render(template.toString(), input);
}
