"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Star } from "lucide-react";
import { education } from "../data/portfolioData";
import { fadeInUp, staggerContainer } from "../lib/utils";

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="section-label mx-auto mb-4">
            ✦ Education
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-[--text-primary]">
            Academic{" "}
            <span className="gradient-text">Foundation</span>
          </motion.h2>
        </motion.div>

        {education.map((edu, i) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            className="max-w-3xl mx-auto"
          >
            <div
              className="relative rounded-2xl p-8 border transition-all hover:border-[#6366f1]/30 group overflow-hidden"
              style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
            >
              {/* Glow */}
              <div
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(99,102,241,0.12), transparent)" }}
              />

              <div className="flex flex-col sm:flex-row gap-6">
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.1))", border: "1px solid rgba(99,102,241,0.2)" }}
                >
                  <span className="text-3xl">{edu.icon}</span>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-[--text-primary] leading-snug">{edu.degree}</h3>
                      <p className="text-base font-semibold text-[#818cf8] mt-1">{edu.institution}</p>
                    </div>
                    <div
                      className="px-3 py-1.5 rounded-full text-sm font-bold gradient-text"
                      style={{ background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.2)" }}
                    >
                      {edu.grade}
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-xs text-[--text-muted] mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={11} className="text-[#6366f1]" /> {edu.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={11} className="text-[#6366f1]" /> {edu.location}
                    </span>
                  </div>

                  <p className="text-sm text-[--text-secondary] leading-relaxed mb-4">{edu.description}</p>

                  {/* Achievements */}
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((a) => (
                      <div
                        key={a}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium"
                        style={{ background: "rgba(99,102,241,0.08)", color: "#a5b4fc", border: "1px solid rgba(99,102,241,0.15)" }}
                      >
                        <Star size={10} className="fill-current" />
                        {a}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Continuous learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-6"
        >
          <div
            className="rounded-2xl p-5 border flex items-center gap-4"
            style={{ background: "rgba(99,102,241,0.04)", borderColor: "rgba(99,102,241,0.15)" }}
          >
            <div className="text-2xl">📚</div>
            <div>
              <h4 className="text-sm font-semibold text-[--text-primary] mb-1">Continuous Learning</h4>
              <p className="text-xs text-[--text-secondary]">
                Active on Udemy, Coursera, and A Cloud Guru. Currently exploring AI/ML integration with Spring AI and LangChain4j.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
