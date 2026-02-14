"use client";

import { CodeBlock, DocHeader, Preview, DocFooter } from "@/components/docs-ui";

export default function ProgressPage() {
  return (
    <div className="space-y-10">
      <DocHeader 
        title="Progress Indicators" 
        description="Minimalist linear and circular progress bars to communicate status." 
      />

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Linear Progress</h2>
        <Preview>
          <div className="w-full max-w-md space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider opacity-50">
                <span>System Loading</span>
                <span>65%</span>
              </div>
              <div className="altus-progress">
                <div className="altus-progress-bar" style={{ width: '65%' }} />
              </div>
            </div>
            
            <div className="altus-progress h-1">
              <div className="altus-progress-bar" style={{ width: '30%' }} />
            </div>
          </div>
        </Preview>
        <CodeBlock code={`<div className="altus-progress">
  <div className="altus-progress-bar" style={{ width: '65%' }} />
</div>`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Circular Progress</h2>
        <Preview>
          <div className="flex gap-8 items-center">
            <div className="altus-progress-circle" style={{ '--progress': '120deg' } as any}>
              <span className="text-[10px] font-black">33%</span>
            </div>
            <div className="altus-progress-circle" style={{ '--progress': '270deg' } as any}>
              <span className="text-[10px] font-black">75%</span>
            </div>
            <div className="altus-progress-circle !w-20 !h-20" style={{ '--progress': '360deg' } as any}>
              <svg className="w-6 h-6 text-altus-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>
        </Preview>
        <CodeBlock code={`<div className="altus-progress-circle" style={{ '--progress': '120deg' }}>
  <span className="text-[10px] font-black">33%</span>
</div>`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Scaffold via CLI</h2>
        <p className="opacity-70 text-sm">Add linear and circular progress indicators to your project.</p>
        <CodeBlock code={`bun x @altus-ui/cli add progress`} />
      </section>

      <DocFooter 
        backHref="/docs/navbar" 
        backLabel="Sticky Navbar"
        nextHref="/docs/carousel" 
        nextLabel="Carousel / Slider" 
      />
    </div>
  );
}
