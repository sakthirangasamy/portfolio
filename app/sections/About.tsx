"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Briefcase, Zap, Code2, Cloud, Users } from "lucide-react";
import { profile } from "../data/portfolioData";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "../lib/utils";

const highlights = [
  { icon: Code2,    label: "Core Stack",   value: "Java · Spring · React",  color: "#6366f1" },
  { icon: Cloud,    label: "Cloud",        value: "AWS · K8s · Docker",      color: "#06b6d4" },
  { icon: Zap,      label: "Performance",  value: "99.99% SLA",              color: "#f59e0b" },
  { icon: Users,    label: "Team Scale",   value: "Led 8-engineer teams",    color: "#10b981" },
];

const values = [
  { emoji: "🏗️", title: "Clean Architecture",  desc: "SOLID, DDD, Event-Driven — built to last." },
  { emoji: "⚡",  title: "Performance First",   desc: "P99 latency under 50ms is the bar." },
  { emoji: "🔒",  title: "Security by Design",  desc: "OAuth2, RBAC, zero-trust by default." },
  { emoji: "🚀",  title: "DevOps Culture",      desc: "If it's not automated, it's not done." },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="section-label mx-auto mb-4">
            ✦ About Me
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-[--text-primary]">
            The Engineer{" "}
            <span className="gradient-text">Behind the Code</span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Profile Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={slideInLeft}
          >
            {/* Profile card */}
            <div className="relative">
              {/* Glow */}
              <div
                className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl"
                style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
              />

              <div
                className="relative rounded-2xl p-6 border"
                style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
              >
                {/* Avatar + name */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-black text-white"
                      style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)" }}
                    >
                      SR
                    </div>
                    <div
                      className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ background: "#10b981", border: "2px solid var(--bg-primary)" }}
                    >
                      <span className="text-[8px] text-white">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[--text-primary]">{profile.name}</h3>
                    <p className="text-sm text-[#818cf8] font-medium">{profile.title}</p>
                    <div className="flex items-center gap-1.5 mt-1.5 text-xs text-[--text-muted]">
                      <MapPin size={11} />
                      <span>{profile.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-sm text-[--text-secondary] leading-relaxed mb-6">{profile.bio}</p>

                {/* Info grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { icon: Calendar,  label: "Experience", value: `${profile.experience} Years` },
                    { icon: Briefcase, label: "Status",     value: profile.availability },
                    { icon: MapPin,    label: "Location",   value: "Chennai, India" },
                    { icon: Code2,     label: "Specialty",  value: "Full Stack + Cloud" },
                  ].map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="p-3 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      <div className="flex items-center gap-1.5 text-[10px] text-[--text-muted] uppercase tracking-wider mb-1">
                        <Icon size={10} className="text-[#6366f1]" />
                        {label}
                      </div>
                      <div className="text-xs font-semibold text-[--text-primary]">{value}</div>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-2.5">
                  {highlights.map(({ icon: Icon, label, value, color }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl transition-all hover:scale-[1.02]"
                      style={{ background: `${color}08`, border: `1px solid ${color}18` }}
                    >
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `${color}15` }}
                      >
                        <Icon size={13} style={{ color }} />
                      </div>
                      <div>
                        <div className="text-[10px] text-[--text-muted]">{label}</div>
                        <div className="text-[11px] font-semibold" style={{ color }}>{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Values + passion */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
          >
            <motion.h3 variants={fadeInUp} className="text-2xl font-bold text-[--text-primary] mb-2">
              Engineering Philosophy
            </motion.h3>
            <motion.p variants={fadeInUp} className="text-[--text-secondary] mb-8 text-sm leading-relaxed">
              I believe great software is invisible — it just works, scales, and delights. Eight years of building
              production systems taught me that the best code is the code that never needs to be touched again.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  variants={fadeInUp}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 rounded-xl border transition-all hover:border-[#6366f1]/30 group"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                  whileHover={{ y: -3 }}
                >
                  <div className="text-2xl mb-2">{v.emoji}</div>
                  <h4 className="text-sm font-semibold text-[--text-primary] mb-1 group-hover:text-[#818cf8] transition-colors">
                    {v.title}
                  </h4>
                  <p className="text-xs text-[--text-muted] leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Quick facts */}
            <motion.div
              variants={fadeInUp}
              className="p-5 rounded-2xl border"
              style={{ background: "rgba(99,102,241,0.04)", borderColor: "rgba(99,102,241,0.15)" }}
            >
              <h4 className="text-xs font-semibold text-[#818cf8] uppercase tracking-widest mb-3">Quick Facts</h4>
              <ul className="space-y-2">
                {[
                  "🎓 B.E. Computer Science – Anna University, 2017",
                  "🏆 6 Professional Certifications (AWS, CKA, Oracle Java)",
                  "📦 22+ microservices architected in production",
                  "🌍 Contributed to 3 open-source Spring Boot starters",
                ].map((fact) => (
                  <li key={fact} className="flex items-start gap-2 text-sm text-[--text-secondary]">
                    <span className="flex-shrink-0">{fact.split(" ")[0]}</span>
                    <span>{fact.slice(fact.indexOf(" ") + 1)}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
