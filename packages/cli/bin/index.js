#!/usr/bin/env node
import { cac } from 'cac';
import pc from 'picocolors';

const cli = cac('altus');

cli
  .command('init', 'Initialize Altus UI in your project')
  .action(() => {
    console.log(pc.cyan('
▲ Altus UI') + pc.dim(' - Initializing...'));
    console.log(pc.yellow('Soon this will set up your tailwind.config.js and globals.css!
'));
  });

cli
  .command('add [component]', 'Add a component to your project')
  .action((component) => {
    if (!component) {
      console.log(pc.red('Please specify a component to add, e.g., altus add button'));
      return;
    }
    console.log(pc.cyan('
▲ Altus UI') + pc.dim(` - Adding ${component}...`));
    console.log(pc.yellow(`Soon this will download the ${component} code to your components folder!
`));
  });

cli.help();
cli.version('0.0.1');

cli.parse();
