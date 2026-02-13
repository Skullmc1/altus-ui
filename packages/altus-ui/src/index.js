const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addBase, addComponents, theme }) {
  addBase({
    /* Default Theme (Slate) */
    ':root': {
      '--alt-bg': '#f1f5f9',
      '--alt-fg': '#0f172a',
      '--alt-muted': '#e2e8f0',
      '--alt-border': '#cbd5e1',
      '--alt-primary': '#475569',
      '--alt-radius': '0.5rem',
      '--alt-ring': 'rgba(71,85,105,0.15)',
      '--alt-shadow': '0 4px 6px -1px rgba(0,0,0,0.05)',
    },
    '[data-theme="ivory"]': {
      '--alt-bg': '#fcfcf9',
      '--alt-fg': '#1a1a1a',
      '--alt-muted': '#f3f3ee',
      '--alt-border': '#e6e6e0',
      '--alt-primary': '#5c5c5c',
      '--alt-ring': 'rgba(0,0,0,0.1)',
      '--alt-shadow': '0 4px 12px rgba(0,0,0,0.05)',
    },
    '[data-theme="mocha"]': {
      '--alt-bg': '#1c1917',
      '--alt-fg': '#fafaf9',
      '--alt-muted': '#292524',
      '--alt-border': '#44403c',
      '--alt-primary': '#d6d3d1',
      '--alt-ring': 'rgba(214,211,209,0.1)',
      '--alt-shadow': '0 10px 25px -5px rgba(0,0,0,0.4)',
    },
    '[data-theme="navy"]': {
      '--alt-bg': '#0f172a',
      '--alt-fg': '#f8fafc',
      '--alt-muted': '#1e293b',
      '--alt-border': '#334155',
      '--alt-primary': '#38bdf8',
      '--alt-ring': 'rgba(56,189,248,0.2)',
      '--alt-shadow': '0 10px 25px -5px rgba(0,0,0,0.3)',
    },
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
      'padding': '0.75rem 1.5rem',
      'fontSize': '0.875rem',
      'fontWeight': '600',
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
      'padding': '0.75rem 1.5rem',
      'fontSize': '0.875rem',
      'fontWeight': '600',
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
    },
    '.altus-input': {
      'width': '100%',
      'padding': '0.75rem 1.25rem',
      'fontSize': '0.875rem',
      'backgroundColor': 'var(--alt-bg)',
      'color': 'var(--alt-fg)',
      'border': '1px solid var(--alt-border)',
      'borderRadius': 'var(--alt-radius)',
      'transition': 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      'outline': 'none',
      'boxShadow': 'inset 0 1px 2px rgba(0,0,0,0.02)',
      '&::placeholder': {
        'color': 'var(--alt-fg)',
        'opacity': '0.3',
      },
      '&:hover': {
        'borderColor': 'var(--alt-primary)',
        'backgroundColor': 'var(--alt-muted)',
      },
      '&:focus': {
        'borderColor': 'var(--alt-primary)',
        'backgroundColor': 'var(--alt-bg)',
        'boxShadow': '0 0 0 4px var(--alt-ring), inset 0 1px 2px rgba(0,0,0,0.02)',
      }
    },
    '.altus-checkbox': {
      'appearance': 'none',
      'width': '1.25rem',
      'height': '1.25rem',
      'border': '2px solid var(--alt-border)',
      'borderRadius': '0.375rem',
      'backgroundColor': 'var(--alt-bg)',
      'cursor': 'pointer',
      'position': 'relative',
      'transition': 'all 0.2s ease',
      '&:hover': {
        'borderColor': 'var(--alt-primary)',
      },
      '&:checked': {
        'backgroundColor': 'var(--alt-primary)',
        'borderColor': 'var(--alt-primary)',
      },
      '&:checked::after': {
        'content': '""',
        'position': 'absolute',
        'left': '50%',
        'top': '50%',
        'transform': 'translate(-50%, -50%)',
        'width': '6px',
        'height': '6px',
        'borderRadius': '50%',
        'backgroundColor': 'var(--alt-bg)',
      },
      '&:focus': {
        'boxShadow': '0 0 0 4px var(--alt-ring)',
      }
    },
    '.altus-switch': {
      'appearance': 'none',
      'width': '2.75rem',
      'height': '1.5rem',
      'backgroundColor': 'var(--alt-muted)',
      'borderRadius': '2rem',
      'position': 'relative',
      'cursor': 'pointer',
      'transition': 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      'border': '1px solid var(--alt-border)',
      '&::before': {
        'content': '""',
        'position': 'absolute',
        'width': '1.125rem',
        'height': '1.125rem',
        'backgroundColor': 'var(--alt-fg)',
        'borderRadius': '50%',
        'top': '2px',
        'left': '2px',
        'transition': 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        'boxShadow': '0 1px 3px rgba(0,0,0,0.1)',
      },
      '&:checked': {
        'backgroundColor': 'var(--alt-primary)',
        'borderColor': 'var(--alt-primary)',
      },
      '&:checked::before': {
        'left': 'calc(2.75rem - 1.25rem - 1px)',
        'backgroundColor': 'var(--alt-bg)',
        'transform': 'scale(1.1)',
      }
    },
    '.altus-label': {
      'display': 'block',
      'fontSize': '0.75rem',
      'fontWeight': '700',
      'textTransform': 'uppercase',
      'letterSpacing': '0.1em',
      'marginBottom': '0.5rem',
      'color': 'var(--alt-fg)',
      'opacity': '0.8',
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
