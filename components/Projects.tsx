
// components/Projects.tsx
"use client";
import React, { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaFigma,
  FaPlay,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaCheckCircle,
  FaImages,
  FaExpand,
  FaSearchPlus,
  FaSearchMinus,
  FaRegCalendarAlt,
} from "react-icons/fa";
import {
  projectsData,
  videoShowcases,
  ProjectItem,
} from "../data/portfolioData";

const categories = ["All", "Full-Stack", "UX/UI & Web", "System & Hardware"];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // เรียงลำดับโปรเจกต์จากใหม่ไปเก่า (Newest -> Oldest) ตามค่า startDate ("YYYY-MM")
  const sortedProjects = useMemo(() => {
    return [...projectsData].sort((a, b) =>
      (b.startDate ?? "").localeCompare(a.startDate ?? "")
    );
  }, []);

  // กรองตามหมวดหมู่โดยคงลำดับจากใหม่ไปเก่าไว้เสมอ
  const filtered = useMemo(() => {
    return activeTab === "All"
      ? sortedProjects
      : sortedProjects.filter((p) => p.category === activeTab);
  }, [activeTab, sortedProjects]);

  const getCategoryCount = (cat: string) => {
    if (cat === "All") return projectsData.length;
    return projectsData.filter((p) => p.category === cat).length;
  };

  const openModal = (project: ProjectItem) => setSelectedProject(project);
  const closeModal = useCallback(() => setSelectedProject(null), []);

  return (
    <>
      {/* 1. FEATURED PROJECTS SECTION */}
      <section
        id="projects"
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-14 py-28 border-t border-slate-800/60"
      >
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
              Portfolio Showcase
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight mt-2">
              Featured{" "}
              <span
                style={{ fontFamily: "var(--font-serif)" }}
                className="italic font-normal text-blue-400"
              >
                Projects
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl sm:rounded-full bg-[#090e1a]/90 border border-slate-800/90 backdrop-blur-md self-start lg:self-auto"
          >
            {categories.map((cat) => {
              const isActive = activeTab === cat;
              const count = getCategoryCount(cat);

              return (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`relative px-4 py-2 rounded-xl sm:rounded-full text-xs font-semibold transition-colors duration-200 cursor-pointer flex items-center gap-2 z-10 ${
                    isActive
                      ? "text-white"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="projectFilterPill"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 32,
                      }}
                      className="absolute inset-0 rounded-xl sm:rounded-full bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.45)] -z-10"
                    />
                  )}
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full transition-colors ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-800/80 text-slate-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </div>

        <div className="min-h-[480px]">
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {filtered.map((project, idx) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.94, filter: "blur(6px)", y: 15 }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, filter: "blur(6px)", y: -10 }}
                  transition={{
                    opacity: { duration: 0.25 },
                    filter: { duration: 0.25 },
                    scale: { type: "spring", stiffness: 350, damping: 28 },
                    layout: { type: "spring", stiffness: 320, damping: 30 },
                    delay: idx * 0.04,
                  }}
                  whileHover={{ y: -6 }}
                  className="group rounded-2xl bg-[#090e1a] border border-slate-800/90 hover:border-blue-500/50 overflow-hidden flex flex-col justify-between transition-colors duration-300 shadow-xl shadow-black/30"
                >
                  <div>
                    <div
                      onClick={() => openModal(project)}
                      data-cursor-hover
                      className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900 cursor-pointer"
                    >
                      {/* object-top: โชว์ส่วนหัวเว็บเสมอ / hover แล้วค่อยๆ เลื่อนลงไปส่วนล่าง */}
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover object-top group-hover:object-bottom transition-[object-position] duration-[2500ms] ease-in-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090e1a] via-transparent to-black/20 opacity-85" />

                      {/* หมวดหมู่ (ซ้ายบน) */}
                      <span className="absolute top-4 left-4 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#040711]/85 backdrop-blur-md border border-white/10 text-blue-400">
                        {project.category}
                      </span>

                      {/* ช่วงเวลาที่ทำโปรเจกต์ (ขวาบน) */}
                      {project.period && (
                        <span className="absolute top-4 right-4 flex items-center gap-1.5 text-[11px] font-medium px-3 py-1 rounded-full bg-[#040711]/85 backdrop-blur-md border border-white/10 text-slate-200">
                          <FaRegCalendarAlt className="text-blue-400" size={11} />
                          {project.period}
                        </span>
                      )}

                      <div className="pointer-events-none absolute inset-0 bg-blue-950/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-5">
                        <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-950 text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <FaImages /> ดูรูปภาพและรายละเอียด ({project.gallery.length} รูป)
                        </span>
                      </div>
                    </div>

                    <div className="p-7">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <h3
                            onClick={() => openModal(project)}
                            className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors cursor-pointer"
                          >
                            {project.title}
                          </h3>
                          {project.period && (
                            <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                              <FaRegCalendarAlt className="text-blue-400/80" size={11} />
                              {project.period}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-3 text-slate-400 shrink-0 pt-1">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              title="GitHub Repository"
                              className="hover:text-white transition-colors"
                            >
                              <FaGithub size={18} />
                            </a>
                          )}
                          {project.figmaUrl && (
                            <a
                              href={project.figmaUrl}
                              target="_blank"
                              rel="noreferrer"
                              title="Figma Design"
                              className="hover:text-pink-400 transition-colors"
                            >
                              <FaFigma size={17} />
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              title="Live Preview"
                              className="hover:text-blue-400 transition-colors"
                            >
                              <FaExternalLinkAlt size={15} />
                            </a>
                          )}
                        </div>
                      </div>

                      <p className="text-slate-400 text-sm leading-relaxed">
                        {project.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="px-7 pb-6 pt-3 flex items-center justify-between border-t border-slate-800/60">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 2. VIDEO PRESENTATION SECTION */}
      <section
        id="videos"
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-14 py-24 border-t border-slate-800/60"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 flex items-center gap-2">
            <FaPlay size={10} /> Live Action &amp; Walkthrough
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight mt-2">
            Video{" "}
            <span
              style={{ fontFamily: "var(--font-serif)" }}
              className="italic font-normal text-blue-400"
            >
              Presentations
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl">
            ชมวิดีโอสาธิตการทำงานของระบบจริง การโต้ตอบของผู้ใช้งาน (Interactive UX/UI) และการเชื่อมโยงข้อมูลตั้งแต่หน้าบ้านถึงฐานข้อมูล
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {videoShowcases.map((vid, idx) => (
            <motion.div
              key={vid.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="rounded-2xl bg-[#090e1a] border border-slate-800/90 hover:border-blue-500/40 overflow-hidden shadow-2xl flex flex-col justify-between transition-colors duration-300"
            >
              <div>
                {/* รองรับทั้ง Google Drive, YouTube และไฟล์ MP4 ทั่วไป */}
                <div className="relative aspect-video w-full bg-black border-b border-slate-800">
                  {vid.videoUrl.includes("youtube.com") ||
                  vid.videoUrl.includes("youtu.be") ||
                  vid.videoUrl.includes("drive.google.com") ? (
                    <iframe
                      src={
                        vid.videoUrl.includes("drive.google.com")
                          ? vid.videoUrl.replace(/\/view.*$/, "/preview")
                          : vid.videoUrl
                      }
                      title={vid.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                      allowFullScreen
                    />
                  ) : (
                    <video
                      src={vid.videoUrl}
                      poster={vid.posterImage}
                      controls
                      preload="metadata"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                <div className="p-7">
                  <span className="text-xs font-semibold text-blue-400">
                    {vid.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-3">
                    {vid.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {vid.description}
                  </p>
                </div>
              </div>

              <div className="px-7 pb-6 flex flex-wrap gap-2">
                {vid.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            key={selectedProject.id}
            project={selectedProject}
            onClose={closeModal}
          />
        )}
      </AnimatePresence>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  PROJECT MODAL  (รองรับรูปแนวตั้งยาว / แนวนอน / สี่เหลี่ยม)            */
/* ------------------------------------------------------------------ */

type ViewMode = "fit" | "width";

// 0 = พอดีจอ, ที่เหลือ = คูณความกว้างของพื้นที่แสดงผล
const ZOOM_STEPS = [0, 1, 1.5, 2, 3];
// รูปที่สูงกว่ากว้างเกินอัตราส่วนนี้ ถือว่าเป็น "รูปยาว" (เช่น สกรีนช็อตทั้งหน้าเว็บ)
const TALL_RATIO = 1.3;

function ProjectModal({
  project,
  onClose,
}: {
  project: ProjectItem;
  onClose: () => void;
}) {
  const total = project.gallery.length;
  const [idx, setIdx] = useState(0);
  const [mode, setMode] = useState<ViewMode>("fit");
  const [loadedIdx, setLoadedIdx] = useState<number | null>(null);
  const [failedIdx, setFailedIdx] = useState<number | null>(null);
  const [hintDismissedIdx, setHintDismissedIdx] = useState<number | null>(null);
  const [fullscreen, setFullscreen] = useState(false);
  const [zoomIdx, setZoomIdx] = useState(0);

  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const imgViewportRef = useRef<HTMLDivElement>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const userPickedMode = useRef(false);
  const ratioRef = useRef(1);
  const touchRef = useRef<{ x: number; y: number } | null>(null);

  const loaded = loadedIdx === idx;
  const failed = failedIdx === idx;
  const showHint = mode === "width" && loaded && hintDismissedIdx !== idx;

  const goTo = useCallback((n: number) => {
    if (imgViewportRef.current) imgViewportRef.current.scrollTop = 0;
    setIdx(n);
  }, []);
  const next = useCallback(() => goTo((idx + 1) % total), [goTo, idx, total]);
  const prev = useCallback(
    () => goTo(idx === 0 ? total - 1 : idx - 1),
    [goTo, idx, total]
  );

  const pickMode = (m: ViewMode) => {
    userPickedMode.current = true;
    if (imgViewportRef.current) imgViewportRef.current.scrollTop = 0;
    setMode(m);
  };

  const openFullscreen = () => {
    setZoomIdx(ratioRef.current > TALL_RATIO ? 1 : 0);
    setFullscreen(true);
  };
  const zoomIn = () => setZoomIdx((z) => Math.min(z + 1, ZOOM_STEPS.length - 1));
  const zoomOut = () => setZoomIdx((z) => Math.max(z - 1, 0));

  // ล็อกสกรอลล์พื้นหลัง + โฟกัสปุ่มปิด
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  // คีย์ลัด
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        // กด Esc ครั้งแรกปิดโหมดเต็มจอก่อน แล้วค่อยปิดหน้าต่าง
        if (fullscreen) setFullscreen(false);
        else onClose();
      }
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (fullscreen) {
        if (e.key === "+" || e.key === "=") zoomIn();
        if (e.key === "-") zoomOut();
        if (e.key === "0") setZoomIdx(0);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [fullscreen, next, prev, onClose]);

  // โหลดรูปถัดไป/ก่อนหน้าไว้ล่วงหน้า ให้สลับรูปลื่น
  useEffect(() => {
    if (total < 2) return;
    [(idx + 1) % total, (idx - 1 + total) % total].forEach((i) => {
      const im = new Image();
      im.src = project.gallery[i];
    });
  }, [idx, total, project.gallery]);

  // เปลี่ยนรูปแล้วเลื่อนกลับไปเริ่มที่ส่วนหัวของภาพ (ด้านบนสุด) เสมอ
  useEffect(() => {
    imgViewportRef.current?.scrollTo({ top: 0, behavior: "auto" });
  }, [idx]);

  // เลื่อนภาพย่อให้รูปที่เลือกอยู่กลางแถบ
  useEffect(() => {
    const el = thumbsRef.current?.children[idx] as HTMLElement | undefined;
    el?.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
  }, [idx]);

  const onImgLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const el = e.currentTarget;
    const ratio = el.naturalHeight / el.naturalWidth;
    ratioRef.current = ratio;
    // เลือกโหมดอัตโนมัติ: รูปยาว -> เต็มความกว้าง (เลื่อนอ่านได้), รูปอื่น -> ดูทั้งภาพ
    if (!userPickedMode.current) setMode(ratio > TALL_RATIO ? "width" : "fit");
    setLoadedIdx(idx);
  };

  // ปัดซ้าย/ขวาบนมือถือ
  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchRef.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touchRef.current || total < 2) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchRef.current.x;
    const dy = t.clientY - touchRef.current.y;
    touchRef.current = null;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      dx < 0 ? next() : prev();
    }
  };

  const src = project.gallery[idx];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        initial={{ scale: 0.94, opacity: 0, y: 24 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.94, opacity: 0, y: 24 }}
        transition={{ type: "spring", stiffness: 350, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-[#0b1120] border border-slate-700/70 overflow-hidden shadow-2xl shadow-black/60"
      >
        {/* ปุ่มปิด */}
        <button
          ref={closeBtnRef}
          onClick={onClose}
          aria-label="ปิดหน้าต่าง"
          title="ปิด (Esc)"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 w-10 h-10 rounded-full bg-black/60 hover:bg-white text-white hover:text-slate-900 border border-white/15 backdrop-blur-md flex items-center justify-center transition-all duration-200 hover:rotate-90 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1120]"
        >
          <FaTimes size={16} />
        </button>

        <div className="overflow-y-auto overscroll-contain [scrollbar-width:thin] [scrollbar-color:#334155_transparent]">
          {/* ===== Image Stage ===== */}
          <div
            className="relative h-[52vh] sm:h-[60vh] min-h-[320px] bg-slate-950"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* พื้นหลังเบลอจากรูปเดียวกัน (เฉพาะโหมดดูทั้งภาพ เพื่อไม่ให้เห็นขอบดำโล่ง) */}
            {mode === "fit" && loaded && !failed && (
              <img
                src={src}
                alt=""
                aria-hidden
                className="absolute inset-0 w-full h-full object-cover blur-3xl scale-125 opacity-25 pointer-events-none"
              />
            )}

            {/* Scroll area */}
            <div
              ref={imgViewportRef}
              onScroll={(e) => {
                if (e.currentTarget.scrollTop > 24) setHintDismissedIdx(idx);
              }}
              className={`absolute inset-0 [scrollbar-width:thin] [scrollbar-color:#475569_transparent] ${
                mode === "width"
                  ? "overflow-y-auto overflow-x-hidden"
                  : "overflow-hidden flex items-center justify-center p-4 sm:p-6"
              }`}
            >
              {!failed && (
                <img
                  key={idx}
                  src={src}
                  alt={`${project.title} รูปที่ ${idx + 1}`}
                  draggable={false}
                  onLoad={onImgLoad}
                  onError={() => setFailedIdx(idx)}
                  className={`block select-none transition-opacity duration-300 ${
                    loaded ? "opacity-100" : "opacity-0"
                  } ${
                    mode === "width"
                      ? "w-full h-auto"
                      : "max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-2xl shadow-black/50"
                  }`}
                />
              )}
            </div>

            {/* Loading */}
            {!loaded && !failed && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-9 h-9 rounded-full border-2 border-slate-700 border-t-blue-500 animate-spin" />
              </div>
            )}

            {/* Error */}
            {failed && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-slate-400 text-sm">
                <FaImages size={28} className="opacity-60" />
                ไม่สามารถโหลดรูปภาพนี้ได้
              </div>
            )}

            {/* Toolbar (ซ้ายบน) */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 flex items-center gap-2">
              <div
                role="group"
                aria-label="โหมดแสดงรูป"
                className="flex p-1 rounded-full bg-black/65 backdrop-blur-md border border-white/10 text-[11px] font-semibold"
              >
                {(["fit", "width"] as const).map((m) => (
                  <button
                    key={m}
                    onClick={() => pickMode(m)}
                    aria-pressed={mode === m}
                    className={`px-3 py-1.5 rounded-full transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                      mode === m
                        ? "bg-blue-600 text-white"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {m === "fit" ? "ดูทั้งภาพ" : "เต็มความกว้าง"}
                  </button>
                ))}
              </div>
              <button
                onClick={openFullscreen}
                aria-label="ดูแบบเต็มจอและซูม"
                title="เต็มจอ / ซูม"
                className="w-9 h-9 rounded-full bg-black/65 hover:bg-blue-600 text-white border border-white/10 backdrop-blur-md flex items-center justify-center transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <FaExpand size={13} />
              </button>
            </div>

            {/* Prev / Next */}
            {total > 1 && (
              <>
                <button
                  onClick={prev}
                  aria-label="รูปก่อนหน้า"
                  className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/55 hover:bg-blue-600 text-white border border-white/10 backdrop-blur-md flex items-center justify-center transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  <FaChevronLeft size={14} />
                </button>
                <button
                  onClick={next}
                  aria-label="รูปถัดไป"
                  className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/55 hover:bg-blue-600 text-white border border-white/10 backdrop-blur-md flex items-center justify-center transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  <FaChevronRight size={14} />
                </button>
              </>
            )}

            {/* Counter */}
            {total > 1 && (
              <span className="absolute bottom-4 left-4 z-20 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/10 text-[11px] font-medium text-slate-200">
                {idx + 1} / {total}
              </span>
            )}

            {/* Scroll hint */}
            {showHint && (
              <>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 z-20 px-3 py-1 rounded-full bg-white/90 text-slate-900 text-[11px] font-semibold shadow-lg animate-bounce">
                  เลื่อนลงเพื่อดูต่อ ↓
                </span>
              </>
            )}
          </div>

          {/* ===== Thumbnails ===== */}
          {total > 1 && (
            <div
              ref={thumbsRef}
              className="flex gap-2 px-6 sm:px-8 pt-4 overflow-x-auto [scrollbar-width:none]"
            >
              {project.gallery.map((t, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`ดูรูปที่ ${i + 1}`}
                  aria-current={idx === i}
                  className={`relative shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                    idx === i
                      ? "border-blue-500 opacity-100"
                      : "border-transparent opacity-50 hover:opacity-90"
                  }`}
                >
                  {/* object-top: รูปยาวจะโชว์ส่วนบนสุด ไม่ถูกครอปตรงกลาง */}
                  <img
                    src={t}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover object-top"
                  />
                </button>
              ))}
            </div>
          )}

          {/* ===== Content ===== */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                    {project.category}
                  </span>
                  {project.period && (
                    <>
                      <span className="text-slate-600">•</span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 bg-white/[0.05] px-2.5 py-0.5 rounded-full border border-white/10">
                        <FaRegCalendarAlt className="text-blue-400" size={11} />
                        {project.period}
                      </span>
                    </>
                  )}
                </div>
                <h3
                  id="project-modal-title"
                  className="text-2xl sm:text-3xl font-bold text-white mt-1.5 leading-tight"
                >
                  {project.title}
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-xs font-semibold text-white transition-colors"
                  >
                    <FaGithub size={15} /> Source Code
                  </a>
                )}
                {project.figmaUrl && (
                  <a
                    href={project.figmaUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-xs font-semibold text-white transition-colors"
                  >
                    <FaFigma size={14} /> Figma
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white transition-colors shadow-lg shadow-blue-600/25"
                  >
                    <FaExternalLinkAlt size={12} /> Live Demo
                  </a>
                )}
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
              {project.fullDesc}
            </p>

            <div className="space-y-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] p-5">
              <h4 className="text-sm font-bold text-white">
                Key Highlights &amp; Responsibilities
              </h4>
              <ul className="space-y-2.5">
                {project.highlights.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed"
                  >
                    <FaCheckCircle className="text-blue-500 mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
              {projectTechList(project.tech)}
            </div>
          </div>
        </div>

        {/* แถบปิดสำหรับมือถือ */}
        <div className="sm:hidden shrink-0 p-3 border-t border-slate-800 bg-[#0b1120]">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-sm font-semibold text-white transition-colors cursor-pointer"
          >
            ปิดหน้าต่าง
          </button>
        </div>

        {/* ===== Fullscreen viewer (Portal เพื่อไม่ติดกรอบ transform ของ modal) ===== */}
        {fullscreen &&
          createPortal(
            <FullscreenViewer
              src={src}
              title={project.title}
              index={idx}
              total={total}
              zoomIdx={zoomIdx}
              onZoomIn={zoomIn}
              onZoomOut={zoomOut}
              onFit={() => setZoomIdx(0)}
              onPrev={prev}
              onNext={next}
              onClose={() => setFullscreen(false)}
            />,
            document.body
          )}
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  FULLSCREEN VIEWER  (ซูม + ลากเพื่อเลื่อนดู)                         */
/* ------------------------------------------------------------------ */

function FullscreenViewer({
  src,
  title,
  index,
  total,
  zoomIdx,
  onZoomIn,
  onZoomOut,
  onFit,
  onPrev,
  onNext,
  onClose,
}: {
  src: string;
  title: string;
  index: number;
  total: number;
  zoomIdx: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onFit: () => void;
  onPrev: () => void;
  onNext: () => void;
  onClose: () => void;
}) {
  const zoom = ZOOM_STEPS[zoomIdx];
  const areaRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; y: number; sl: number; st: number } | null>(null);
  const [dragging, setDragging] = useState(false);

  // เปลี่ยนรูป -> กลับไปบนสุด
  useEffect(() => {
    areaRef.current?.scrollTo({ top: 0, left: 0 });
  }, [src]);

  const btn =
    "w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-white/10 text-white flex items-center justify-center transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} ดูแบบเต็มจอ`}
      className="fixed inset-0 z-[70] bg-black/95 flex flex-col"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Top bar */}
      <div className="shrink-0 flex items-center justify-between gap-3 px-4 py-3 border-b border-white/10">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-white truncate">{title}</p>
          {total > 1 && (
            <p className="text-[11px] text-slate-400">
              รูปที่ {index + 1} / {total}
            </p>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onZoomOut}
            disabled={zoomIdx === 0}
            aria-label="ซูมออก"
            title="ซูมออก (-)"
            className={btn}
          >
            <FaSearchMinus size={14} />
          </button>
          <button
            onClick={onFit}
            aria-label="พอดีจอ"
            title="พอดีจอ (0)"
            className="min-w-[72px] h-10 px-3 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            {zoom === 0 ? "พอดีจอ" : `${Math.round(zoom * 100)}%`}
          </button>
          <button
            onClick={onZoomIn}
            disabled={zoomIdx === ZOOM_STEPS.length - 1}
            aria-label="ซูมเข้า"
            title="ซูมเข้า (+)"
            className={btn}
          >
            <FaSearchPlus size={14} />
          </button>
          <span className="w-px h-6 bg-white/15 mx-1" />
          <button
            onClick={onClose}
            aria-label="ออกจากเต็มจอ"
            title="ปิด (Esc)"
            className={`${btn} hover:!bg-white hover:!text-slate-900`}
          >
            <FaTimes size={16} />
          </button>
        </div>
      </div>

      {/* Image area */}
      <div className="relative flex-1 min-h-0">
        <div
          ref={areaRef}
          onPointerDown={(e) => {
            if (zoom === 0 || e.pointerType !== "mouse") return;
            const el = e.currentTarget;
            drag.current = { x: e.clientX, y: e.clientY, sl: el.scrollLeft, st: el.scrollTop };
            el.setPointerCapture(e.pointerId);
            setDragging(true);
          }}
          onPointerMove={(e) => {
            const d = drag.current;
            if (!d) return;
            const el = e.currentTarget;
            el.scrollLeft = d.sl - (e.clientX - d.x);
            el.scrollTop = d.st - (e.clientY - d.y);
          }}
          onPointerUp={() => {
            drag.current = null;
            setDragging(false);
          }}
          onPointerCancel={() => {
            drag.current = null;
            setDragging(false);
          }}
          className={`absolute inset-0 [scrollbar-width:thin] [scrollbar-color:#475569_transparent] ${
            zoom === 0
              ? "overflow-hidden flex items-center justify-center p-4"
              : `overflow-auto ${dragging ? "cursor-grabbing" : "cursor-grab"}`
          }`}
        >
          <img
            src={src}
            alt={title}
            draggable={false}
            style={zoom === 0 ? undefined : { width: `${zoom * 100}%`, maxWidth: "none" }}
            className={`block select-none ${
              zoom === 0
                ? "max-w-full max-h-full w-auto h-auto object-contain"
                : "h-auto"
            }`}
          />
        </div>

        {total > 1 && (
          <>
            <button
              onClick={onPrev}
              aria-label="รูปก่อนหน้า"
              className={`${btn} absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 backdrop-blur-md border border-white/10`}
            >
              <FaChevronLeft size={14} />
            </button>
            <button
              onClick={onNext}
              aria-label="รูปถัดไป"
              className={`${btn} absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 backdrop-blur-md border border-white/10`}
            >
              <FaChevronRight size={14} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

function projectTechList(tech: string[]) {
  return tech.map((t) => (
    <span
      key={t}
      className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
    >
      {t}
    </span>
  ));
}