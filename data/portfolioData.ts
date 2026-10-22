// data/portfolioData.ts
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiFigma,
  SiCplusplus,
  SiOpencv,
  SiGit,
  SiDocker,
  SiPostman,
  SiHtml5,
  SiCss,
  SiMui,
  SiVercel,
  // ไอคอนภาษาและเครื่องมือเพิ่มเติมจากเรซูเม่
  SiPython,
  SiPhp,
  SiC,
  SiFlutter,
  SiLaravel,
  SiMysql,
  SiRabbitmq,
  SiDiagramsdotnet,
  SiGithub,
  SiJira,
  SiSap,
  SiXampp,
 
  SiSocketdotio,
  
} from "react-icons/si";
import {
  FaJava,
  FaDatabase,
  FaServer,
  FaTasks,
  FaFileAlt,
  FaVideo,
} from "react-icons/fa";
import { IconType } from "react-icons";

export interface SkillItem {
  name: string;
  icon: IconType;
  color: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "Full-Stack" | "UX/UI & Web" | "System & Hardware";
  period: string;     // ข้อความวันที่ที่จะแสดงบนการ์ด เช่น "Sep 2026" หรือ "Jun 2026 – Sep 2026"
  startDate: string;  // ใช้เรียงลำดับจากใหม่ไปเก่าอัตโนมัติ รูปแบบ "YYYY-MM" (เช่น "2026-09")
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  tech: string[];
  coverImage: string;
  gallery: string[];
  liveUrl?: string;
  githubUrl?: string;
  figmaUrl?: string;
}

export interface VideoShowcaseItem {
  id: string;
  title: string;
  subtitle: string;
  duration?: string; // ตั้งเป็น Optional เผื่อไม่ได้ระบุเวลา
  description: string;
  videoUrl: string;
  posterImage: string;
  tags: string[];
}

