"use client";

import { CodeBlock, DocHeader, Preview, DocFooter } from "@/components/docs-ui";

export default function ThemingPage() {
  return (
    <div className="space-y-10">
      <DocHeader 
        title="Theming" 
        description="Altus UI comes with 5 professional, pre-calibrated themes designed for high-end interfaces." 
      />

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Available Themes</h2>
        <p className="opacity-70 text-sm">Themes are applied via data attributes on the <code className="bg-altus-muted px-1 rounded">html</code> tag.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { name: "Slate", bg: "#f1f5f9", fg: "#0f172a" },
            { name: "Navy", bg: "#0f172a", fg: "#f8fafc" },
            { name: "Obsidian", bg: "#000000", fg: "#ffffff" },
            { name: "Ivory", bg: "#fcfcf9", fg: "#1a1a1a" },
            { name: "Mocha", bg: "#1c1917", fg: "#fafaf9" },
          ].map((theme) => (
            <div key={theme.name} className="border border-altus-border rounded-altus p-4 flex flex-col gap-2">
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full border border-black/10" style={{ backgroundColor: theme.bg }}></div>
                <div className="w-8 h-8 rounded-full border border-white/10" style={{ backgroundColor: theme.fg }}></div>
              </div>
              <span className="font-bold text-sm">{theme.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Implementation</h2>
        <p className="opacity-70 text-sm">Simply toggle the attribute to switch perspectives instantly.</p>
        <CodeBlock code={`// Default (Slate)
<html>

// Dark / Professional
<html data-theme="navy">

// High Contrast
<html data-theme="obsidian">`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">CSS Variables</h2>
        <p className="opacity-70 text-sm">Build your own components using our semantic tokens.</p>
        <CodeBlock code={`.my-component {
  background-color: var(--alt-bg);
  color: var(--alt-fg);
  border: 1px solid var(--alt-border);
  border-radius: var(--alt-radius);
}`} language="css" />
      </section>
      <DocFooter 
        backHref="/docs/installation" 
        backLabel="Installation"
        nextHref="/docs/buttons" 
        nextLabel="Buttons" 
      />
    </div>
  );
}
