// components/ScrollProgress.tsx
"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const [showTopBtn, setShowTopBtn] = useState(false);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setPercent(Math.round(latest * 100));
      setShowTopBtn(latest > 0.12);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Top Gradient Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-500 origin-left z-50 shadow-[0_0_12px_#3b82f6]"
      />

      {/* Floating Scroll-to-Top Button with Circular Progress */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-7 right-7 z-50 group flex items-center justify-center w-13 h-13 rounded-full bg-[#090e1a]/90 backdrop-blur-md border border-slate-700/80 shadow-2xl shadow-blue-900/30 cursor-pointer"
          >
            {/* SVG Progress Ring */}
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 52 52">
              <circle
                cx="26"
                cy="26"
                r="23"
                fill="none"
                stroke="rgba(30, 41, 59, 0.6)"
                strokeWidth="2.5"
              />
              <circle
                cx="26"
                cy="26"
                r="23"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2.5"
                strokeDasharray={2 * Math.PI * 23}
                strokeDashoffset={2 * Math.PI * 23 * (1 - percent / 100)}
                strokeLinecap="round"
                className="transition-all duration-150"
              />
            </svg>

            <FaArrowUp className="text-blue-400 group-hover:text-white group-hover:-translate-y-0.5 transition-all text-sm" />

            {/* Tooltip on Hover */}
            <span className="pointer-events-none absolute right-16 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-200 opacity-0 group-hover:opacity-100 transition whitespace-nowrap shadow-lg">
              Back to Top ({percent}%)
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}