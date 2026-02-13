"use client";

import { CodeBlock, DocHeader, Preview, DocFooter } from "@/components/docs-ui";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ModalsPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-10">
      <DocHeader 
        title="Modals" 
        description="High-performance dialogs with kinetic spring animations." 
      />

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Interactive Demo</h2>
        <p className="opacity-70 text-sm">Modals in Altus UI use fixed positioning to break out of parent containers.</p>
        <Preview>
          <button className="btn-altus" onClick={() => setIsOpen(true)}>Open Perspective Modal</button>

          <AnimatePresence>
            {isOpen && (
              <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="altus-overlay absolute inset-0" 
                  onClick={() => setIsOpen(false)} 
                />
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: 10 }}
                  transition={{ type: "spring", damping: 25, stiffness: 400 }}
                  className="altus-modal relative w-full max-w-lg"
                >
                  <h3 className="font-bold text-xl mb-3">System Perspective</h3>
                  <p className="text-sm opacity-60 mb-8 leading-relaxed">
                    This modal is rendered with fixed positioning, ensuring it remains visible regardless of parent overflow settings.
                  </p>
                  <div className="flex justify-end gap-3">
                    <button className="btn-altus-outline px-6" onClick={() => setIsOpen(false)}>Dismiss</button>
                    <button className="btn-altus px-6" onClick={() => setIsOpen(false)}>Accept</button>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </Preview>
        <CodeBlock code={`<div className="fixed inset-0 z-[100] flex items-center justify-center">
  <div className="altus-overlay" />
  <div className="altus-modal">
    <h3>Modal Title</h3>
    <p>Modal content...</p>
  </div>
</div>`} />
      </section>

      <DocFooter 
        backHref="/docs/cards" 
        backLabel="Cards & Layout"
        nextHref="/docs/toasts" 
        nextLabel="Toasts" 
      />
    </div>
  );
}
