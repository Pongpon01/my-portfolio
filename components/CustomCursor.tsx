// components/CustomCursor.tsx
"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 26, stiffness: 380, mass: 0.4 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement;
      const clickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") !== null ||
        target.closest("button") !== null ||
        target.closest("[data-cursor-hover]") !== null;

      setIsHovered(clickable);
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      style={{
        translateX: smoothX,
        translateY: smoothY,
      }}
      className="pointer-events-none fixed top-0 left-0 z-50 hidden md:flex items-center justify-center -ml-4 -mt-4"
    >
      <motion.div
        animate={{
          width: isHovered ? 48 : 34,
          height: isHovered ? 48 : 34,
          borderColor: isHovered
            ? "rgba(59, 130, 246, 0.85)"
            : "rgba(148, 163, 184, 0.45)",
          backgroundColor: isHovered
            ? "rgba(59, 130, 246, 0.10)"
            : "rgba(0, 0, 0, 0)",
        }}
        transition={{ duration: 0.15 }}
        className=" rounded-full border flex items-center justify-center"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
      </motion.div>
    </motion.div>
  );
}