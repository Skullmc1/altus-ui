const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addBase, addComponents, theme }) {
  addBase({
    /* Default Theme (Slate) */
    ':root': {
      '--alt-bg': '#f1f5f9', /* Slate 100 */
      '--alt-fg': '#0f172a', /* Slate 900 */
      '--alt-muted': '#e2e8f0', /* Slate 200 */
      '--alt-border': '#cbd5e1', /* Slate 300 */
      '--alt-primary': '#475569', /* Slate 600 */
      '--alt-radius': '0.5rem',
      '--alt-ring': 'rgba(71,85,105,0.1)',
      '--alt-shadow': '0 4px 6px -1px rgba(0,0,0,0.05)',
    },
    /* Ivory Theme */
    '[data-theme="ivory"]': {
      '--alt-bg': '#fcfcf9',
      '--alt-fg': '#1a1a1a',
      '--alt-muted': '#f3f3ee',
      '--alt-border': '#e6e6e0',
      '--alt-primary': '#5c5c5c',
      '--alt-ring': 'rgba(0,0,0,0.1)',
      '--alt-shadow': '0 4px 12px rgba(0,0,0,0.05)',
    },
    /* Mocha Theme (Warm/Professional Coffee Tones) */
    '[data-theme="mocha"]': {
      '--alt-bg': '#1c1917', /* Stone 900 */
      '--alt-fg': '#fafaf9', /* Stone 50 */
      '--alt-muted': '#292524', /* Stone 800 */
      '--alt-border': '#44403c', /* Stone 700 */
      '--alt-primary': '#d6d3d1', /* Stone 300 */
      '--alt-ring': 'rgba(214,211,209,0.1)',
      '--alt-shadow': '0 10px 25px -5px rgba(0,0,0,0.4)',
    },
    /* Navy Theme */
    '[data-theme="navy"]': {
      '--alt-bg': '#0f172a',
      '--alt-fg': '#f8fafc',
      '--alt-muted': '#1e293b',
      '--alt-border': '#334155',
      '--alt-primary': '#38bdf8',
      '--alt-ring': 'rgba(56,189,248,0.2)',
      '--alt-shadow': '0 10px 25px -5px rgba(0,0,0,0.3)',
    },
    /* Obsidian Theme */
    '[data-theme="obsidian"]': {
      '--alt-bg': '#000000',
      '--alt-fg': '#ffffff',
      '--alt-muted': '#111111',
      '--alt-border': '#222222',
      '--alt-primary': '#ffffff',
      '--alt-ring': 'rgba(255,255,255,0.1)',
      '--alt-shadow': '0 8px 30px rgba(0,0,0,0.5)',
    },
    'body': {
      'backgroundColor': 'var(--alt-bg)',
      'color': 'var(--alt-fg)',
      'fontFamily': 'Inter, system-ui, -apple-system, sans-serif',
      'transition': 'background-color 0.3s ease, color 0.3s ease',
    }
  });

  addComponents({
    '.btn-altus': {
      'display': 'inline-flex',
      'alignItems': 'center',
      'justifyContent': 'center',
      'padding': '0.625rem 1.25rem',
      'fontSize': '0.875rem',
      'fontWeight': '500',
      'borderRadius': 'var(--alt-radius)',
      'backgroundColor': 'var(--alt-fg)',
      'color': 'var(--alt-bg)',
      'boxShadow': 'var(--alt-shadow)',
      'transition': 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      'cursor': 'pointer',
      'border': '1px solid transparent',
      '&:hover': {
        'opacity': '0.9',
        'transform': 'translateY(-1px)',
        'boxShadow': '0 10px 15px -3px var(--alt-ring)',
      },
      '&:active': {
        'transform': 'translateY(0)',
      }
    },
    '.btn-altus-outline': {
      'display': 'inline-flex',
      'alignItems': 'center',
      'justifyContent': 'center',
      'padding': '0.625rem 1.25rem',
      'fontSize': '0.875rem',
      'fontWeight': '500',
      'borderRadius': 'var(--alt-radius)',
      'backgroundColor': 'transparent',
      'color': 'var(--alt-fg)',
      'border': '1px solid var(--alt-border)',
      'transition': 'all 0.2s ease',
      '&:hover': {
        'backgroundColor': 'var(--alt-muted)',
        'borderColor': 'var(--alt-primary)',
      }
    },
    '.altus-card': {
      'backgroundColor': 'var(--alt-bg)',
      'border': '1px solid var(--alt-border)',
      'borderRadius': 'var(--alt-radius)',
      'boxShadow': 'var(--alt-shadow)',
      'padding': '1.5rem',
      'transition': 'transform 0.2s ease, box-shadow 0.2s ease',
      '&:hover': {
        'boxShadow': '0 20px 25px -5px var(--alt-ring)',
      }
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
      },
      borderRadius: {
        altus: 'var(--alt-radius)',
      }
    }
  }
});
