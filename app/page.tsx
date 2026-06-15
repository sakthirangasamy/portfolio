"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import ParticleBackground from "./components/ParticleBackground";
import Navbar             from "./components/Navbar";
import Footer             from "./components/Footer";

import Hero             from "./sections/Hero";
import About            from "./sections/About";
import Skills           from "./sections/Skills";
import Experience       from "./sections/Experience";
import Stats            from "./sections/Stats";
import Projects         from "./sections/Projects";
import Certifications   from "./sections/Certifications";
import Education        from "./sections/Education";
import Contact          from "./sections/Contact";

/* ─── Animated scroll-progress bar ─────────────────────────── */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <motion.div
      className="fixed top-0 inset-x-0 h-[2px] z-[100] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)",
      }}
    />
  );
}

/* ─── Animated mouse cursor ─────────────────────────────────── */
function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let mx = 0, my = 0;
    let dx = 0, dy = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      setVisible(true);
      if (dotRef.current) {
        dotRef.current.style.left = mx + "px";
        dotRef.current.style.top  = my + "px";
      }
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const animate = () => {
      dx += (mx - dx) * 0.12;
      dy += (my - dy) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = dx + "px";
        ringRef.current.style.top  = dy + "px";
      }
      rafId = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(pointer:coarse)").matches) return null;

  return (
    <div className="custom-cursor" style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s" }}>
      <div ref={dotRef} className="cursor-dot fixed pointer-events-none" />
      <div ref={ringRef} className="cursor-ring fixed pointer-events-none" />
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <ParticleBackground />

      {/* Mesh gradient layer */}
      <div className="mesh-gradient" aria-hidden="true" />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
