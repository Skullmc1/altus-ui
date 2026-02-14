"use client";

import { CodeBlock, DocHeader, Preview, DocFooter } from "@/components/docs-ui";

export default function CarouselPage() {
  return (
    <div className="space-y-10">
      <DocHeader 
        title="Carousel / Slider" 
        description="A high-performance kinetic slider for showcases and galleries." 
      />

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Kinetic Slider</h2>
        <p className="opacity-70 text-sm">A native-feeling horizontal scroller with scroll-snapping and sleek interactions.</p>
        <Preview className="!p-0 !items-start">
          <div className="altus-slider px-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="altus-slider-item">
                <div className="aspect-video bg-altus-muted rounded-altus flex items-center justify-center border border-altus-border overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-altus-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-4xl font-black opacity-10">0{i}</span>
                </div>
                <div className="mt-4">
                  <h3 className="font-bold">Project Alpha {i}</h3>
                  <p className="text-xs opacity-50 uppercase tracking-widest font-semibold mt-1">Industrial Design / 2026</p>
                </div>
              </div>
            ))}
          </div>
        </Preview>
        <CodeBlock code={`<div className="altus-slider">
  <div className="altus-slider-item">
    <div className="aspect-video bg-altus-muted rounded-altus">...</div>
    <h3>Project Name</h3>
  </div>
  {/* More items */}
</div>`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Scaffold via CLI</h2>
        <p className="opacity-70 text-sm">Add the kinetic project slider to your application.</p>
        <CodeBlock code={`bun x @altus-ui/cli add carousel`} />
      </section>

      <DocFooter 
        backHref="/docs/progress" 
        backLabel="Progress Indicators"
        nextHref="/docs/breadcrumbs" 
        nextLabel="Breadcrumbs" 
      />
    </div>
  );
}
