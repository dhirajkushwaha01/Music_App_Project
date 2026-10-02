"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/utils/cn";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const activeCardRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardCentersRef = useRef<number[]>([]);
  const [bottomPadding, setBottomPadding] = useState(120);

  const backgroundColors = [
    "#000000", // pure black
    "#090d16", // deep midnight blue
    "#060d0e", // deep cyan night
    "#0d0814", // deep purple night
  ];

  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)",
    "linear-gradient(to bottom right, #3b82f6, #06b6d4)",
    "linear-gradient(to bottom right, #8b5cf6, #ec4899)",
    "linear-gradient(to bottom right, #f97316, #eab308)",
  ];

  // Measure card centers once on mount / resize (eliminates layout thrashing in scroll loop)
  const measureCenters = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    cardCentersRef.current = itemRefs.current.map((el) => {
      if (!el) return 0;
      return el.offsetTop + el.clientHeight / 2;
    });

    const lastItem = itemRefs.current[content.length - 1];
    if (lastItem) {
      // Dynamic padding so Card 4 is centered when container is at its exact physical bottom
      const pad = Math.max(30, container.clientHeight / 2 - lastItem.clientHeight / 2);
      setBottomPadding(Math.round(pad));
    }
  }, [content.length]);

  // Fast card tracking: checks cached centers, only triggers React re-render when index changes
  const updateActiveCard = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerCenter = container.scrollTop + container.clientHeight / 2;
    const centers = cardCentersRef.current;
    if (centers.length === 0) return;

    let closestIndex = 0;
    let minDistance = Infinity;

    for (let i = 0; i < centers.length; i++) {
      const distance = Math.abs(containerCenter - centers[i]);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    }

    if (closestIndex !== activeCardRef.current) {
      activeCardRef.current = closestIndex;
      setActiveCard(closestIndex);
    }
  }, []);

  // Smooth scroll to a specific card on click
  const scrollToCard = (index: number) => {
    activeCardRef.current = index;
    setActiveCard(index);
    const targetElement = itemRefs.current[index];
    const container = containerRef.current;
    if (targetElement && container) {
      const targetCenter = targetElement.offsetTop - (container.clientHeight / 2 - targetElement.clientHeight / 2);
      const maxScroll = container.scrollHeight - container.clientHeight;
      container.scrollTo({
        top: Math.max(0, Math.min(maxScroll, targetCenter)),
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    measureCenters();
    window.addEventListener("resize", measureCenters);
    return () => window.removeEventListener("resize", measureCenters);
  }, [measureCenters]);

  // High-performance wheel handling with bidirectional hand-off (UP & DOWN) to main page
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let targetScroll = container.scrollTop;
    let animId: number | null = null;
    let isWheeling = false;

    const smoothStep = () => {
      const current = container.scrollTop;
      const diff = targetScroll - current;

      if (Math.abs(diff) > 0.5) {
        container.scrollTop = current + diff * 0.22; // Snappy, zero-lag easing
        animId = requestAnimationFrame(smoothStep);
      } else {
        container.scrollTop = targetScroll;
        animId = null;
        isWheeling = false;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      const maxScroll = container.scrollHeight - container.clientHeight;
      const currentScroll = container.scrollTop;

      const isAtTop = currentScroll <= 3;
      const isAtBottom = currentScroll >= maxScroll - 3;

      // 1. Scrolling UP at the top boundary: IMMEDIATELY hand off scroll to the entire page!
      if (isAtTop && e.deltaY < 0) {
        if (typeof window !== "undefined") {
          const lenis = (window as any).__lenis;
          if (lenis) {
            lenis.scrollTo(window.scrollY + e.deltaY * 1.2, { immediate: false });
          } else {
            window.scrollBy({ top: e.deltaY, behavior: "auto" });
          }
        }
        return; // Event bubbles cleanly to page
      }

      // 2. Scrolling DOWN at the bottom boundary: IMMEDIATELY hand off scroll to the entire page!
      if (isAtBottom && e.deltaY > 0) {
        if (typeof window !== "undefined") {
          const lenis = (window as any).__lenis;
          if (lenis) {
            lenis.scrollTo(window.scrollY + e.deltaY * 1.2, { immediate: false });
          } else {
            window.scrollBy({ top: e.deltaY, behavior: "auto" });
          }
        }
        return; // Event bubbles cleanly to page
      }

      // 3. Inside the container: intercept and smoothly transition between cards
      e.preventDefault();
      e.stopPropagation();

      if (!isWheeling) {
        targetScroll = currentScroll;
        isWheeling = true;
      }

      // Responsive, smooth scroll speed (0.35 factor)
      const dampenedDelta = e.deltaY * 0.35;
      targetScroll = Math.max(0, Math.min(maxScroll, targetScroll + dampenedDelta));

      if (!animId) {
        animId = requestAnimationFrame(smoothStep);
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("scroll", updateActiveCard, { passive: true });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("scroll", updateActiveCard);
      if (animId) cancelAnimationFrame(animId);
    };
  }, [updateActiveCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      transition={{ duration: 0.4 }}
      className="relative flex h-[34rem] justify-center gap-6 sm:gap-10 md:gap-16 lg:gap-24 overflow-y-auto rounded-3xl p-6 sm:p-10 border border-white/10 no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden overscroll-y-auto"
      ref={containerRef}
    >
      {/* Left Column: Interactive Cards */}
      <div className="relative flex items-start px-2 sm:px-4 max-w-xl">
        <div className="w-full">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              data-index={index}
              onClick={() => scrollToCard(index)}
              className="py-14 sm:py-20 cursor-pointer group transition-all duration-300 min-h-[17rem] flex flex-col justify-center"
            >
              <div className="flex items-center gap-3 mb-2.5">
                <span
                  className={cn(
                    "text-xs font-bold px-3 py-1 rounded-full transition-all duration-300",
                    activeCard === index
                      ? "bg-teal-500/20 text-teal-300 border border-teal-500/40 shadow-[0_0_12px_rgba(20,184,166,0.2)]"
                      : "bg-white/5 text-gray-400 border border-white/10 group-hover:text-white"
                  )}
                >
                  0{index + 1}
                </span>
                <span
                  className={cn(
                    "text-xs font-medium transition-colors",
                    activeCard === index ? "text-teal-400" : "text-gray-500"
                  )}
                >
                  {activeCard === index ? "● Active Step" : "Click to view"}
                </span>
              </div>

              <motion.h2
                animate={{
                  opacity: activeCard === index ? 1 : 0.35,
                  scale: activeCard === index ? 1 : 0.98,
                }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "text-2xl sm:text-3xl font-extrabold transition-colors duration-300",
                  activeCard === index ? "text-white" : "text-gray-400 group-hover:text-gray-200"
                )}
              >
                {item.title}
              </motion.h2>

              <motion.p
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                transition={{ duration: 0.3 }}
                className="text-sm sm:text-base mt-4 text-gray-300 leading-relaxed max-w-md"
              >
                {item.description}
              </motion.p>

              {/* Mobile Inline Picture Preview */}
              <div className="mt-6 block lg:hidden w-full h-56 sm:h-64 rounded-2xl overflow-hidden border border-white/15 shadow-xl relative">
                {item.content}
              </div>
            </div>
          ))}
          {/* Exact calculated bottom padding so Card 4 is centered right at physical bottom */}
          <div style={{ height: `${bottomPadding}px` }} />
        </div>
      </div>

      {/* Right Column: Sticky Picture Card on Desktop */}
      <div className="hidden lg:flex flex-col items-center sticky top-10 h-fit self-start">
        <div
          style={{ background: linearGradients[activeCard % linearGradients.length] }}
          className={cn(
            "p-[1px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500",
            contentClassName
          )}
        >
          <div className="h-76 w-92 rounded-3xl overflow-hidden bg-black/85 backdrop-blur-xl relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCard}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full h-full"
              >
                {content[activeCard]?.content ?? null}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Step Indicator Pills */}
        <div className="flex items-center gap-2 mt-5 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          {content.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => scrollToCard(dotIdx)}
              title={`Jump to step ${dotIdx + 1}`}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300 cursor-pointer",
                activeCard === dotIdx
                  ? "w-8 bg-teal-400 shadow-[0_0_12px_rgba(20,184,166,0.7)]"
                  : "w-2.5 bg-white/20 hover:bg-white/40"
              )}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};