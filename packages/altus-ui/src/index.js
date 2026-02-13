const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addBase, theme }) {
  addBase({
    ':root': {
      '--alt-bg': '#ffffff',
      '--alt-fg': '#111111',
      '--alt-muted': '#f5f5f5',
      '--alt-border': '#e5e5e5',
      '--alt-primary': '#000000',
    },
    '[data-theme="obsidian"]': {
      '--alt-bg': '#0a0a0a',
      '--alt-fg': '#ffffff',
      '--alt-muted': '#1a1a1a',
      '--alt-border': '#262626',
      '--alt-primary': '#ffffff',
    },
    'body': {
      'backgroundColor': 'var(--alt-bg)',
      'color': 'var(--alt-fg)',
      'fontFamily': theme('fontFamily.sans'),
    }
  });
}, {
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
      }
    }
  }
});
