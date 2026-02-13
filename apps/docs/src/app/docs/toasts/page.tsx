"use client";

import { CodeBlock, DocHeader, Preview, DocFooter } from "@/components/docs-ui";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ToastItem {
  id: number;
  message: string;
  type: "success" | "error" | "info";
  position: "top-center" | "bottom-center" | "bottom-right";
}

export default function ToastsDocs() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const addToast = (message: string, type: ToastItem["type"], position: ToastItem["position"]) => {
    const id = Date.now();
    setToasts((prev) => {
      const atPos = prev.filter(t => t.position === position);
      if (atPos.length >= 3) {
        return [...prev.filter(t => t.id !== atPos[0].id), { id, message, type, position }];
      }
      return [...prev, { id, message, type, position }];
    });
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const toastVariants = {
    "top-center": { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 } },
    "bottom-center": { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } },
    "bottom-right": { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 } },
  };

  const containers = {
    "top-center": "top-8 left-1/2 -translate-x-1/2",
    "bottom-center": "bottom-8 left-1/2 -translate-x-1/2",
    "bottom-right": "bottom-8 right-8"
  };

  return (
    <div className="space-y-10 relative">
      <DocHeader 
        title="Toasts" 
        description="Tactical feedback with built-in queue management and mobile responsiveness." 
      />

      {/* Live Toast Containers for Demo */}
      {(Object.keys(containers) as Array<keyof typeof containers>).map((pos) => (
        <div key={pos} className={`fixed ${containers[pos]} z-[100] flex flex-col gap-2 pointer-events-none items-center`}>
          <AnimatePresence mode="popLayout">
            {toasts.filter(t => t.position === pos).map((t) => (
              <motion.div
                key={t.id}
                layout
                initial={toastVariants[pos].initial}
                animate={toastVariants[pos].animate}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                className={`altus-toast altus-toast-${t.type} pointer-events-auto shadow-2xl`}
              >
                <span className="flex-1">{t.message}</span>
                <button onClick={() => removeToast(t.id)} className="altus-toast-close">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ))}

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Interactive Demo</h2>
        <p className="opacity-70 text-sm">Select a position and trigger different types of notifications.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {[
            { pos: "top-center", label: "Top Center" },
            { pos: "bottom-center", label: "Bottom Center" },
            { pos: "bottom-right", label: "Bottom Right" },
          ].map((stack) => (
            <div key={stack.pos} className="space-y-4 p-6 rounded-altus border border-altus-border bg-altus-muted/5">
              <h3 className="text-xs font-black uppercase tracking-widest opacity-40">{stack.label}</h3>
              <div className="flex flex-col gap-2">
                <button 
                  onClick={() => addToast(`Success in ${stack.label}`, "success", stack.pos as any)} 
                  className="btn-altus text-xs py-2 bg-emerald-600 hover:bg-emerald-700 border-none"
                >
                  Success
                </button>
                <button 
                  onClick={() => addToast(`Error in ${stack.label}`, "error", stack.pos as any)} 
                  className="btn-altus text-xs py-2 bg-rose-600 hover:bg-rose-700 border-none"
                >
                  Error
                </button>
                <button 
                  onClick={() => addToast(`Info in ${stack.label}`, "info", stack.pos as any)} 
                  className="btn-altus text-xs py-2 bg-blue-600 hover:bg-blue-700 border-none"
                >
                  Info
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Usage</h2>
        <CodeBlock code={`<div className="altus-toast altus-toast-success">
  <span>Success message</span>
  <button className="altus-toast-close">×</button>
</div>`} />
      </section>

      <DocFooter 
        backHref="/docs/modals" 
        backLabel="Modals"
        nextHref="/docs/accordion" 
        nextLabel="Accordion" 
      />
    </div>
  );
}
