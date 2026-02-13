"use client";

import { CodeBlock, DocHeader, DocFooter } from "@/components/docs-ui";

export default function InstallationPage() {
  return (
    <div className="space-y-10">
      <DocHeader 
        title="Installation" 
        description="Start building slick, professional interfaces with Altus UI." 
      />

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">1. Install Packages</h2>
        <p className="opacity-70 text-sm">Altus UI is split into a core Tailwind plugin and a CLI for rapid scaffolding.</p>
        <CodeBlock code={`bun add @altus-ui/core
bun add -d @altus-ui/cli`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">2. Configure Tailwind</h2>
        <p className="opacity-70 text-sm">Add the plugin to your <code className="bg-altus-muted px-1.5 py-0.5 rounded">tailwind.config.js</code> or CSS file.</p>
        <CodeBlock code={`@import "tailwindcss";
@plugin "@altus-ui/core";`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">3. Initialize via CLI</h2>
        <p className="opacity-70 text-sm">Coming soon: Use the CLI to scaffold themes and component structures.</p>
        <CodeBlock code="bun x altus init" />
      </section>

      <DocFooter 
        nextHref="/docs/theming" 
        nextLabel="Theming" 
      />
    </div>
  );
}
