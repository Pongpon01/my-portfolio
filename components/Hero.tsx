"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaFileDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative z-10 max-w-7xl mx-auto px-6 md:px-14 pt-12 pb-20 min-h-[calc(100vh-5rem)] flex flex-col justify-between"
    >
      <div className="my-auto py-10 flex flex-col-reverse lg:flex-row items-start lg:items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-2"
        >
          <div className="flex items-center gap-4 mb-5">
            <span className="w-12 h-[2px] bg-blue-500 inline-block" />
            <span className="text-sm font-medium text-slate-300 tracking-wide">
              Hello, I&apos;m
            </span>
          </div>

          {/* แก้: ย่อขนาดตามความกว้างจอมือถือด้วย clamp() (จอ sm ขึ้นไปเหมือนเดิม) */}
          <h1 className="text-[length:clamp(2.5rem,15vw,3.75rem)] sm:text-8xl xl:text-[112px] font-extrabold tracking-tight leading-[0.95] text-white">
            Pongphon
          </h1>
          {/* แก้: นามสกุลไม่ล้นขอบขวาบนมือถือ */}
          <h2
            style={{ fontFamily: "var(--font-serif)" }}
            className="text-[length:clamp(2.25rem,11vw,3.75rem)] sm:text-8xl xl:text-[108px] italic font-normal tracking-wide text-slate-200 leading-[0.95] pt-2"
          >
            Sriboonrueng
            <span className="font-sans not-italic font-thin text-blue-400 ml-1">
              |
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative group self-center lg:self-auto"
        >
          <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-full blur-md opacity-60 group-hover:opacity-100 transition duration-500" />
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full border-[4px] border-blue-500/80 overflow-hidden bg-slate-900 flex items-center justify-center shadow-2xl">
            <img
              src="/my-profile.png"
              alt="Pongphon Sriboonrueng"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
        </motion.div>
      </div>

      <div className="border-t border-slate-800/80 pt-8 mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 text-2xl sm:text-3xl font-bold text-blue-400 min-h-[40px]">
          <Typewriter
            words={[
              "Full-Stack Developer",
              "Software Engineer",
              "UX/UI & Web Specialist",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={65}
            deleteSpeed={45}
            delaySpeed={2000}
          />
        </div>

        <p className="lg:col-span-4 text-slate-400 text-sm sm:text-base leading-relaxed">
          Software Engineering graduate with hands-on experience building modern
          business web applications, scalable databases, and intuitive user
          interfaces.
        </p>

        <div className="lg:col-span-3 flex flex-wrap lg:justify-end gap-3">
          <a
            href="#projects"
            className="px-5 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition shadow-lg shadow-blue-600/25"
          >
            View Projects
          </a>
          <a
            href="/ResumePongphon.pdf"
            target="_blank"
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-slate-200 text-sm font-medium transition"
          >
            <FaFileDownload className="text-blue-400" /> Resume
          </a>
        </div>
      </div>
    </section>
  );
}