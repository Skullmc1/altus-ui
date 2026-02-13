"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("slate");

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
      {/* Top Navbar */}
      <nav className="sticky top-0 z-50 bg-altus-bg/80 backdrop-blur-md border-b border-altus-border px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-altus-fg rounded-sm flex items-center justify-center">
            <span className="text-[10px] text-altus-bg font-bold">A</span>
          </div>
          <span className="font-semibold tracking-tight">Altus UI</span>
        </div>
        
        <div className="flex bg-altus-muted p-1 rounded-lg border border-altus-border gap-1">
          {["slate", "navy", "obsidian", "ivory", "mocha"].map((t) => (
            <button
              key={t}
              onClick={() => handleSetTheme(t)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md capitalize transition-all ${
                currentTheme === t ? "bg-altus-bg shadow-sm text-altus-fg" : "text-altus-fg/50 hover:text-altus-fg"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-8 lg:p-12">
        <header className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Professional Component Suite</h1>
          <p className="text-altus-fg/60 max-w-2xl text-lg">
            A slick, multi-themed design system optimized for premium creative portfolios and high-performance interfaces.
          </p>
        </header>

        {/* Component Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Buttons Section */}
          <div className="lg:col-span-8 altus-card flex flex-col gap-6">
            <header className="flex justify-between items-center border-b border-altus-border pb-4">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Buttons & Actions</h2>
            </header>
            <div className="flex flex-wrap gap-6 py-12 items-center justify-center bg-altus-muted/20 rounded-altus border border-altus-border/50">
              <button className="btn-altus">Primary Action</button>
              <button className="btn-altus-outline">Secondary Action</button>
              <button className="text-sm font-semibold hover:text-altus-primary transition-colors cursor-pointer">Ghost Action</button>
            </div>
          </div>

          {/* Theme Indicator Card */}
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
              {/* Text Inputs */}
              <div className="md:col-span-2 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="altus-label">Standard Input</label>
                    <input type="text" className="altus-input" placeholder="Type something..." />
                  </div>
                  <div className="space-y-2">
                    <label className="altus-label">Focus State</label>
                    <input type="text" className="altus-input" placeholder="Active input" autoFocus />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="altus-label">Large Field</label>
                  <textarea className="altus-input min-h-[120px] py-4" placeholder="Describe your creative process..." />
                </div>
              </div>

              {/* Toggles & Checkboxes */}
              <div className="space-y-10">
                <div className="space-y-6 p-6 bg-altus-muted/20 rounded-altus border border-altus-border">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">Selection Controls</h3>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">Enable Feature</span>
                    <input type="checkbox" className="altus-switch" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">System Sync</span>
                    <input type="checkbox" className="altus-switch" />
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <input type="checkbox" className="altus-checkbox" defaultChecked />
                    <span className="text-sm font-medium">Accept terms</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="altus-checkbox" />
                    <span className="text-sm font-medium">Newsletter</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <button className="btn-altus w-full">Apply Configuration</button>
                  <p className="text-[10px] text-center opacity-40 uppercase tracking-widest">Changes apply instantly</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card Styles */}
          <div className="lg:col-span-4 altus-card flex flex-col gap-4">
            <div className="w-12 h-12 bg-altus-muted rounded-altus border border-altus-border flex items-center justify-center">
              <svg className="w-6 h-6 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            </div>
            <h3 className="text-lg font-bold">Refined Elevation</h3>
            <p className="text-sm opacity-60 leading-relaxed">
              Standardized rounding and realistic shadows provide a modern, professional feel across all themes.
            </p>
          </div>

          {/* Stats / Interactive Block */}
          <div className="lg:col-span-8 altus-card grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Performance", value: "99%" },
              { label: "Components", value: "24+" },
              { label: "Themes", value: "5" },
              { label: "Bundle Size", value: "12kb" }
            ].map((stat, i) => (
              <div key={i} className="p-4 bg-altus-muted/50 rounded-altus border border-altus-border">
                <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">{stat.label}</p>
                <p className="text-xl font-bold">{stat.value}</p>
              </div>
            ))}
          </div>

        </div>
      </main>

      <footer className="mt-20 border-t border-altus-border p-12 text-center">
        <p className="text-xs uppercase tracking-[0.4em] opacity-30">Altus Design System / v0.0.1</p>
      </footer>
    </div>
  );
}
