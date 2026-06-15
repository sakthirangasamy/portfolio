"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ExternalLink, Calendar } from "lucide-react";
import { certifications } from "../data/portfolioData";
import { fadeInUp, staggerContainer } from "../lib/utils";

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 30%, rgba(99,102,241,0.05) 0%, transparent 70%)",
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
            ✦ Certifications
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-[--text-primary]">
            Professional{" "}
            <span className="gradient-text">Credentials</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-[--text-secondary] mt-4 max-w-xl mx-auto text-sm">
            Industry-recognized certifications validating expertise in cloud, DevOps, and enterprise Java development.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0, 0, 0.2, 1] }}
              className="group relative rounded-2xl p-5 border transition-all duration-300 overflow-hidden"
              style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
              whileHover={{
                y: -4,
                borderColor: `${cert.color}40`,
                boxShadow: `0 20px 40px rgba(0,0,0,0.3), 0 0 30px ${cert.color}10`,
              }}
            >
              {/* Top gradient accent */}
              <div
                className="absolute top-0 inset-x-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)` }}
              />

              {/* BG icon watermark */}
              <div
                className="absolute top-3 right-3 text-6xl opacity-[0.04] group-hover:opacity-[0.08] transition-opacity select-none"
                style={{ filter: `drop-shadow(0 0 20px ${cert.color})` }}
              >
                {cert.icon}
              </div>

              {/* Icon + verified */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{
                    background: `${cert.color}15`,
                    border: `1px solid ${cert.color}30`,
                    boxShadow: `0 0 20px ${cert.color}20`,
                  }}
                >
                  {cert.icon}
                </div>
                {cert.verified && (
                  <div className="flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-semibold text-green-400 bg-green-500/10 border border-green-500/20">
                    <ShieldCheck size={10} /> Verified
                  </div>
                )}
              </div>

              {/* Content */}
              <h3 className="text-sm font-semibold text-[--text-primary] leading-snug mb-1.5">
                {cert.name}
              </h3>
              <p className="text-xs font-medium mb-3" style={{ color: cert.color }}>
                {cert.issuer}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-3 text-[10px] text-[--text-muted]">
                <span className="flex items-center gap-1">
                  <Calendar size={9} /> Issued {cert.date}
                </span>
                {cert.expires !== "N/A" && (
                  <span>· Expires {cert.expires}</span>
                )}
              </div>

              {/* Credential ID */}
              <div
                className="mt-3 pt-3 border-t flex items-center justify-between"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
              >
                <span className="text-[9px] text-[--text-muted] font-mono truncate">
                  {cert.credentialId}
                </span>
                <ExternalLink size={11} className="text-[--text-muted] group-hover:text-[--text-secondary] transition-colors flex-shrink-0 ml-2" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm text-[--text-secondary]"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
          >
            <ShieldCheck size={14} className="text-[#6366f1]" />
            {certifications.length} Active Certifications · All Verified
          </div>
        </motion.div>
      </div>
    </section>
  );
}
