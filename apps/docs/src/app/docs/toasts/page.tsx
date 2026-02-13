"use client";

import { CodeBlock, DocHeader, Preview, DocFooter } from "@/components/docs-ui";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ToastItem {
  id: number;
  message: string;
  type: "success" | "error" | "info";
}

export default function ToastsDocs() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const addToast = (message: string, type: ToastItem["type"]) => {
    const id = Date.now();
    setToasts((prev) => {
      if (prev.length >= 3) return [...prev.slice(1), { id, message, type }];
      return [...prev, { id, message, type }];
    });
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const toastVariants = {
    initial: { opacity: 0, y: 20, scale: 0.9 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
  };

  return (
    <div className="space-y-10 relative">
      <DocHeader 
        title="Toasts" 
        description="Tactical feedback with built-in queue management and mobile responsiveness." 
      />

      {/* Embedded Toast Container for Demo */}
      <div className="fixed bottom-8 right-24 z-[100] flex flex-col gap-2 pointer-events-none">
        <AnimatePresence mode="popLayout">
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              layout
              initial={toastVariants.initial}
              animate={toastVariants.animate}
              exit={toastVariants.exit}
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

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Interactive Demo</h2>
        <p className="opacity-70 text-sm">Click the buttons below to trigger live notifications.</p>
        <Preview>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => addToast("Operation successful", "success")} className="btn-altus bg-emerald-600 border-emerald-700 hover:bg-emerald-700">Success</button>
            <button onClick={() => addToast("An error occurred", "error")} className="btn-altus bg-rose-600 border-rose-700 hover:bg-rose-700">Error</button>
            <button onClick={() => addToast("New system update", "info")} className="btn-altus bg-blue-600 border-blue-700 hover:bg-blue-700">Info</button>
          </div>
        </Preview>
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
