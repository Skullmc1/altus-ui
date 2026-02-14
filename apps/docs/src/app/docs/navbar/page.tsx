"use client";

import { CodeBlock, DocHeader, Preview, DocFooter } from "@/components/docs-ui";

export default function NavbarPage() {
  return (
    <div className="space-y-10">
      <DocHeader 
        title="Sticky Navbar" 
        description="A slick, glass-morphism enabled navigation bar that stays pinned to the top." 
      />

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Example</h2>
        <p className="opacity-70 text-sm">The navbar uses backdrop-blur and semi-transparent background for a modern glass effect.</p>
        <div className="border border-altus-border rounded-altus overflow-hidden h-[300px] relative bg-altus-muted/5 pattern-grid">
          <nav className="altus-navbar">
            <div className="altus-navbar-container">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-altus-fg rounded-altus flex items-center justify-center">
                  <span className="text-altus-bg font-black text-xs">A</span>
                </div>
                <span className="font-bold tracking-tighter">ALTUS UI</span>
              </div>
              <div className="hidden sm:flex items-center gap-6">
                <a href="#" className="text-sm font-medium opacity-60 hover:opacity-100 transition-opacity">Showcase</a>
                <a href="#" className="text-sm font-medium opacity-60 hover:opacity-100 transition-opacity">Components</a>
                <a href="#" className="text-sm font-medium opacity-60 hover:opacity-100 transition-opacity">Pro</a>
                <button className="btn-altus !py-2 !px-4 text-xs">Get Started</button>
              </div>
            </div>
          </nav>
          <div className="p-8 space-y-4">
            <div className="h-4 w-1/2 bg-altus-muted rounded-altus" />
            <div className="h-4 w-3/4 bg-altus-muted rounded-altus" />
            <div className="h-4 w-2/3 bg-altus-muted rounded-altus" />
            <div className="h-4 w-full bg-altus-muted rounded-altus" />
            <div className="h-4 w-1/2 bg-altus-muted rounded-altus" />
            <div className="h-4 w-3/4 bg-altus-muted rounded-altus" />
          </div>
        </div>
        <CodeBlock code={`<nav className="altus-navbar">
  <div className="altus-navbar-container">
    <div className="flex items-center gap-2">
      <Logo />
      <span className="font-bold tracking-tighter">ALTUS UI</span>
    </div>
    <div className="flex items-center gap-6">
      <a href="#" className="...">Link</a>
      <button className="btn-altus">Get Started</button>
    </div>
  </div>
</nav>`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Scaffold via CLI</h2>
        <p className="opacity-70 text-sm">Add the glass-morphism enabled sticky navbar to your project.</p>
        <CodeBlock code={`bun x @altus-ui/cli add navbar`} />
      </section>

      <DocFooter 
        backHref="/docs/inputs" 
        backLabel="Inputs & Forms"
        nextHref="/docs/progress" 
        nextLabel="Progress Indicators" 
      />
    </div>
  );
}
