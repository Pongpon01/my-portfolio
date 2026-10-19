// components/Footer.tsx
"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCheck,
  FaRegCopy,
  FaFileDownload,
} from "react-icons/fa";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [year, setYear] = useState(2026);
  const email = "pongphonsriboonrueng@gmail.com"; // เปลี่ยนเป็นอีเมลจริงของคุณ

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer
      id="contact"
      className="relative z-10 border-t border-slate-800/80 bg-[#02040a] pt-24 pb-14 px-6 md:px-14"
    >
      <div className="max-w-7xl mx-auto">
        {/* Call to Action Box */}
        <div className="relative rounded-3xl bg-gradient-to-b from-slate-900/90 to-[#050914] border border-slate-800 p-8 sm:p-14 mb-16 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Available for Full-Time &amp; Freelance Opportunities
              </div>

              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Let&apos;s build something{" "}
                <span
                  style={{ fontFamily: "var(--font-serif)" }}
                  className="italic font-normal text-blue-400"
                >
                  impactful
                </span>{" "}
                together.
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
                กำลังมองหาตำแหน่ง Software Engineer / Full-Stack Developer หรือต้องการปรึกษาโปรเจกต์พัฒนาเว็บแอปพลิเคชัน สามารถคัดลอกอีเมลหรือดาวน์โหลดเรซูเม่ด้านล่างได้เลยครับ
              </p>
            </div>

            {/* Interactive Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={handleCopyEmail}
                className="relative flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition shadow-lg shadow-blue-600/25 cursor-pointer"
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.span
                      key="copied"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="flex items-center gap-2 text-emerald-200"
                    >
                      <FaCheck /> Copied: {email}
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copy"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="flex items-center gap-2.5"
                    >
                      <FaRegCopy /> {email}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              <a
                href="/ResumePongphon.pdf"
                target="_blank"
                className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-200 font-semibold text-sm transition"
              >
                <FaFileDownload className="text-blue-400" /> Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-slate-800/60 text-xs text-slate-500">
          <p>
            © {year} Pongphon Sriboonrueng. Built with Next.js, TypeScript
            &amp; Tailwind CSS.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Pongpon01"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-white/[0.04] hover:bg-blue-600 text-slate-400 hover:text-white transition"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-white/[0.04] hover:bg-blue-600 text-slate-400 hover:text-white transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href={`mailto:${email}`}
              className="p-2.5 rounded-full bg-white/[0.04] hover:bg-blue-600 text-slate-400 hover:text-white transition"
              aria-label="Email"
            >
              <FaEnvelope size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}