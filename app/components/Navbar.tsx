"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { useState, useEffect } from "react";
import { navLinks, profile } from "../data/portfolioData";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen,     setIsOpen]     = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const [activeSection, setActive]  = useState("hero");

  const { scrollY } = useScroll();
  const navBg = useTransform(scrollY, [0, 80], ["rgba(5,5,8,0)", "rgba(5,5,8,0.85)"]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);

    // Active section tracker
    const sections = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      <motion.header
        className="fixed top-0 inset-x-0 z-50"
        style={{ backgroundColor: navBg }}
      >
        {/* Backdrop blur when scrolled */}
        <div
          className="absolute inset-0 transition-all duration-500"
          style={{
            backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
            borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
          }}
        />

        <nav className="container-custom relative flex items-center justify-between h-16">
          {/* Logo */}
          <motion.button
            onClick={() => scrollTo("#hero")}
            className="flex items-center gap-2.5"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white"
              style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
            >
              SR
            </div>
            <span className="font-semibold text-[--text-primary] hidden sm:block">
              Sakthi<span className="text-[#6366f1]">R</span>
            </span>
          </motion.button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="relative px-3.5 py-2 text-sm font-medium transition-colors rounded-lg"
                  style={{ color: isActive ? "#a5b4fc" : "var(--text-secondary)" }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.2)" }}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            <motion.a
              href={profile.resumeUrl}
              download
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white"
              style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
              whileHover={{ scale: 1.04, boxShadow: "0 0 20px rgba(99,102,241,0.5)" }}
              whileTap={{ scale: 0.96 }}
            >
              <Download size={13} /> Resume
            </motion.a>

            {/* Mobile hamburger */}
            <motion.button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl glass text-[--text-secondary]"
              onClick={() => setIsOpen((p) => !p)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 p-4 md:hidden"
            style={{ background: "rgba(5,5,8,0.96)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-left px-4 py-3 rounded-xl text-sm font-medium text-[--text-secondary] hover:text-[--text-primary] hover:bg-white/5 transition-all"
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="pt-2 border-t border-white/8 mt-2">
                <a
                  href={profile.resumeUrl}
                  download
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white"
                  style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
                  onClick={() => setIsOpen(false)}
                >
                  <Download size={14} /> Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
