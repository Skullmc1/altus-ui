"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import { Hero } from "@/components/home/hero";
import { ActionsSection } from "@/components/home/actions-section";
import { MetricsSection } from "@/components/home/metrics-section";
import { FormsSection } from "@/components/home/forms-section";
import { UtilitySection } from "@/components/home/utility-section";
import { CarouselSection } from "@/components/home/carousel-section";

interface ToastItem {
  id: number;
  message: string;
  type: "success" | "error" | "info";
  position: "top-center" | "bottom-right" | "bottom-center";
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("slate");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastItem[]>([]);

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

  const addToast = (message: string, position: ToastItem["position"], type: ToastItem["type"] = "info") => {
    const id = Date.now();
    setToasts((prev) => {
      const atPosition = prev.filter(t => t.position === position);
      if (atPosition.length >= 3) {
        const oldestId = atPosition[0].id;
        return [...prev.filter(t => t.id !== oldestId), { id, message, position, type }];
      }
      return [...prev, { id, message, position, type }];
    });
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  if (!mounted) return null;

  const toastVariants = {
    "top-center": {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -10, scale: 0.95 }
    },
    "bottom-center": {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 10, scale: 0.95 }
    },
    "bottom-right": {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 10, scale: 0.95 }
    }
  };

  const toastIcons = {
    success: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>,
    error: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>,
    info: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  };

  return (
    <div className="min-h-screen bg-altus-bg text-altus-fg selection:bg-altus-primary selection:text-altus-bg transition-colors duration-300 pb-20 overflow-x-hidden">
      {/* Toast Containers */}
      {["top-center", "bottom-center", "bottom-right"].map((pos) => (
        <div key={pos} className={`altus-toast-container ${pos}`}>
          <AnimatePresence mode="popLayout">
            {toasts.filter(t => t.position === pos).map(t => (
              <motion.div
                key={t.id}
                layout
                initial={toastVariants[pos as keyof typeof toastVariants].initial}
                animate={toastVariants[pos as keyof typeof toastVariants].animate}
                exit={toastVariants[pos as keyof typeof toastVariants].exit}
                transition={{ type: "spring", damping: 25, stiffness: 350 }}
                className={`altus-toast altus-toast-${t.type}`}
              >
                {toastIcons[t.type]}
                <span className="flex-1">{t.message}</span>
                <button onClick={() => removeToast(t.id)} className="altus-toast-close">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ))}

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="altus-nav-overlay md:hidden">
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-4 right-6 btn-altus-icon border-none scale-125">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <div className="flex flex-col gap-6 mb-12">
              {[
                { name: "Components", href: "/docs/buttons" },
                { name: "Showcase", href: "/docs/carousel" },
                { name: "Resources", href: "/docs/installation" },
                { name: "GitHub", href: "https://github.com/Skullmc1/altus-ui" }
              ].map((link, i) => (
                <motion.a 
                  key={link.name} 
                  initial={{ opacity: 0, x: -20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ delay: i * 0.1 + 0.2 }} 
                  href={link.href} 
                  className="altus-nav-link"
                  target={link.href.startsWith('http') ? "_blank" : undefined}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Perspective Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="altus-overlay" onClick={() => setIsModalOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: "-45%", x: "-50%", scale: 0.95 }}
              animate={{ opacity: 1, y: "-50%", x: "-50%", scale: 1 }}
              exit={{ opacity: 0, y: "-48%", x: "-50%", scale: 0.98 }}
              transition={{ type: "spring", damping: 25, stiffness: 400 }}
              className="altus-modal"
            >
              <header className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold tracking-tight">System Perspective</h3>
                <button onClick={() => setIsModalOpen(false)} className="btn-altus-icon w-8 h-8 border-none hover:bg-altus-muted">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </header>
              <div className="space-y-4">
                <p className="text-sm opacity-60 leading-relaxed">The Altus Modal uses high-performance kinetic spring animations for a tactile, physical focus.</p>
                <div className="p-4 bg-altus-muted/50 rounded-altus border border-altus-border">
                  <label className="altus-label mb-2">Quick Access</label>
                  <input type="text" className="altus-input" placeholder="Search components..." />
                </div>
              </div>
              <footer className="mt-8 flex justify-end gap-3">
                <button className="btn-altus-outline" onClick={() => setIsModalOpen(false)}>Dismiss</button>
                <button className="btn-altus" onClick={() => setIsModalOpen(false)}>Confirm Action</button>
              </footer>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-altus-bg/80 backdrop-blur-md border-b border-altus-border px-6 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="Altus Logo" className="altus-logo w-8 h-8" />
              <span className="font-bold tracking-tighter text-lg">ALTUS</span>
            </div>
            <div className="hidden lg:flex items-center gap-1 h-4 bg-altus-border w-[1px] mx-2" />
            <span className="hidden lg:inline text-[10px] font-bold uppercase tracking-[0.3em] opacity-30">V1.0.0</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex bg-altus-muted/50 p-1 rounded-lg border border-altus-border gap-1">
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
            <button onClick={() => setIsMenuOpen(true)} className="md:hidden btn-altus-icon border-none scale-90">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
            <div className="hidden sm:block">
              <Link href="/docs/installation" className="btn-altus py-2 text-[10px] tracking-widest">GET STARTED</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 space-y-24">
        <Hero />
        <div className="altus-divider" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <ActionsSection setIsModalOpen={setIsModalOpen} addToast={addToast} currentTheme={currentTheme} />
          <MetricsSection />
          <FormsSection />
          <UtilitySection />
          <CarouselSection />
        </div>
      </main>

      <footer className="mt-20 border-t border-altus-border p-12 text-center">
        <p className="text-xs uppercase tracking-[0.4em] opacity-30">Altus Design System / v1.0.0</p>
      </footer>
    </div>
  );
}
