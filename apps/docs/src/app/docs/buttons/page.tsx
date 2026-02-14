"use client";

import { CodeBlock, DocHeader, Preview, DocFooter } from "@/components/docs-ui";

export default function ButtonsPage() {
  return (
    <div className="space-y-10">
      <DocHeader 
        title="Buttons" 
        description="Interactive elements with micro-interactions and professional states." 
      />

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Variants</h2>
        <Preview>
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <button className="btn-altus">Primary Action</button>
            <button className="btn-altus-outline">Secondary</button>
            <button className="btn-altus-ghost">Ghost</button>
          </div>
        </Preview>
        <CodeBlock code={`<button className="btn-altus">Primary Action</button>
<button className="btn-altus-outline">Secondary</button>
<button className="btn-altus-ghost">Ghost</button>`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Icon Buttons</h2>
        <Preview>
          <button className="btn-altus-icon">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
          </button>
        </Preview>
        <CodeBlock code={`<button className="btn-altus-icon">
  <Icon />
</button>`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">FAB (Floating Action Button)</h2>
        <p className="opacity-70 text-sm">High-visibility buttons for primary application actions.</p>
        <Preview>
          <button className="btn-altus-fab">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          </button>
        </Preview>
        <CodeBlock code={`<button className="btn-altus-fab">
  <Icon />
</button>`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Scaffold via CLI</h2>
        <p className="opacity-70 text-sm">Rapidly add the button component to your project using the Altus CLI.</p>
        <CodeBlock code={`bun x @altus-ui/cli add button`} />
      </section>

      <DocFooter 
        backHref="/docs/theming" 
        backLabel="Theming"
        nextHref="/docs/inputs" 
        nextLabel="Inputs & Forms" 
      />
    </div>
  );
}
