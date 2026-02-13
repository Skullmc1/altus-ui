"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState("slate");

  useEffect(() => {
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

  const themes = ["slate", "navy", "obsidian", "ivory", "mocha"];

  return (
    <div className="min-h-screen bg-altus-bg text-altus-fg flex flex-col md:flex-row relative">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-altus-border p-6 md:sticky md:top-0 md:h-screen overflow-y-auto bg-altus-bg/50 backdrop-blur-sm z-10">
        <div className="flex items-center gap-3 mb-10">
          <img src="/logo.png" alt="Altus Logo" className="altus-logo w-6" />
          <Link href="/" className="font-bold tracking-tighter text-lg">ALTUS</Link>
        </div>

        <nav className="space-y-8 text-[11px]">
          <div>
            <h4 className="font-bold uppercase tracking-[0.2em] opacity-40 mb-4">Getting Started</h4>
            <ul className="space-y-2">
              <li><Link href="/docs/installation" className="font-medium hover:text-altus-primary transition-colors">Installation</Link></li>
              <li><Link href="/docs/theming" className="font-medium hover:text-altus-primary transition-colors">Theming</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-[0.2em] opacity-40 mb-4">Components</h4>
            <ul className="space-y-2">
              <li><Link href="/docs/buttons" className="font-medium hover:text-altus-primary transition-colors">Buttons</Link></li>
              <li><Link href="/docs/inputs" className="font-medium hover:text-altus-primary transition-colors">Inputs & Forms</Link></li>
              <li><Link href="/docs/cards" className="font-medium hover:text-altus-primary transition-colors">Cards & Layout</Link></li>
              <li><Link href="/docs/modals" className="font-medium hover:text-altus-primary transition-colors">Modals</Link></li>
              <li><Link href="/docs/toasts" className="font-medium hover:text-altus-primary transition-colors">Toasts</Link></li>
              <li><Link href="/docs/accordion" className="font-medium hover:text-altus-primary transition-colors">Accordion</Link></li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-16 lg:p-24 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      </main>

      {/* Vertical Theme Switcher */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col gap-2 p-3 bg-altus-bg border-l border-y border-altus-border rounded-l-xl shadow-2xl z-50">
        {themes.map((t) => (
          <button
            key={t}
            onClick={() => handleSetTheme(t)}
            className={`w-6 h-6 rounded-full border transition-all hover:scale-125 ${
              currentTheme === t ? "ring-2 ring-altus-primary ring-offset-2 ring-offset-altus-bg scale-110" : "border-altus-border"
            }`}
            title={t.toUpperCase()}
            style={{ 
              backgroundColor: t === 'slate' ? '#f1f5f9' : 
                               t === 'navy' ? '#0f172a' :
                               t === 'obsidian' ? '#000000' :
                               t === 'ivory' ? '#fcfcf9' : '#1c1917' 
            }}
          />
        ))}
      </div>
    </div>
  );
}
