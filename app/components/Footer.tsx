"use client";

import { motion } from "framer-motion";
import { Mail, Heart, ExternalLink } from "lucide-react";
import { IconGithub, IconLinkedin, IconTwitter } from "../lib/socialIcons";
import { profile, navLinks } from "../data/portfolioData";

const socials = [
  { icon: IconGithub,   href: profile.github,   label: "GitHub" },
  { icon: IconLinkedin, href: profile.linkedin,  label: "LinkedIn" },
  { icon: IconTwitter,  href: profile.twitter,   label: "Twitter" },
  { icon: Mail,     href: `mailto:${profile.email}`, label: "Email" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/6 pt-16 pb-8 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-[#6366f1] to-transparent" />

      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold text-white"
                style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
              >
                SR
              </div>
              <span className="text-base font-semibold text-[--text-primary]">Sakthi R</span>
            </div>
            <p className="text-sm text-[--text-secondary] leading-relaxed max-w-xs">
              {profile.shortBio}
            </p>
            <div className="flex gap-3 mt-5">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl glass flex items-center justify-center text-[--text-muted] hover:text-[--text-primary] transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-[--text-secondary] uppercase tracking-widest mb-4">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm text-[--text-muted] hover:text-[--text-primary] transition-colors text-left flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 rounded-full bg-[#6366f1] opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-[--text-secondary] uppercase tracking-widest mb-4">Get In Touch</h4>
            <div className="space-y-2.5">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 text-sm text-[--text-muted] hover:text-[--text-primary] transition-colors"
              >
                <Mail size={13} className="text-[#6366f1]" />
                {profile.email}
              </a>
              <div className="text-sm text-[--text-muted]">📍 {profile.location}</div>
              <div className="inline-flex items-center gap-1.5 mt-2 px-3 py-1.5 rounded-full text-xs font-medium text-green-400 bg-green-500/10 border border-green-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                {profile.availability}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[--text-muted] flex items-center gap-1.5">
            © {new Date().getFullYear()} {profile.name}. Built with
            <Heart size={11} className="text-red-400 fill-red-400 mx-0.5" />
            using Next.js & Framer Motion
          </p>
          <div className="flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[--text-muted] hover:text-[--text-primary] transition-colors flex items-center gap-1"
            >
              Source <ExternalLink size={10} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