export const marqueeRow1: SkillItem[] = [
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#ffffff" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Prisma", icon: SiPrisma, color: "#5A67D8" },
  { name: "Java", icon: FaJava, color: "#ED8B00" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
];

export const marqueeRow2: SkillItem[] = [
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#1572B6" },
  { name: "Material UI", icon: SiMui, color: "#007FFF" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Oracle", icon: FaDatabase, color: "#F80000" },
  { name: "RabbitMQ", icon: SiRabbitmq, color: "#FF6600" },
  { name: "Draw.io", icon: SiDiagramsdotnet, color: "#F08705" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
  { name: "Jira", icon: SiJira, color: "#0052CC" },
  { name: "SAP", icon: SiSap, color: "#0FAAFF" },
  { name: "XAMPP", icon: SiXampp, color: "#FB7A24" },
];

export const skillCategories = [
  {
    number: "01",
    title: "Languages",
    skills: [
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Java", icon: FaJava, color: "#ED8B00" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
     
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
    ],
  },
  {
    number: "02",
    title: "Frontend & UX/UI",
    skills: [
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
      { name: "Material UI", icon: SiMui, color: "#007FFF" },
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Draw.io", icon: SiDiagramsdotnet, color: "#F08705" },
    ],
  },
  {
    number: "03",
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "RESTful APIs", icon: FaServer, color: "#38BDF8" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Oracle", icon: FaDatabase, color: "#F80000" },
      { name: "Prisma ORM", icon: SiPrisma, color: "#5A67D8" },
      { name: "RabbitMQ", icon: SiRabbitmq, color: "#FF6600" },
      { name: "WebSockets", icon: SiSocketdotio, color: "#ffffff" },
    ],
  },
  {
    number: "04",
    title: "Tools & Integration",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "Jira", icon: SiJira, color: "#0052CC" },
      { name: "Monday", icon: FaTasks, color: "#FF3D57" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "SAP", icon: SiSap, color: "#0FAAFF" },
      { name: "XAMPP", icon: SiXampp, color: "#FB7A24" },
      { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
      { name: "CapCut", icon: FaVideo, color: "#00F5D4" },
      { name: "MS Office", icon: FaFileAlt, color: "#D83B01" },
    ],
  },
];

// ข้อมูลโปรเจกต์ (จะถูกเรียงจาก startDate ใหม่สุด -> เก่าสุด อัตโนมัติ)
export const projectsData: ProjectItem[] = [
  {
    id: "cpp-qr-scanner",
    title: "Real-Time QR/Barcode Inventory Scanner",
    category: "System & Hardware",
    period: "Oct 2024 – Nov 2024",
    startDate: "2024-10",
    shortDesc:
      "ระบบสแกนบาร์โค้ดและ QR Code ผ่านกล้องเว็บแคมด้วย C++ และ OpenCV เชื่อมต่อฐานข้อมูล PostgreSQL แบบเวลาจริง",
    fullDesc:
      "แอปพลิเคชันประมวลผลภาพสำหรับงานคลังสินค้า ใช้กล้องตรวจจับและถอดรหัส Barcode / QR Code ความเร็วสูงด้วยภาษา C++ ร่วมกับไลบรารี OpenCV แล้วส่งข้อมูลไปตัดสต็อกหรืออัปเดตสถานะในฐานข้อมูล PostgreSQL ทันที",
    highlights: [
      "ประมวลผลภาพจากกล้องแบบ Real-time ด้วย C++ และ OpenCV",
      "เชื่อมต่อและรันคำสั่ง SQL ลงฐานข้อมูล PostgreSQL โดยตรงอย่างรวดเร็ว",
      "ลดขั้นตอนการคีย์ข้อมูลด้วยมือและลดความผิดพลาดในระบบสต็อกสินค้า",
    ],
    tech: ["C++", "OpenCV", "PostgreSQL", "Hardware Integration"],
    coverImage:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    ],
    githubUrl: "https://github.com/Pongpon01",
    liveUrl: "https://www.youtube.com/embed/VsqfdWwWiI4?si=PQ3jEvxDIWFAOdN1",
  },
  {
    id: "vms-traffic",
    title: "VMS Smart Traffic Management Dashboard",
    category: "UX/UI & Web",
    period: "Jun 2025 – Sep 2025",
    startDate: "2025-06",
    shortDesc:
      "ออกแบบ User Flow และ Interactive Dashboard สำหรับระบบบริหารจัดการป้ายจราจรอัจฉริยะ (Variable Message Sign)",
    fullDesc:
      "โปรเจกต์ออกแบบ UX/UI และโครงสร้างการทำงานของระบบควบคุมป้ายจราจรดิจิทัลสำหรับหน่วยงานภาครัฐ เน้นการจัดระเบียบข้อมูลที่ซับซ้อนให้อยู่ในรูปแบบแผนที่และสถานะแบบ Real-time เพื่อให้เจ้าหน้าที่สั่งการและแก้ไขข้อความบนป้ายได้อย่างแม่นยำ",
    highlights: [
      "วางโครงสร้าง User Flow, Wireframe และ Interactive Prototype ใน Figma",
      "ออกแบบระบบควบคุมสถานะป้ายไฟจราจรและการแจ้งเตือนเหตุฉุกเฉิน",
      "สร้าง Design System และ Component Library เพื่อส่งต่อให้ทีมนักพัฒนา",
    ],
    tech: ["Figma", "React", "Tailwind CSS", "Design System"],
    coverImage: "/projects/VMS/Login Filled.png",
    gallery: [
      "/projects/VMS/VMS_Dashboard.png",
      "/projects/VMS/User Management-User Management-Admin views project Admin details.png",
      "/projects/VMS/VMS-VMS Management.png",
      "/projects/VMS/Detail.png",
      "/projects/VMS/VMS-VMS Management_s2.png",
      "/projects/VMS/Project profile Management-Add Project.png",
      "/projects/VMS/Tag-mangement-Sign Config.png",
      "/projects/VMS/VMS-AI Analytic-Analytic-AI Model.png",
      "/projects/VMS/Component 159.png",
      "/projects/VMS/VMS-AI Analytic-Counting.png",
    ],
    figmaUrl: "#",
    liveUrl: "#",
  },
  {
    id: "tiangtrong-system",
    title: "TiangTrong Document Management System",
    category: "Full-Stack",
    period: "Dec 2025 – Mar 2026",
    startDate: "2025-12",
    shortDesc:
      "เว็บแอปพลิเคชันสร้างและจัดการเอกสารทางกฎหมายอัตโนมัติพร้อมระบบ AI ประเมินความเสี่ยงและ Admin Dashboard",
    fullDesc:
      "พัฒนาส่วนติดต่อผู้ใช้งาน (Frontend) และหน้า Dashboard สำหรับผู้ดูแลระบบในโครงการเว็บแอปพลิเคชัน 'เที่ยงตรง' ระบบสร้างเอกสารทางกฎหมายและสัญญาอัตโนมัติ เน้นความถูกต้องของข้อมูลและประสบการณ์การใช้งานที่ราบรื่น",
    highlights: [
      "พัฒนา Responsive Web Interface ด้วย React, Next.js และ Material UI / Tailwind CSS",
      "ออกแบบหน้าจอสร้างเอกสารสัญญา ระบบ AI วิเคราะห์ข้อมูล และหน้าจัดการสำหรับแอดมิน",
      "ทำงานร่วมกับทีมผ่าน Git Workflow และเชื่อมโยง RESTful API",
    ],
    tech: ["Next.js", "React", "Material UI", "Tailwind CSS", "Figma"],
    coverImage: "/projects/Thiangtrong/Thiangtrong.register - Desktop.jpg",
    gallery: [
      "/projects/Thiangtrong/Thiangtrong.Home- Desktop.png",
      "/projects/Thiangtrong/Thiangtrong.dashboard.admin.png",
      "/projects/Thiangtrong/Thiangtrong.register - Desktop.jpg",
      "/projects/Thiangtrong/Thiangtrong.create document.Power of Attorney list 1  - Desktop.png",
      "/projects/Thiangtrong/Thiangtrong - Desktop.png",
      "/projects/Thiangtrong/Thiangtrong.create document.Power of Attorney 3  - Desktop.png",
      "/projects/Thiangtrong/Thiangtrong.create document.Power of Attorney 5  - Desktop.png",
      "/projects/Thiangtrong/Thiangtrong.create document.loan contract list - Desktop.png",
      "/projects/Thiangtrong/Thiangtrong.ai.input data - Desktop.jpg",
      "/projects/Thiangtrong/Thiangtrong.ai.result - Desktop.png",
    ],
    githubUrl: "https://github.com/Pongpon01",
    liveUrl: "#",
  },
  {
    id: "EQS-systems",
    title: "EQS Office Equipment Disbursement System",
    category: "Full-Stack",
    period: "Jun 2024 – Mar 2025",
    startDate: "2024-06",
    shortDesc:
      "ระบบเบิกจ่ายและบริหารจัดการครุภัณฑ์/อุปกรณ์สำนักงาน ติดตามสถานะการยืม-คืน รายการซ่อมบำรุง และจัดการผู้ใช้งาน",
    fullDesc:
      "ออกแบบ UX/UI และพัฒนาเว็บแอปพลิเคชันสำหรับบริหารจัดการและเบิกจ่ายอุปกรณ์สำนักงาน (EQS Systems) รองรับการตรวจสอบรายการอุปกรณ์ตามหมายเลขเครื่อง (Serial Number) ระบบแจ้งซ่อม และการอนุมัติคำขอเบิกจ่ายอย่างเป็นระบบ",
    highlights: [
      "ออกแบบ UX/UI Component Library ใน Figma และพัฒนาหน้าเว็บแบบ Responsive ด้วย React & Tailwind CSS",
      "พัฒนาระบบตารางจัดการรายการอุปกรณ์ สถานะการเบิกจ่าย และประวัติการซ่อมบำรุง",
      "จัดทำหน้า Dashboard สรุปข้อมูลสถิติการเบิกจ่ายอุปกรณ์สำหรับผู้ดูแลระบบ",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Figma"],
    coverImage: "/projects/EQS/EQS0.png",
    gallery: [
      "/projects/EQS/Dashbord.png",
      "/projects/EQS/Fix.png",
      "/projects/EQS/Look.jpg",
      "/projects/EQS/EQS1.png",
      "/projects/EQS/EQS2.png",
      "/projects/EQS/EQS3.png",
      "/projects/EQS/EQS4.png",
      "/projects/EQS/EQS5.png",
      "/projects/EQS/EQS6.png",
      "/projects/EQS/EQS7.png",
      "/projects/EQS/EQS8.png",
    ],
    githubUrl: "https://github.com/Pongpon01",
    liveUrl: "#",
  },
];

// รองรับลิงก์ YouTube ทั้งแบบ https://youtu.be/... และ https://www.youtube.com/embed/...
export const videoShowcases: VideoShowcaseItem[] = [
  {
    id: "video-1",
    title: "Full-Stack Web Application & UX/UI Walkthrough",
    subtitle: "System Architecture & Interactive Dashboard Demo",
    description: "วิดีโอสาธิตการทำงานของระบบเว็บแอปพลิเคชัน",
    videoUrl: "https://youtu.be/w1JDIk46ZDs?si=qixeBmknmV7YiWSO",
    posterImage: "/projects/Thiangtrong/Thiangtrong.Home- Desktop.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
  },
  {
    id: "video-2",
    title: "Real-Time QR Scanner & Database Integration",
    subtitle: "Hardware to PostgreSQL Live Demonstration",
    description: "สาธิตการสแกน QR Code และ Barcode ผ่านกล้อง",
    videoUrl: "https://www.youtube.com/embed/VsqfdWwWiI4?si=PQ3jEvxDIWFAOdN1",
    posterImage:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    tags: ["C++", "OpenCV", "PostgreSQL", "Real-Time"],
  },
];

export const aboutMeData = {
  subtitle: "ABOUT ME",
  description:
    "Software Engineering graduate from Burapha University with hands-on experience building modern business web applications across frontend, backend, database architecture, and UX/UI design. Combining freelance full-stack development with real-world industrial purchasing experience, I understand both technical scalability and how software connects to practical business workflows.",
  stats: [
    {
      label: "Based in",
      value: "Chon Buri, Thailand",
      subValue: "Open to Remote & Relocation",
      iconType: "location",
    },
    {
      label: "Education",
      value: "B.Eng. Software Engineering",
      subValue: "Burapha University",
      iconType: "education",
    },
    {
      label: "Current Focus",
      value: "Full-Stack Web & UX/UI",
      subValue: "Next.js, TypeScript & Prisma",
      iconType: "focus",
    },
    {
      label: "Experience",
      value: "Real-World Systems",
      subValue: "Web Apps, Dashboards & Hardware",
      iconType: "experience",
    },
  ],
};