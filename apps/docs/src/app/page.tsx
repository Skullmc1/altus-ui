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
    <div className="min-h-screen bg-altus-bg text-altus-fg selection:bg-altus-primary selection:text-altus-bg transition-colors duration-300">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Buttons Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 altus-card flex flex-col gap-6">
            <header className="flex justify-between items-center">
              <h2 className="text-sm font-semibold uppercase tracking-wider opacity-50">Buttons & Actions</h2>
              <div className="flex gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-altus-primary" />
                <div className="w-1.5 h-1.5 rounded-full bg-altus-border" />
              </div>
            </header>
            <div className="flex flex-wrap gap-4 py-8 items-center justify-center bg-altus-muted/30 rounded-altus border border-dashed border-altus-border">
              <button className="btn-altus">Primary Action</button>
              <button className="btn-altus-outline">Secondary Action</button>
              <button className="text-sm font-medium hover:underline px-4 cursor-pointer">Ghost Button</button>
            </div>
          </div>

          {/* Theme Indicator Card */}
          <div className="altus-card flex flex-col justify-between overflow-hidden relative group">
            <h2 className="text-sm font-semibold uppercase tracking-wider opacity-50">Active Palette</h2>
            <div className="mt-8">
              <p className="text-3xl font-bold capitalize">{currentTheme}</p>
              <p className="text-sm opacity-60">Persistent Settings</p>
            </div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-altus-primary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
          </div>

          {/* Card Styles */}
          <div className="lg:col-span-1 altus-card flex flex-col gap-4">
            <div className="w-12 h-12 bg-altus-muted rounded-altus border border-altus-border flex items-center justify-center">
              <svg className="w-6 h-6 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            </div>
            <h3 className="text-lg font-bold">Refined Elevation</h3>
            <p className="text-sm opacity-60 leading-relaxed">
              Standardized rounding and realistic shadows provide a modern, professional feel across all themes.
            </p>
          </div>

          {/* Interactive Block */}
          <div className="lg:col-span-2 altus-card grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Performance", value: "99%" },
              { label: "Components", value: "24+" },
              { label: "Themes", value: "4" },
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
