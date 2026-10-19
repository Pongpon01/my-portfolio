"use client";
import React from "react";
import { motion } from "framer-motion";
import { marqueeRow1, marqueeRow2, skillCategories } from "../data/portfolioData";

export default function TechStack() {
  return (
    <section
  id="skills"
  className="relative z-10 max-w-7xl mx-auto px-6 md:px-14 py-28 border-t border-slate-800/60"
>
      {/* Heading with Wavy Underline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
          Tech stack <br />
          I{" "}
          <span
            style={{ fontFamily: "var(--font-serif)" }}
            className="relative inline-block italic font-normal text-slate-100 px-1"
          >
            work
            {/* Wavy SVG Underline */}
            <svg
              className="absolute -bottom-2 left-0 w-full h-3 text-blue-500"
              viewBox="0 0 120 12"
              fill="none"
               preserveAspectRatio="none"
            >
              <path
                d="M2 8.5C22 2.5 42 12.5 62 6.5C82 0.5 102 10.5 118 4.5"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          with
        </h2>
      </motion.div>

      {/* Dual Infinite Marquee with Gradient Fade Edges */}
      <div
        className="relative overflow-hidden py-6 space-y-7 mb-16"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        {/* Row 1 (Large Icons Moving Left) */}
        <div className="animate-marquee-left gap-14 items-center">
          {[...marqueeRow1, ...marqueeRow1].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3.5 text-slate-400 hover:text-white transition duration-300"
              >
                <Icon className="text-3xl sm:text-4xl" style={{ color: item.color }} />
                <span className="text-2xl sm:text-3xl font-bold tracking-tight">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Row 2 (Medium Icons Moving Right) */}
        <div className="animate-marquee-right gap-12 items-center">
          {[...marqueeRow2, ...marqueeRow2].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 text-slate-400 hover:text-white transition duration-300"
              >
                <Icon className="text-xl sm:text-2xl" style={{ color: item.color }} />
                <span className="text-lg sm:text-xl font-semibold">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Categorized Numbered Rows (เหมือนด้านล่างของรูปตัวอย่าง) */}
      <div className="border-t border-slate-800">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.number}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="grid grid-cols-1 md:grid-cols-12 items-center gap-6 py-8 border-b border-slate-800/80"
          >
            {/* Left Label & Number */}
            <div className="md:col-span-4">
              <h3 className="text-base font-bold text-white">{cat.title}</h3>
              <span className="text-xs font-mono text-slate-500 mt-1 block">
                {cat.number}
              </span>
            </div>

            {/* Right Pill Badges */}
            <div className="md:col-span-8 flex flex-wrap gap-3">
              {cat.skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#0b1120] border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition duration-300 shadow-sm"
                  >
                    <Icon className="text-base" style={{ color: skill.color }} />
                    <span className="text-xs sm:text-sm font-semibold text-slate-200">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}