"use client";

import { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      <AnimatePresence>
        {visible && (
          <motion.div 
            initial={{ opacity: 0, y: 4, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 2, scale: 0.98 }}
            className="altus-tooltip bottom-full left-1/2 -translate-x-1/2 mb-2"
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function AccordionItem({ title, children }: { title: string, children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="altus-accordion-item">
      <button className="altus-accordion-trigger" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <motion.svg 
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="w-4 h-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 0.7 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="altus-accordion-content">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface ToastItem {
  id: number;
  message: string;
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

  const addToast = (message: string, position: ToastItem["position"]) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, position }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  if (!mounted) return null;

  const toastVariants = {
    "top-center": {
      initial: { opacity: 0, y: -20, x: "-50%" },
      animate: { opacity: 1, y: 0, x: "-50%" },
      exit: { opacity: 0, y: -10, scale: 0.95, x: "-50%" }
    },
    "bottom-center": {
      initial: { opacity: 0, y: 20, x: "-50%" },
      animate: { opacity: 1, y: 0, x: "-50%" },
      exit: { opacity: 0, y: 10, scale: 0.95, x: "-50%" }
    },
    "bottom-right": {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 10, scale: 0.95 }
    }
  };

  const containers = {
    "top-center": "top-0 left-1/2",
    "bottom-center": "bottom-0 left-1/2",
    "bottom-right": "bottom-0 right-0"
  };

  return (
    <div className="min-h-screen bg-altus-bg text-altus-fg selection:bg-altus-primary selection:text-altus-bg transition-colors duration-300 pb-20">
      
      {/* Toast Containers */}
      {(Object.keys(containers) as Array<keyof typeof containers>).map((pos) => (
        <div key={pos} className={`altus-toast-container ${containers[pos]}`}>
          <AnimatePresence mode="popLayout">
            {toasts.filter(t => t.position === pos).map(t => (
              <motion.div 
                key={t.id}
                layout
                initial={toastVariants[pos].initial}
                animate={toastVariants[pos].animate}
                exit={toastVariants[pos].exit}
                transition={{ type: "spring", damping: 25, stiffness: 350 }}
                className="altus-toast"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                {t.message}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ))}

      {/* Full Page Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="altus-nav-overlay md:hidden"
          >
            <button 
              onClick={() => setIsMenuOpen(false)} 
              className="absolute top-4 right-6 btn-altus-icon border-none scale-125"
            >
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            <div className="flex flex-col gap-6 mb-12">
              {["Components", "Showcase", "Resources", "GitHub"].map((link, i) => (
                <motion.a 
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  href="#" 
                  className="altus-nav-link"
                >
                  {link}
                </motion.a>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-auto space-y-6"
            >
              <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30">Switch Perspective</p>
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Perspective Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="altus-overlay" 
              onClick={() => setIsModalOpen(false)} 
            />
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
                <p className="text-sm opacity-60 leading-relaxed">
                  The Altus Modal uses high-performance kinetic spring animations for a tactile, physical focus.
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
            </motion.div>
          </>
        )}
      </AnimatePresence>

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
              <button className="btn-altus py-2 text-[10px] tracking-widest">GET STARTED</button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 lg:px-12 py-16 lg:py-24">
        {/* HEADER */}
        <header className="relative mb-24">
          <div className="absolute -left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-altus-primary/20 via-transparent to-transparent hidden xl:block" />
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-altus-primary/5 border border-altus-primary/10 text-[10px] font-bold tracking-[0.2em] text-altus-primary uppercase"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-altus-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-altus-primary"></span>
              </span>
              Slick Kinetic Motion
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[clamp(2.5rem,8vw,5.5rem)] font-black tracking-tight leading-[0.9] uppercase"
            >
              Constructing <br /> 
              <span className="text-altus-primary italic">Digital Excellence.</span>
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end"
            >
              <p className="text-altus-fg/50 text-xl font-medium leading-tight tracking-tight">
                A high-precision design system meticulously crafted for 
                <span className="text-altus-fg"> creative portfolios </span> 
                and performance-critical interfaces.
              </p>
              <div className="flex gap-4">
                <button className="btn-altus px-8 h-12">View Documentation</button>
                <button className="btn-altus-outline px-8 h-12">Github</button>
              </div>
            </motion.div>
          </div>
        </header>

        {/* PAGE LEVEL DIVIDER */}
        <WithTooltip label=".altus-divider" className="mb-24">
          <div className="altus-divider" />
        </WithTooltip>

        {/* Component Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Modal & Toast Section */}
          <div className="lg:col-span-12 altus-card grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tight">Kinetic Actions</h2>
                <p className="text-sm opacity-60">High-performance dialogs and tactical feedback powered by Framer Motion.</p>
              </div>
              <button onClick={() => setIsModalOpen(true)} className="btn-altus w-full py-4">
                Trigger Perspective Modal
              </button>
            </div>

            <div className="space-y-4">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">Tactical Feedback</h3>
              <div className="grid grid-cols-1 gap-3">
                <button onClick={() => addToast("System Notification (Top)", "top-center")} className="btn-altus-outline text-xs justify-start px-4 hover:bg-altus-muted transition-colors">
                   Trigger Top Center
                </button>
                <button onClick={() => addToast("Sync Complete (Bottom)", "bottom-center")} className="btn-altus-outline text-xs justify-start px-4 hover:bg-altus-muted transition-colors">
                   Trigger Bottom Center
                </button>
                <button onClick={() => addToast("Task Finalized (Right)", "bottom-right")} className="btn-altus-outline text-xs justify-start px-4 hover:bg-altus-muted transition-colors">
                   Trigger Bottom Right
                </button>
              </div>
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

          {/* Active Palette Section */}
          <div className="lg:col-span-4 altus-card flex flex-col justify-between overflow-hidden relative group">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Active Palette</h2>
            <div className="mt-8">
              <p className="text-3xl font-bold capitalize">{currentTheme}</p>
              <p className="text-xs opacity-50 tracking-widest mt-1 uppercase">Persistent Instance</p>
            </div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-altus-primary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
          </div>

          {/* Text and Forms Section */}
          <div className="lg:col-span-7 altus-card flex flex-col gap-12">
            <header className="border-b border-altus-border pb-6 flex justify-between items-end">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40 mb-2">Text And Forms</h2>
                <p className="text-2xl font-bold">Input Precision</p>
              </div>
              <div className="flex gap-2 mb-1">
                <WithTooltip label=".altus-badge"><span className="altus-badge">Verified</span></WithTooltip>
                <WithTooltip label=".altus-badge"><span className="altus-badge border-altus-primary">Beta</span></WithTooltip>
              </div>
            </header>
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <WithTooltip label=".altus-label"><label className="altus-label">Standard Input</label></WithTooltip>
                  <WithTooltip label=".altus-input"><input type="text" className="altus-input" placeholder="Type something..." /></WithTooltip>
                </div>
                <div className="space-y-2">
                  <WithTooltip label=".altus-label"><label className="altus-label">Custom Select</label></WithTooltip>
                  <WithTooltip label=".altus-select">
                    <select className="altus-select">
                      <option>Project Strategy</option>
                      <option>Technical Design</option>
                      <option>Visual Identity</option>
                    </select>
                  </WithTooltip>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-altus-muted/20 border border-altus-border rounded-altus">
                <div className="space-y-4">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">Toggles</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">Enable Feature</span>
                    <WithTooltip label=".altus-switch"><input type="checkbox" className="altus-switch" defaultChecked /></WithTooltip>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">Checkboxes</h3>
                  <div className="flex items-center gap-3">
                    <WithTooltip label=".altus-checkbox"><input type="checkbox" className="altus-checkbox" defaultChecked /></WithTooltip>
                    <span className="text-sm font-medium">Accept terms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feedback & Status Section */}
          <div className="lg:col-span-5 altus-card flex flex-col gap-8">
            <header className="border-b border-altus-border pb-4">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Feedback & Utility</h2>
            </header>
            
            <div className="space-y-8">
              <div className="space-y-3">
                <label className="altus-label">Skeleton States</label>
                <div className="flex gap-4 items-center">
                  <WithTooltip label=".altus-skeleton"><div className="w-12 h-12 altus-skeleton rounded-full" /></WithTooltip>
                  <div className="flex-1 space-y-2">
                    <WithTooltip label=".altus-skeleton"><div className="h-4 w-3/4 altus-skeleton" /></WithTooltip>
                    <WithTooltip label=".altus-skeleton"><div className="h-3 w-1/2 altus-skeleton" /></WithTooltip>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-altus-border">
                <div className="space-y-1">
                   <label className="altus-label mb-0">System Activity</label>
                   <p className="text-xs opacity-40 uppercase tracking-widest leading-relaxed">Processing assets...</p>
                </div>
                <WithTooltip label=".altus-spinner">
                   <div className="altus-spinner" />
                </WithTooltip>
              </div>

              <WithTooltip label=".altus-accordion" className="w-full">
                <div className="altus-accordion">
                  <AccordionItem title="Architectural Methodology">
                    <p>Altus UI follows a strict mathematical grid system ensuring every component maintains visual balance and spatial integrity.</p>
                  </AccordionItem>
                </div>
              </WithTooltip>
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
