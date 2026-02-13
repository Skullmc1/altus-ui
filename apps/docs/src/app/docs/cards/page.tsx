"use client";

import { CodeBlock, DocHeader, Preview, DocFooter } from "@/components/docs-ui";

export default function CardsPage() {
  return (
    <div className="space-y-10">
      <DocHeader 
        title="Cards & Layout" 
        description="Structural containers for organizing content with professional elevation." 
      />

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Basic Card</h2>
        <Preview>
          <div className="altus-card w-full max-w-sm">
            <h3 className="font-bold text-lg mb-2">Project Alpha</h3>
            <p className="text-sm opacity-60 mb-4">A high-performance interface kit for modern web applications.</p>
            <button className="btn-altus-outline text-xs py-2 px-3 w-full">View Details</button>
          </div>
        </Preview>
        <CodeBlock code={`<div className="altus-card">
  <h3>Title</h3>
  <p>Content...</p>
</div>`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Dividers</h2>
        <Preview>
          <div className="w-full max-w-sm space-y-4">
            <p className="text-sm">Section One</p>
            <div className="altus-divider" />
            <p className="text-sm">Section Two</p>
          </div>
        </Preview>
        <CodeBlock code={`<div className="altus-divider" />`} />
      </section>
      <DocFooter 
        backHref="/docs/inputs" 
        backLabel="Inputs & Forms"
        nextHref="/docs/modals" 
        nextLabel="Modals" 
      />
    </div>
  );
}
