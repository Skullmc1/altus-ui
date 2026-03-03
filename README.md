# Altus UI 🦋

**Altus UI** is a high-precision, multi-themed design system and component library meticulously crafted for creative portfolios and performance-critical interfaces. It combines a "slick & professional" aesthetic with high-performance kinetic motion powered by Framer Motion.

## 🚀 Key Features

- **5 Professional Themes:** Choose between Slate, Navy, Obsidian, Ivory, and Mocha.
- **Kinetic Motion:** High-fidelity spring animations built-in.
- **Monorepo Architecture:** Clean separation between the core library, CLI, and documentation.
- **Modern Tech Stack:** Built with Tailwind CSS v4, Next.js, and Bun.
- **Smart Components:** Advanced logic for complex UI like auto-stacking toast notifications and perspective modals.

## 📦 Project Structure

- `apps/docs`: The official documentation and component showcase.
- `packages/altus-ui`: The core Tailwind CSS plugin containing all component tokens and styles.
- `packages/cli`: Command-line tool for scaffolding and initializing Altus projects.

## 🛠️ Installation

```bash
bun add @altus-ui/core
bun add -d @altus-ui/cli
```

Add the plugin to your Tailwind configuration:

```css
@import "tailwindcss";
@plugin "@altus-ui/core";
```

## 📖 Development Roadmap

We are actively developing new components and refining existing ones. You can track our progress here:

- [Component Roadmap](components.md) - Status of all foundations, actions, and complex components.
- [Known Issues & Fixes](problems.md) - Tracking bugs, UI improvements, and responsiveness tasks.

## 🤝 Contributing

This project is currently in Alpha. If you encounter any issues or have suggestions for new components, please refer to the documents above before submitting a PR.

---

Built with precision for the modern web.
