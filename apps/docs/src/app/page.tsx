"use client";

import { useState, useEffect, ReactNode } from "react";

interface TooltipProps {
  label: string;
  children: ReactNode;
  className?: string;
}

function WithTooltip({ label, children, className = "" }: TooltipProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div 
      className={`relative ${className}`} 
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div className="altus-tooltip bottom-full left-1/2 -translate-x-1/2 mb-2">
          {label}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("slate");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("altus-theme") || "slate";
    setCurrentTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (theme: string) => {
    if (theme === "slate") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }
  };

  const handleSetTheme = (theme: string) => {
    setCurrentTheme(theme);
    localStorage.setItem("altus-theme", theme);
    applyTheme(theme);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-altus-bg text-altus-fg selection:bg-altus-primary selection:text-altus-bg transition-colors duration-300 pb-20">
      
      {/* Perspective Modal */}
      {isModalOpen && (
        <>
          <div className="altus-overlay" onClick={() => setIsModalOpen(false)} />
          <div className="altus-modal">
            <header className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold tracking-tight">System Perspective</h3>
              <button onClick={() => setIsModalOpen(false)} className="btn-altus-icon w-8 h-8 border-none hover:bg-altus-muted">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </header>
            <div className="space-y-4">
              <p className="text-sm opacity-60 leading-relaxed">
                The Altus Modal uses a smooth scale-in animation and backdrop blur to create physical focus.
              </p>
              <div className="p-4 bg-altus-muted/50 rounded-altus border border-altus-border">
                <label className="altus-label mb-2">Quick Access</label>
                <input type="text" className="altus-input" placeholder="Search components..." />
              </div>
            </div>
            <footer className="mt-8 flex justify-end gap-3">
              <button className="btn-altus-outline" onClick={() => setIsModalOpen(false)}>Dismiss</button>
              <button className="btn-altus" onClick={() => setIsModalOpen(false)}>Confirm Action</button>
            </footer>
          </div>
        </>
      )}

      {/* Altus Professional Navbar */}
      <nav className="sticky top-0 z-50 bg-altus-bg/80 backdrop-blur-md border-b border-altus-border px-6 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Altus Logo" className="altus-logo" />
              <span className="font-bold tracking-tighter text-lg">ALTUS</span>
            </div>
            <div className="hidden lg:flex items-center gap-1 h-4 bg-altus-border w-[1px] mx-2" />
            <span className="hidden lg:inline text-[10px] font-bold uppercase tracking-[0.3em] opacity-30">V0.0.1 ALPHA</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex bg-altus-muted/50 p-1 rounded-full border border-altus-border gap-1">
              {["slate", "navy", "obsidian", "ivory", "mocha"].map((t) => (
                <button
                  key={t}
                  onClick={() => handleSetTheme(t)}
                  className={`px-3 py-1 text-[9px] font-black uppercase tracking-widest rounded-full transition-all ${
                    currentTheme === t ? "bg-altus-bg shadow-sm text-altus-fg" : "text-altus-fg/40 hover:text-altus-fg"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden btn-altus-icon border-none scale-90">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
            </button>
            <div className="hidden sm:block">
              <button className="btn-altus py-2 text-[10px] tracking-widest">GET STARTED</button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-altus-bg border-b border-altus-border p-6 space-y-6 animate-in fade-in slide-in-from-top-4 shadow-2xl">
            <div className="grid grid-cols-2 gap-2">
              {["slate", "navy", "obsidian", "ivory", "mocha"].map((t) => (
                <button
                  key={t}
                  onClick={() => handleSetTheme(t)}
                  className={`py-4 text-[10px] font-bold uppercase tracking-wider rounded-md border transition-all ${
                    currentTheme === t ? "bg-altus-fg text-altus-bg border-altus-fg shadow-lg" : "bg-altus-muted text-altus-fg/50 border-altus-border"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="max-w-7xl mx-auto px-8 lg:px-12 py-16 lg:py-24">
        {/* NEW REDESIGNED HEADER */}
        <header className="relative mb-24">
          <div className="absolute -left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-altus-primary/20 via-transparent to-transparent hidden xl:block" />
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-altus-primary/5 border border-altus-primary/10 text-[10px] font-bold tracking-[0.2em] text-altus-primary uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-altus-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-altus-primary"></span>
              </span>
              Slick Professional Engine
            </div>
            <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-black tracking-tight leading-[0.9] uppercase">
              Constructing <br /> 
              <span className="text-altus-primary italic">Digital Excellence.</span>
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
              <p className="text-altus-fg/50 text-xl font-medium leading-tight tracking-tight">
                A high-precision design system meticulously crafted for 
                <span className="text-altus-fg"> creative portfolios </span> 
                and performance-critical interfaces.
              </p>
              <div className="flex gap-4">
                <button className="btn-altus px-8 h-12">View Documentation</button>
                <button className="btn-altus-outline px-8 h-12">Github</button>
              </div>
            </div>
          </div>
          
          <div className="mt-20 w-full h-[1px] bg-altus-border relative">
            <div className="absolute left-0 -top-1 w-2 h-2 bg-altus-primary rounded-full" />
            <div className="absolute right-0 -top-1 w-2 h-2 border border-altus-primary bg-altus-bg rounded-full" />
          </div>
        </header>

        {/* Component Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Complex: Modal Section */}
          <div className="lg:col-span-12 altus-card overflow-hidden group border-altus-primary/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 py-8">
              <div className="max-w-md space-y-2">
                <h2 className="text-2xl font-bold tracking-tight">Perspective Modal</h2>
                <p className="text-sm opacity-60">High-precision dialogs with hardware-accelerated animations and backdrop filtering.</p>
              </div>
              <button onClick={() => setIsModalOpen(true)} className="btn-altus px-12">
                Trigger Modal
              </button>
            </div>
          </div>

          {/* Buttons Section */}
          <div className="lg:col-span-8 altus-card flex flex-col gap-6">
            <header className="flex justify-between items-center border-b border-altus-border pb-4">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Buttons & Actions</h2>
            </header>
            <div className="flex flex-wrap gap-6 py-12 items-center justify-center bg-altus-muted/20 rounded-altus border border-altus-border/50 relative overflow-hidden">
              <WithTooltip label=".btn-altus"><button className="btn-altus">Primary</button></WithTooltip>
              <WithTooltip label=".btn-altus-outline"><button className="btn-altus-outline">Outline</button></WithTooltip>
              <WithTooltip label=".btn-altus-ghost"><button className="btn-altus-ghost">Ghost</button></WithTooltip>
              <div className="w-[1px] h-8 bg-altus-border mx-2" />
              <WithTooltip label=".btn-altus-icon"><button className="btn-altus-icon"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg></button></WithTooltip>
              <WithTooltip label=".btn-altus-fab"><button className="btn-altus-fab"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></button></WithTooltip>
            </div>
          </div>

          {/* Stats Section */}
          <div className="lg:col-span-4 altus-card flex flex-col justify-between overflow-hidden relative group">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Active Palette</h2>
            <div className="mt-8">
              <p className="text-3xl font-bold capitalize">{currentTheme}</p>
              <p className="text-xs opacity-50 tracking-widest mt-1 uppercase">Persistent Instance</p>
            </div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-altus-primary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
          </div>

          {/* Text and Forms Section */}
          <div className="lg:col-span-12 altus-card flex flex-col gap-12">
            <header className="border-b border-altus-border pb-6">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40 mb-2">Text And Forms</h2>
              <p className="text-2xl font-bold">Input Precision</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <WithTooltip label=".altus-label"><label className="altus-label">Standard Input</label></WithTooltip>
                    <WithTooltip label=".altus-input"><input type="text" className="altus-input" placeholder="Type something..." /></WithTooltip>
                  </div>
                  <div className="space-y-2">
                    <label className="altus-label">Focus State</label>
                    <input type="text" className="altus-input" placeholder="Active input" />
                  </div>
                </div>
              </div>

              <div className="space-y-10">
                <div className="space-y-6 p-6 bg-altus-muted/20 rounded-altus border border-altus-border">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">Selection Controls</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">Enable Feature</span>
                    <WithTooltip label=".altus-switch"><input type="checkbox" className="altus-switch" defaultChecked /></WithTooltip>
                  </div>
                  <div className="flex items-center gap-3">
                    <WithTooltip label=".altus-checkbox"><input type="checkbox" className="altus-checkbox" defaultChecked /></WithTooltip>
                    <span className="text-sm font-medium">Accept terms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-20 border-t border-altus-border p-12 text-center">
        <p className="text-xs uppercase tracking-[0.4em] opacity-30">Altus Design System / v0.0.1</p>
      </footer>
    </div>
  );
}
