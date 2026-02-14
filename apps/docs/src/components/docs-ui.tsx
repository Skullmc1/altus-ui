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
  <footer className="mt-32 pb-20">
    <div className="altus-divider mb-12 opacity-50" />
    <div className="flex flex-col sm:flex-row justify-between items-stretch gap-4">
      {backHref ? (
        <Link 
          href={backHref} 
          className="flex-1 group p-6 rounded-altus border border-altus-border hover:border-altus-primary/40 hover:bg-altus-muted/10 transition-all"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 group-hover:opacity-50 transition-opacity block mb-2">Previous</span>
          <span className="text-lg font-bold text-altus-fg/80 group-hover:text-altus-primary transition-colors flex items-center gap-2">
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            {backLabel}
          </span>
        </Link>
      ) : <div className="flex-1 hidden sm:block" />}
      
      {nextHref ? (
        <Link 
          href={nextHref} 
          className="flex-1 group p-6 rounded-altus border border-altus-border hover:border-altus-primary/40 hover:bg-altus-muted/10 transition-all text-right"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 group-hover:opacity-50 transition-opacity block mb-2">Next Up</span>
          <span className="text-lg font-bold text-altus-fg/80 group-hover:text-altus-primary transition-colors flex items-center gap-2 justify-end">
            {nextLabel}
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </span>
        </Link>
      ) : <div className="flex-1 hidden sm:block" />}
    </div>
    <div className="mt-12 text-center">
      <p className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-20">Altus Design System / v1.0.0</p>
    </div>
  </footer>
);
