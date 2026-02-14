#!/usr/bin/env node
import { cac } from 'cac';
import pc from 'picocolors';
import prompts from 'prompts';
import { execa } from 'execa';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cli = cac('altus');

async function detectFramework() {
  const pkgPath = path.join(process.cwd(), 'package.json');
  if (!await fs.pathExists(pkgPath)) return 'unknown';
  
  const pkg = await fs.readJson(pkgPath);
  const deps = { ...pkg.dependencies, ...pkg.devDependencies };
  
  if (deps.next) return 'next';
  if (deps.vite) return 'vite';
  return 'unknown';
}

cli
  .command('init', 'Initialize Altus UI in your project')
  .action(async () => {
    console.log(pc.cyan('\n▲ Altus UI') + pc.dim(' - Initialization\n'));

    const framework = await detectFramework();
    
    const response = await prompts([
      {
        type: 'select',
        name: 'framework',
        message: 'Detecting framework...',
        choices: [
          { title: 'Next.js', value: 'next' },
          { title: 'Vite', value: 'vite' },
          { title: 'Other', value: 'other' }
        ],
        initial: framework === 'next' ? 0 : framework === 'vite' ? 1 : 2
      },
      {
        type: 'text',
        name: 'stylesPath',
        message: 'Where is your global CSS file?',
        initial: (prev) => prev === 'next' ? 'src/app/globals.css' : 'src/index.css'
      }
    ]);

    if (!response.framework) return;

    try {
      console.log(pc.yellow('\nInstalling core dependencies...'));
      // In production this would be: await execa('bun', ['add', '@altus-ui/core']);
      // For the prototype we assume it's available or manually installed
      
      console.log(pc.yellow('Configuring Tailwind...'));
      const tailwindConfig = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        altus: {
          bg: 'var(--alt-bg)',
          fg: 'var(--alt-fg)',
          muted: 'var(--alt-muted)',
          border: 'var(--alt-border)',
          primary: 'var(--alt-primary)',
        }
      },
      borderRadius: {
        altus: 'var(--alt-radius)',
      }
    },
  },
  plugins: [
    require('@altus-ui/core')
  ],
}`;

      await fs.writeFile(path.join(process.cwd(), 'tailwind.config.js'), tailwindConfig);

      console.log(pc.green('\n✔ Altus UI initialized successfully!'));
      console.log(pc.dim('Run ') + pc.cyan('altus add button') + pc.dim(' to start adding components.\n'));

    } catch (error) {
      console.error(pc.red('\n✖ Error during initialization:'), error.message);
    }
  });

cli
  .command('add [component]', 'Add a component to your project')
  .action(async (component) => {
    if (!component) {
      console.log(pc.red('Please specify a component to add, e.g., altus add button'));
      return;
    }

    const availableComponents = ['button', 'input', 'navbar', 'progress', 'carousel', 'breadcrumbs', 'card', 'modal', 'toast', 'accordion'];
    if (!availableComponents.includes(component.toLowerCase())) {
      console.log(pc.red(`Component "${component}" not found.`));
      console.log(pc.dim(`Available components: ${availableComponents.join(', ')}`));
      return;
    }

    console.log(pc.cyan('\n▲ Altus UI') + pc.dim(` - Adding ${component}...\n`));

    const response = await prompts([
      {
        type: 'select',
        name: 'variant',
        message: 'Which variant do you want?',
        choices: [
          { title: 'React (Framer Motion)', value: 'react' },
          { title: 'Pure CSS (Tailwind)', value: 'css' }
        ]
      },
      {
        type: 'text',
        name: 'targetDir',
        message: 'Where should we save it?',
        initial: (prev) => prev === 'react' ? 'src/components/ui' : 'src/styles/altus'
      }
    ]);

    if (!response.variant) return;

    try {
      const templateDir = path.join(__dirname, '..', 'templates', component.toLowerCase());
      const targetDir = path.join(process.cwd(), response.targetDir);
      await fs.ensureDir(targetDir);

      if (response.variant === 'react') {
        console.log(pc.yellow('Installing framer-motion...'));
        await execa('bun', ['add', 'framer-motion']);
        
        const fileName = `${component.toLowerCase()}.tsx`;
        await fs.copy(path.join(templateDir, fileName), path.join(targetDir, fileName));
        console.log(pc.green(`\n✔ Added React component to ${path.join(response.targetDir, fileName)}`));
      } else {
        const fileName = `${component.toLowerCase()}.css`;
        await fs.copy(path.join(templateDir, fileName), path.join(targetDir, fileName));
        console.log(pc.green(`\n✔ Added CSS styles to ${path.join(response.targetDir, fileName)}`));
      }

      console.log(pc.dim('\nDone! You can now use the component in your project.\n'));

    } catch (error) {
      console.error(pc.red('\n✖ Error adding component:'), error.message);
    }
  });

cli.help();
cli.version('0.0.1');

cli.parse();
