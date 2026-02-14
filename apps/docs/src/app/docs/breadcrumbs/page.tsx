"use client";

import { CodeBlock, DocHeader, Preview, DocFooter } from "@/components/docs-ui";

export default function BreadcrumbsPage() {
  return (
    <div className="space-y-10">
      <DocHeader 
        title="Breadcrumbs" 
        description="Professional navigation trails to keep users oriented within complex hierarchies." 
      />

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Example</h2>
        <Preview>
          <div className="space-y-8">
            <ul className="altus-breadcrumbs">
              <li className="altus-breadcrumb-item"><a href="#">Home</a></li>
              <li className="altus-breadcrumb-item"><a href="#">Components</a></li>
              <li className="altus-breadcrumb-item">Breadcrumbs</li>
            </ul>

            <ul className="altus-breadcrumbs opacity-80">
              <li className="altus-breadcrumb-item">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              </li>
              <li className="altus-breadcrumb-item"><a href="#">Resources</a></li>
              <li className="altus-breadcrumb-item"><a href="#">Design</a></li>
              <li className="altus-breadcrumb-item">Assets</li>
            </ul>
          </div>
        </Preview>
        <CodeBlock code={`<ul className="altus-breadcrumbs">
  <li className="altus-breadcrumb-item"><a href="#">Home</a></li>
  <li className="altus-breadcrumb-item"><a href="#">Components</a></li>
  <li className="altus-breadcrumb-item">Breadcrumbs</li>
</ul>`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Scaffold via CLI</h2>
        <p className="opacity-70 text-sm">Add professional navigation trails to your application.</p>
        <CodeBlock code={`bun x @altus-ui/cli add breadcrumbs`} />
      </section>

      <DocFooter 
        backHref="/docs/carousel" 
        backLabel="Carousel / Slider"
        nextHref="/docs/cards" 
        nextLabel="Cards & Layout" 
      />
    </div>
  );
}
