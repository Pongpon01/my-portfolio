import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Pongphon Sriboonrueng | Full-Stack Developer",
  description: "Software Engineer & Full-Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${sans.variable}${serif.variable} font-sans bg-[#040711] text-slate-100 antialiased selection:bg-blue-500/30 selection:text-blue-200`}
      >
        {children}
      </body>
    </html>
  );
}