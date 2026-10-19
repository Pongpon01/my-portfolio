"use client";
import React from "react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative z-10 max-w-7xl mx-auto px-6 md:px-14 py-24 border-t border-slate-800/60"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
            Career Path
          </span>
          <h3 className="text-3xl sm:text-4xl font-bold mt-2 mb-8">Experience</h3>

          <div className="space-y-8 border-l-2 border-slate-800 pl-6">
            <div className="relative">
              <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-blue-500 ring-4 ring-[#040711]" />
              <span className="text-xs font-semibold text-blue-400 uppercase">
                Present
              </span>
              <h4 className="text-lg font-bold mt-1">
                Freelance Full-Stack &amp; UX/UI Developer
              </h4>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                รับพัฒนาเว็บแอปพลิเคชันและออกแบบ UX/UI ด้วย Next.js, React, Tailwind CSS, Prisma และ Figma ให้กับองค์กรและโปรเจกต์ภายนอก (อาทิ ระบบเบิกจ่ายอุปกรณ์สำนักงานร่วมกับ Exvention, ระบบจัดการเอกสารเที่ยงตรง และแดชบอร์ดระบบจราจร VMS)
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-600 ring-4 ring-[#040711]" />
              <span className="text-xs font-semibold text-slate-400 uppercase">
                Previous Experience
              </span>
              <h4 className="text-lg font-bold mt-1">
                Purchasing Officer (Electronics Manufacturing)
              </h4>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                ดูแลกระบวนการจัดซื้อและประสานงานซัพพลายเชนในโรงงานประกอบชิ้นส่วนอิเล็กทรอนิกส์ เข้าใจกระบวนการทำงานในระบบอุตสาหกรรมและการจัดการข้อมูลคลังสินค้า
              </p>
            </div>
          </div>
        </div>

        <div id="education">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
            Academic Background
          </span>
          <h3 className="text-3xl sm:text-4xl font-bold mt-2 mb-8">Education</h3>

          <div className="p-7 rounded-2xl bg-[#090e1a] border border-slate-800/80">
            <span className="text-xs font-semibold text-blue-400 uppercase">
              Bachelor&apos;s Degree
            </span>
            <h4 className="text-xl font-bold mt-1">
              B.Eng. in Software Engineering
            </h4>
            <p className="text-slate-300 text-sm font-medium mt-1">
              Burapha University (มหาวิทยาลัยบูรพา)
            </p>
            <p className="text-slate-400 text-sm mt-4 leading-relaxed">
              ศึกษาด้านวิศวกรรมซอฟต์แวร์ การออกแบบสถาปัตยกรรมระบบ การพัฒนาเว็บแอปพลิเคชันแบบ Full-Stack การจัดการฐานข้อมูล และกระบวนการควบคุมคุณภาพซอฟต์แวร์
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}