# Altus UI Roadmap 🦋

This roadmap outlines the path towards the first stable release of Altus UI.

## 🟦 Phase 1: Core Component Completion (Current Focus)
Finalizing the essential component suite as defined in the `components.md`.

- [ ] **Sticky Navbar:** A slick, glass-morphism enabled navigation bar.
- [ ] **Input Groups:** Labels, hints, and validation states for form elements.
- [ ] **Progress Indicators:** Minimalist linear and circular progress bars.
- [ ] **Aspect Ratio:** Utilities for maintaining consistent image/video dimensions.
- [ ] **Carousel / Slider:** A high-performance kinetic slider for project showcases.
- [ ] **Breadcrumbs:** Professional navigation trails.

## 🟩 Phase 2: CLI Development
Moving the CLI from placeholder to functional.

- [ ] **`altus init`:**
  - Detect framework (Next.js, Vite, etc.).
  - Automatically install dependencies.
  - Configure `tailwind.config.js` and CSS variables.
- [ ] **`altus add <component>`:**
  - Scaffold components directly into the user's project.
  - Handle both CSS-only and React-based versions.

## 🟨 Phase 3: Documentation & DX
Improving the developer experience and showcase.

- [ ] **Theme Customizer:** A real-time previewer in the docs to swap between Slate, Navy, Obsidian, Ivory, and Mocha.
- [ ] **Component Playgrounds:** Interactive editable code snippets using `react-live` or similar.
- [ ] **Motion Guide:** Detailed documentation on using Framer Motion with Altus tokens for "Kinetic Motion".
- [ ] **Template Gallery:** Basic landing page templates built with Altus UI.

## 🟧 Phase 4: Refinement & Stability
Preparing for the Alpha/Beta release.

- [ ] **Accessibility (a11y) Audit:** Ensure all components meet WCAG standards (Aria-labels, keyboard nav).
- [ ] **Performance Profiling:** Optimize Tailwind layer sizes and Framer Motion animation overhead.
- [ ] **TypeScript Support:** Robust type definitions for all core exports.
- [ ] **Package Publishing:** Automate NPM publishing via Changesets.

## 🟥 Future Vision
- [ ] **Altus Pro:** Advanced pre-built layouts for SaaS and Portfolios.
- [ ] **Icon Set:** A custom-curated icon library matching the Altus aesthetic.
- [ ] **Figma UI Kit:** A professional Figma file for designers.

---
*Last Updated: February 14, 2026*
