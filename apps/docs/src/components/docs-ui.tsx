import React from "react";

export const CodeBlock = ({ code, language = "html" }: { code: string; language?: string }) => (
  <div className="bg-altus-muted/30 border border-altus-border rounded-altus p-4 my-4 overflow-x-auto">
    <pre className="text-sm font-mono text-altus-fg/80">
      <code>{code}</code>
    </pre>
  </div>
);

export const DocHeader = ({ title, description }: { title: string; description: string }) => (
  <header className="space-y-4 mb-10">
    <h1 className="text-4xl font-black tracking-tight uppercase">{title}</h1>
    <p className="text-xl text-altus-fg/60 leading-relaxed">{description}</p>
    <div className="h-px w-full bg-gradient-to-r from-altus-border to-transparent mt-8" />
  </header>
);

export const Preview = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`p-8 border border-altus-border rounded-altus bg-altus-bg relative overflow-hidden flex flex-col items-center justify-center gap-4 ${className}`}>
    <div className="absolute inset-0 bg-altus-muted/10 pattern-grid opacity-20 pointer-events-none" />
    <div className="relative z-0 flex flex-col items-center justify-center gap-4 w-full">
      {children}
    </div>
  </div>
);

import Link from "next/link";

export const DocFooter = ({ 
  backHref, 
  backLabel, 
  nextHref, 
  nextLabel 
}: { 
  backHref?: string; 
  backLabel?: string; 
  nextHref?: string; 
  nextLabel?: string;
}) => (
  <footer className="mt-20 pt-10 border-t border-altus-border flex flex-col sm:flex-row justify-between items-center gap-6">
    <div className="text-left">
      {backHref && (
        <Link href={backHref} className="group flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-widest opacity-30 group-hover:opacity-50 transition-opacity">Previous</span>
          <span className="text-sm font-bold text-altus-fg/70 group-hover:text-altus-primary transition-colors">← {backLabel}</span>
        </Link>
      )}
    </div>
    
    <div className="text-center sm:text-right">
      {nextHref && (
        <Link href={nextHref} className="group flex flex-col items-center sm:items-end">
          <span className="text-[10px] font-bold uppercase tracking-widest opacity-30 group-hover:opacity-50 transition-opacity">Next Up</span>
          <span className="text-sm font-bold text-altus-fg/70 group-hover:text-altus-primary transition-colors">{nextLabel} →</span>
        </Link>
      )}
    </div>

    <div className="w-full sm:w-auto mt-4 sm:mt-0 text-center sm:absolute sm:left-1/2 sm:-translate-x-1/2">
      <p className="text-[9px] font-bold uppercase tracking-[0.3em] opacity-20">Last Updated Feb 14, 2026</p>
    </div>
  </footer>
);
