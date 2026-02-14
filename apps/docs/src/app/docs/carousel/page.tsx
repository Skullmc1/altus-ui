"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CodeBlock, DocHeader, Preview, DocFooter } from "@/components/docs-ui";

export default function CarouselPage() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    const calculateConstraints = () => {
      if (carouselRef.current) {
        const containerWidth = carouselRef.current.offsetWidth;
        const contentWidth = carouselRef.current.scrollWidth;
        setDragConstraints({ left: -(contentWidth - containerWidth + 48), right: 0 });
      }
    };

    calculateConstraints();
    const timer = setTimeout(calculateConstraints, 100);
    window.addEventListener("resize", calculateConstraints);
    return () => {
      window.removeEventListener("resize", calculateConstraints);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="space-y-10">
      <DocHeader 
        title="Carousel / Slider" 
        description="A high-performance kinetic slider for showcases and galleries." 
      />

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Kinetic Slider</h2>
        <p className="opacity-70 text-sm">A native-feeling horizontal scroller with draggable physics and sleek interactions.</p>
        
        <div className="border border-altus-border rounded-altus bg-altus-bg relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-altus-bg to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-altus-bg to-transparent z-10 pointer-events-none" />
          
          <div ref={carouselRef} className="overflow-hidden px-8">
            <motion.div 
              className="flex gap-6 py-12 cursor-grab active:cursor-grabbing w-max"
              drag="x"
              dragConstraints={dragConstraints}
              dragElastic={0.1}
              dragMomentum={true}
            >
              {[1, 2, 3, 4, 5].map(i => (
                <motion.div 
                  key={i} 
                  className="flex-none w-[300px] space-y-4"
                  whileHover={{ y: -5 }}
                >
                  <div className="aspect-[16/10] bg-altus-muted rounded-2xl border border-altus-border flex items-center justify-center overflow-hidden relative group/item">
                    <div className="absolute inset-0 bg-altus-primary/5 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                    <span className="text-5xl font-black opacity-5">0{i}</span>
                  </div>
                  <div className="px-1 flex justify-between items-center">
                    <h4 className="font-bold text-sm tracking-tight">Project Node {i}</h4>
                    <span className="altus-badge !text-[8px] !px-2">2026</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <CodeBlock code={`<div ref={containerRef} className="overflow-hidden">
  <motion.div 
    drag="x" 
    dragConstraints={{ left: -1200, right: 0 }}
    className="flex gap-8"
  >
    <div className="flex-none w-[400px]">...</div>
    {/* More items */}
  </motion.div>
</div>`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Scaffold via CLI</h2>
        <p className="opacity-70 text-sm">Add the kinetic project slider to your application.</p>
        <CodeBlock code={`bun x @altus-ui/cli add carousel`} />
      </section>

      <DocFooter 
        backHref="/docs/progress" 
        backLabel="Progress Indicators"
        nextHref="/docs/breadcrumbs" 
        nextLabel="Breadcrumbs" 
      />
    </div>
  );
}
