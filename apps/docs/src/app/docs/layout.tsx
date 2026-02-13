"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState("slate");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const savedTheme = localStorage.getItem("altus-theme") || "slate";
    setCurrentTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  // Close sidebar on navigation (mobile)
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

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

  const NavContent = () => (
    <nav className="space-y-10">
      <div>
        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-altus-fg/30 mb-6">Getting Started</h4>
        <ul className="space-y-3">
          <li>
            <Link 
              href="/docs/installation" 
              className={`text-sm font-semibold transition-all hover:translate-x-1 inline-block ${pathname === '/docs/installation' ? 'text-altus-primary' : 'text-altus-fg/60 hover:text-altus-fg'}`}
            >
              Installation
            </Link>
          </li>
          <li>
            <Link 
              href="/docs/theming" 
              className={`text-sm font-semibold transition-all hover:translate-x-1 inline-block ${pathname === '/docs/theming' ? 'text-altus-primary' : 'text-altus-fg/60 hover:text-altus-fg'}`}
            >
              Theming
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-altus-fg/30 mb-6">Components</h4>
        <ul className="space-y-3">
          {[
            { name: "Buttons", href: "/docs/buttons" },
            { name: "Inputs & Forms", href: "/docs/inputs" },
            { name: "Cards & Layout", href: "/docs/cards" },
            { name: "Modals", href: "/docs/modals" },
            { name: "Toasts", href: "/docs/toasts" },
            { name: "Accordion", href: "/docs/accordion" },
          ].map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href} 
                className={`text-sm font-semibold transition-all hover:translate-x-1 inline-block ${pathname === item.href ? 'text-altus-primary' : 'text-altus-fg/60 hover:text-altus-fg'}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );

  return (
    <div className="min-h-screen bg-altus-bg text-altus-fg transition-colors duration-500 relative flex flex-col">
      {/* Mobile Header */}
      <header className="md:hidden sticky top-0 z-40 bg-altus-bg/80 backdrop-blur-md border-b border-altus-border px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Altus Logo" className="altus-logo w-5" />
          <span className="font-bold tracking-tighter text-base">ALTUS</span>
        </div>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="btn-altus-icon w-10 h-10 border-none bg-altus-muted/50"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </header>

      <div className="flex flex-1 relative">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-72 border-r border-altus-border p-8 sticky top-0 h-screen overflow-y-auto bg-altus-bg/20 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-12">
            <img src="/logo.png" alt="Altus Logo" className="altus-logo w-6" />
            <Link href="/" className="font-black tracking-tighter text-xl">ALTUS</Link>
          </div>
          <NavContent />
        </aside>

        {/* Mobile Sidebar Overlay */}
        <AnimatePresence>
          {isSidebarOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsSidebarOpen(false)}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
              />
              <motion.aside 
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed inset-y-0 left-0 w-[80%] max-w-sm bg-altus-bg border-r border-altus-border p-8 z-50 md:hidden overflow-y-auto"
              >
                <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-3">
                    <img src="/logo.png" alt="Altus Logo" className="altus-logo w-6" />
                    <span className="font-black tracking-tighter text-xl">ALTUS</span>
                  </div>
                  <button onClick={() => setIsSidebarOpen(false)} className="opacity-40"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
                </div>
                <NavContent />
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* Main Content Area */}
        <main className="flex-1 px-6 py-12 md:px-16 lg:px-24 max-w-5xl mx-auto w-full">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {children}
          </motion.div>
        </main>
      </div>

      {/* Vertical Theme Switcher */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col gap-3 p-3 bg-altus-bg/80 backdrop-blur-md border-l border-y border-altus-border rounded-l-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] z-50 transition-transform hover:translate-x-[-4px]">
        {themes.map((t) => (
          <button
            key={t}
            onClick={() => handleSetTheme(t)}
            className={`w-5 h-5 rounded-full border-2 transition-all hover:scale-125 ${
              currentTheme === t ? "border-altus-primary scale-125 shadow-[0_0_10px_var(--alt-ring)]" : "border-altus-border hover:border-altus-fg/40"
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
