"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, CheckCircle2, Building2 } from "lucide-react";
import { experiences } from "../data/portfolioData";
import { fadeInUp, staggerContainer } from "../lib/utils";

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(99,102,241,0.05) 0%, transparent 70%)",
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
            ✦ Work Experience
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-[--text-primary]">
            Career{" "}
            <span className="gradient-text">Journey</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-[--text-secondary] mt-4 max-w-xl mx-auto text-sm">
            8+ years of progressive growth — from backend engineer to team lead building systems at scale.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px -translate-x-px"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(99,102,241,0.4), rgba(99,102,241,0.2), transparent)" }}
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0, 0, 0.2, 1] }}
                className={`relative grid md:grid-cols-2 gap-6 ${i % 2 === 0 ? "" : "md:direction-rtl"}`}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-5 md:left-1/2 w-4 h-4 rounded-full -translate-x-1.5 mt-6 md:mt-8 z-10 flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${exp.color}, ${exp.color}aa)`,
                    border: "2px solid var(--bg-primary)",
                    boxShadow: `0 0 16px ${exp.color}60`,
                  }}
                />

                {/* Content card — alternating sides on desktop */}
                <div
                  className={`pl-12 md:pl-0 ${
                    i % 2 === 0
                      ? "md:col-start-2 md:pl-8"
                      : "md:col-start-1 md:col-end-2 md:text-right md:pr-8"
                  }`}
                >
                  <motion.div
                    className="rounded-2xl p-6 border transition-all duration-300 group"
                    style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                    whileHover={{
                      y: -4,
                      borderColor: `${exp.color}40`,
                      boxShadow: `0 20px 40px rgba(0,0,0,0.3), 0 0 40px ${exp.color}10`,
                    }}
                  >
                    {/* Top accent line */}
                    <div
                      className="absolute top-0 inset-x-0 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: `linear-gradient(90deg, transparent, ${exp.color}, transparent)` }}
                    />

                    {/* Header */}
                    <div className={`flex items-start justify-between gap-3 mb-4 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                      <div>
                        <div
                          className="inline-flex items-center gap-1.5 text-[10px] font-semibold px-2.5 py-1 rounded-full mb-2"
                          style={{ background: `${exp.color}15`, color: exp.color, border: `1px solid ${exp.color}25` }}
                        >
                          <Building2 size={9} /> {exp.type}
                        </div>
                        <h3 className="text-base font-bold text-[--text-primary] leading-snug">{exp.role}</h3>
                        <p className="text-sm font-semibold mt-0.5" style={{ color: exp.color }}>{exp.company}</p>
                      </div>
                      <div className={`text-right flex-shrink-0 ${i % 2 !== 0 ? "md:text-left" : ""}`}>
                        <div className="text-xs text-[--text-muted] flex items-center gap-1 justify-end">
                          <Clock size={10} /> {exp.duration}
                        </div>
                        <div className="text-[11px] text-[--text-muted] mt-0.5 flex items-center gap-1 justify-end">
                          <MapPin size={9} /> {exp.location}
                        </div>
                        <div
                          className="text-[10px] font-semibold mt-1.5 px-2 py-0.5 rounded-full"
                          style={{ background: `${exp.color}10`, color: exp.color }}
                        >
                          {exp.period}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-[--text-secondary] leading-relaxed mb-4">{exp.description}</p>

                    {/* Achievements */}
                    <ul className="space-y-1.5 mb-4">
                      {exp.achievements.slice(0, 4).map((a) => (
                        <li key={a} className={`flex items-start gap-2 text-xs text-[--text-secondary] ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                          <CheckCircle2 size={12} className="flex-shrink-0 mt-0.5" style={{ color: exp.color }} />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className={`flex flex-wrap gap-1.5 ${i % 2 !== 0 ? "md:justify-end" : ""}`}>
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-2 py-0.5 rounded-md font-medium"
                          style={{ background: `${exp.color}10`, color: exp.color, border: `1px solid ${exp.color}20` }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Empty opposite column spacer on desktop */}
                <div className="hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
