"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock, Zap } from "lucide-react";
import { IconGithub, IconLinkedin, IconTwitter } from "../lib/socialIcons";
import ContactForm from "../components/ContactForm";
import { profile } from "../data/portfolioData";
import { fadeInUp, staggerContainer } from "../lib/utils";

const contactInfo = [
  { icon: Mail,    label: "Email",    value: profile.email,    href: `mailto:${profile.email}`,  color: "#6366f1" },
  { icon: Phone,   label: "Phone",    value: profile.phone,    href: `tel:${profile.phone}`,     color: "#8b5cf6" },
  { icon: MapPin,  label: "Location", value: profile.location, href: "#",                        color: "#06b6d4" },
  { icon: Clock,   label: "Response", value: "Within 24 hours", href: "#",                       color: "#10b981" },
];

const socials = [
  { icon: IconGithub,   href: profile.github,   label: "GitHub",   color: "#ffffff" },
  { icon: IconLinkedin, href: profile.linkedin,  label: "LinkedIn", color: "#0a66c2" },
  { icon: IconTwitter,  href: profile.twitter,   label: "Twitter",  color: "#1da1f2" },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(99,102,241,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="container-custom relative">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="section-label mx-auto mb-4">
            ✦ Get In Touch
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-[--text-primary]">
            Let's Build{" "}
            <span className="gradient-text">Something Great</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-[--text-secondary] mt-4 max-w-xl mx-auto text-sm">
            Whether you have a project in mind, a full-time role, or just want to connect — I'd love to hear from you.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Info */}
          <motion.div
            className="lg:col-span-2 space-y-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
          >
            {/* Availability */}
            <motion.div
              variants={fadeInUp}
              className="p-5 rounded-2xl border"
              style={{ background: "rgba(16,185,129,0.04)", borderColor: "rgba(16,185,129,0.2)" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold text-green-400 uppercase tracking-wider">Available</span>
              </div>
              <p className="text-sm text-[--text-secondary]">
                Open to{" "}
                <span className="text-[--text-primary] font-medium">full-time roles</span>,{" "}
                <span className="text-[--text-primary] font-medium">contract projects</span>, and{" "}
                <span className="text-[--text-primary] font-medium">technical consulting</span>.
              </p>
            </motion.div>

            {/* Contact info cards */}
            {contactInfo.map(({ icon: Icon, label, value, href, color }, i) => (
              <motion.a
                key={label}
                href={href}
                variants={fadeInUp}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 group cursor-pointer"
                style={{ background: "var(--bg-card)", borderColor: "var(--border)", textDecoration: "none" }}
                whileHover={{ x: 4, borderColor: `${color}40` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110"
                  style={{ background: `${color}15`, border: `1px solid ${color}25` }}
                >
                  <Icon size={16} style={{ color }} />
                </div>
                <div>
                  <div className="text-[10px] text-[--text-muted] uppercase tracking-wider">{label}</div>
                  <div className="text-sm font-medium text-[--text-primary]">{value}</div>
                </div>
              </motion.a>
            ))}

            {/* Socials */}
            <motion.div variants={fadeInUp}>
              <p className="text-xs text-[--text-muted] uppercase tracking-widest mb-3">Also find me on</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl glass flex items-center justify-center text-[--text-muted] hover:text-[--text-primary] transition-colors"
                    whileHover={{ scale: 1.12, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    title={label}
                  >
                    <Icon size={16} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Response */}
            <motion.div
              variants={fadeInUp}
              className="p-4 rounded-xl flex items-center gap-3 border"
              style={{ background: "rgba(99,102,241,0.04)", borderColor: "rgba(99,102,241,0.15)" }}
            >
              <Zap size={16} className="text-[#818cf8] flex-shrink-0" />
              <p className="text-xs text-[--text-secondary]">
                Typical response time: <span className="text-[--text-primary] font-semibold">&lt; 12 hours</span>. IST timezone.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
          >
            <div
              className="rounded-2xl p-6 sm:p-8 border"
              style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
            >
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-[--text-primary]">Send a Message</h3>
                <p className="text-xs text-[--text-secondary] mt-1">Fill out the form and I'll get back to you ASAP.</p>
              </div>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
