"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Mail, Download, ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { IconGithub, IconLinkedin, IconTwitter } from "../lib/socialIcons";
import FloatingIcons from "../components/FloatingIcons";
import { profile } from "../data/portfolioData";

const socials = [
  { icon: IconGithub,   href: profile.github,   label: "GitHub" },
  { icon: IconLinkedin, href: profile.linkedin,  label: "LinkedIn" },
  { icon: IconTwitter,  href: profile.twitter,   label: "Twitter" },
  { icon: Mail,     href: `mailto:${profile.email}`, label: "Email" },
];

function TypewriterText({ roles }: { roles: string[] }) {
  const [idx,    setIdx]    = useState(0);
  const [char,   setChar]   = useState(0);
  const [del,    setDel]    = useState(false);

  useEffect(() => {
    const current = roles[idx];
    const delay = del
      ? char > 0    ? 40  : 1200
      : char < current.length ? 80 : 1800;

    const t = setTimeout(() => {
      if (!del) {
        if (char < current.length) setChar((c) => c + 1);
        else setDel(true);
      } else {
        if (char > 0) setChar((c) => c - 1);
        else { setDel(false); setIdx((i) => (i + 1) % roles.length); }
      }
    }, delay);

    return () => clearTimeout(t);
  }, [char, del, idx, roles]);

  return (
    <span className="gradient-text font-bold">
      {roles[idx].slice(0, char)}
      <span className="typewriter-cursor" />
    </span>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY }  = useScroll();
  const y            = useTransform(scrollY, [0, 600], [0, -120]);
  const opacity      = useTransform(scrollY, [0, 400], [1, 0]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-dvh flex items-center justify-center overflow-hidden"
    >
      {/* Floating tech icons background */}
      <FloatingIcons />

      {/* Hero radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(99,102,241,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, var(--bg-primary), transparent)" }}
      />

      <motion.div
        style={{ y, opacity }}
        className="container-custom relative z-10 text-center pt-28 pb-16"
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-semibold"
          style={{
            background: "rgba(99,102,241,0.08)",
            border: "1px solid rgba(99,102,241,0.2)",
            color: "#a5b4fc",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Available for opportunities
          <Sparkles size={11} />
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-3"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none">
            <motion.span
              className="block text-[--text-primary]"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {profile.firstName}
            </motion.span>
            <motion.span
              className="block gradient-text"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              {profile.lastName}
            </motion.span>
          </h1>
        </motion.div>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl sm:text-2xl md:text-3xl font-medium text-[--text-secondary] mb-6 h-10"
        >
          <TypewriterText roles={profile.roles} />
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-[--text-secondary] leading-relaxed mb-10 text-balance"
        >
          {profile.shortBio} Passionate about{" "}
          <span style={{ color: "#818cf8" }}>clean architecture</span>,{" "}
          <span style={{ color: "#8b5cf6" }}>cloud-native solutions</span>, and{" "}
          <span style={{ color: "#06b6d4" }}>developer experience</span>.
        </motion.p>

        {/* Experience tag row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-wrap justify-center gap-2.5 mb-10"
        >
          {[
            { label: "☕ Java 21", color: "#f89820" },
            { label: "🍃 Spring Boot", color: "#6db33f" },
            { label: "☁️ AWS", color: "#ff9900" },
            { label: "🐳 Docker", color: "#2496ed" },
            { label: "⚛️ React", color: "#61dafb" },
            { label: "⎈ Kubernetes", color: "#326ce5" },
          ].map(({ label, color }) => (
            <span
              key={label}
              className="text-xs font-medium px-3 py-1.5 rounded-full"
              style={{ background: `${color}12`, color, border: `1px solid ${color}25` }}
            >
              {label}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href={`mailto:${profile.email}`}
            className="btn-primary group"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Hire Me
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            href={profile.resumeUrl}
            download
            className="btn-secondary group"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Download size={15} />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex items-center justify-center gap-3"
        >
          {socials.map(({ icon: Icon, href, label }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-xl glass flex items-center justify-center text-[--text-muted] hover:text-[--text-primary] transition-all"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + i * 0.08, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-16 pt-10 border-t border-white/6 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto"
        >
          {[
            { value: "8+", label: "Years" },
            { value: "50+", label: "Projects" },
            { value: "15+", label: "Clients" },
            { value: "99%", label: "Satisfaction" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-black gradient-text">{value}</div>
              <div className="text-xs text-[--text-muted] mt-0.5 uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[--text-muted] hover:text-[--text-secondary] transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        whileHover={{ y: 2 }}
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
