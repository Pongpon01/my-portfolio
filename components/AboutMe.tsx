// components/AboutMe.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineMapPin,
  HiOutlineAcademicCap,
  HiOutlineCodeBracket,
  HiOutlineBriefcase,
} from "react-icons/hi2";
import { aboutMeData } from "../data/portfolioData";

export default function AboutMe() {
  const renderIcon = (type: string) => {
    const iconClass = "w-6 h-6 text-blue-400 group-hover:scale-110 group-hover:text-blue-300 transition-transform duration-300";
    switch (type) {
      case "location":
        return <HiOutlineMapPin className={iconClass} />;
      case "education":
        return <HiOutlineAcademicCap className={iconClass} />;
      case "focus":
        return <HiOutlineCodeBracket className={iconClass} />;
      case "experience":
        return <HiOutlineBriefcase className={iconClass} />;
      default:
        return <HiOutlineCodeBracket className={iconClass} />;
    }
  };

  return (
    <section
      id="about"
      className="relative z-10 max-w-7xl mx-auto px-6 md:px-14 py-28 border-t border-slate-800/60"
    >
      {/* 1. Small Top Label (— ABOUT ME) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-3 mb-4"
      >
        <span className="w-8 h-[1.5px] bg-blue-500 inline-block" />
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
          {aboutMeData.subtitle}
        </span>
      </motion.div>

      {/* 2. Heading: Get to know me (with wavy underline) */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white mb-12"
      >
        Get to{" "}
        <span
          style={{ fontFamily: "var(--font-serif)" }}
          className="relative inline-block italic font-normal text-slate-100 px-1"
        >
          know
          {/* Wavy SVG Underline */}
          <svg
            className="absolute -bottom-2 left-0 w-full h-3 text-blue-500"
            viewBox="0 0 120 12"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M2 8.5C25 2.5 48 12.5 72 6.5C92 1.5 106 9.5 118 5.5"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </span>{" "}
        me
      </motion.h2>

      {/* 3. Main Story Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, delay: 0.12 }}
        className="text-xl sm:text-2xl md:text-[26px] text-slate-200 font-medium leading-[1.6] tracking-tight max-w-5xl mb-20"
      >
        {aboutMeData.description}
      </motion.p>

      {/* 4. 4-Column Quick Facts Grid */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-b border-slate-800/90 divide-y sm:divide-y-0 sm:divide-x divide-slate-800/90 bg-[#050914]/40"
      >
        {aboutMeData.stats.map((item, idx) => (
          <div
            key={idx}
            className="group relative p-7 sm:p-8 flex flex-col justify-between hover:bg-blue-950/10 transition-colors duration-300"
          >
            {/* Subtle top highlight line on hover */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            <div className="mb-6">
              {renderIcon(item.iconType)}
            </div>

            <div>
              <span className="text-xs font-medium text-slate-400 block mb-1.5">
                {item.label}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                {item.value}
              </h3>
              {item.subValue && (
                <p className="text-xs text-slate-400 mt-1">
                  {item.subValue}
                </p>
              )}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}