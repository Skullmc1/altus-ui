"use client";

import { CodeBlock, DocHeader, Preview, DocFooter } from "@/components/docs-ui";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function AccordionItem({ title, children }: { title: string, children: React.ReactNode }) {
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

export default function AccordionPage() {
  return (
    <div className="space-y-10">
      <DocHeader 
        title="Accordion" 
        description="Expandable sections for organizing dense information." 
      />

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Example</h2>
        <Preview>
          <div className="altus-accordion w-full max-w-md">
            <AccordionItem title="What is Altus UI?">
              Altus UI is a design system and component library built for professional applications.
            </AccordionItem>
            <AccordionItem title="Is it free to use?">
              Yes, Altus UI is open source and free for personal and commercial projects.
            </AccordionItem>
            <AccordionItem title="Can I customize it?">
              Absolutely. The system relies on CSS variables which can be overridden easily.
            </AccordionItem>
          </div>
        </Preview>
        <CodeBlock code={`<div className="altus-accordion">
  <div className="altus-accordion-item">
    <button className="altus-accordion-trigger">Title</button>
    <div className="altus-accordion-content">Content...</div>
  </div>
</div>`} />
      </section>

      <DocFooter 
        backHref="/docs/toasts" 
        backLabel="Toasts"
      />
    </div>
  );
}
