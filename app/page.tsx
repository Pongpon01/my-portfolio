// app/page.tsx
import CustomCursor from "../components/CustomCursor";
import ScrollProgress from "../components/ScrollProgress";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe"; // <-- 1. Import เข้ามา
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#040711] text-white overflow-x-hidden selection:bg-blue-500/30 selection:text-blue-200">
      <ScrollProgress />
      <CustomCursor />

      {/* Background Dot Pattern & Glows */}
      <div className="fixed inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:28px_28px] opacity-35 pointer-events-none" />
      <div className="fixed -top-48 -left-48 w-[550px] h-[550px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed top-1/3 -right-48 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Sections */}
      <Navbar />
      <Hero />
      <AboutMe /> {/* <-- 2. วางต่อจาก Hero ได้เลย */}
      <TechStack />
      <Projects />
      <Experience />
      <Footer />
    </main>
  );
}