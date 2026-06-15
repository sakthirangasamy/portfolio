"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import { Mail, Download, ArrowRight, ChevronDown, Sparkles, Copy, Check, Send, Calendar, MessageCircle, Linkedin, Github } from "lucide-react";
import { IconGithub, IconLinkedin, IconTwitter } from "../lib/socialIcons";
import FloatingIcons from "../components/FloatingIcons";
import { profile } from "../data/portfolioData";

const socials = [
  { icon: IconGithub, href: profile.github, label: "GitHub" },
  { icon: IconLinkedin, href: profile.linkedin, label: "LinkedIn" },
  { icon: IconTwitter, href: profile.twitter, label: "Twitter" },
  { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
];

function TypewriterText({ roles }: { roles: string[] }) {
  const [idx, setIdx] = useState(0);
  const [char, setChar] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = roles[idx];
    const delay = del
      ? char > 0 ? 40 : 1200
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

// ============ NEW ADDITION 1: Smart Contact Dropdown ============
const SmartContactDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactOptions = [
    { icon: MessageCircle, label: "WhatsApp", action: () => window.open(`https://wa.me/${profile.phone?.replace(/[^0-9]/g, '')}?text=Hi%20${profile.name}%2C%20I%20found%20your%20profile%20and%20would%20like%20to%20discuss%20an%20opportunity.`, '_blank'), color: "#25D366" },
    { icon: Calendar, label: "Schedule Meet", action: () => window.open(profile.calendly || "https://calendly.com", '_blank'), color: "#7C3AED" },
    { icon: Copy, label: copied ? "Copied!" : "Copy Email", action: copyEmail, color: "#6B7280" },
    { icon: Mail, label: "Open Email", action: () => window.location.href = `mailto:${profile.email}`, color: "#EA4335" },
  ];

  return (
    <div ref={dropdownRef} className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="btn-primary group"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
      >
        Hire Me
        <ChevronDown size={15} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      <motion.div
        initial={false}
        animate={isOpen ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -10, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="absolute top-full left-0 mt-2 w-56 rounded-xl overflow-hidden z-50"
        style={{
          background: "rgba(15, 23, 42, 0.98)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(99, 102, 241, 0.2)",
          boxShadow: "0 20px 35px -10px rgba(0,0,0,0.3), 0 0 0 1px rgba(99,102,241,0.1)"
        }}
      >
        {contactOptions.map((opt, idx) => (
          <motion.button
            key={opt.label}
            onClick={() => {
              opt.action();
              setIsOpen(false);
            }}
            className="w-full flex items-center gap-3 px-4 py-3 text-sm transition-all hover:bg-white/5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ x: 5 }}
          >
            <opt.icon size={16} style={{ color: opt.color }} />
            <span className="flex-1 text-left text-gray-300">{opt.label}</span>
            {opt.label === "Copy Email" && copied && (
              <Check size={12} className="text-green-400" />
            )}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

// ============ NEW ADDITION 2: Background Particle System ============
const BackgroundParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Array<{ x: number; y: number; size: number; speedX: number; speedY: number; opacity: number }>>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create particles
    for (let i = 0; i < 100; i++) {
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.3,
      });
    }

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMouseMove);

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach(p => {
        // Move particles
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Wrap around screen
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        
        // Mouse interaction - particles move away from mouse
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          const angle = Math.atan2(dy, dx);
          const force = (100 - dist) / 1000;
          p.x -= Math.cos(angle) * force;
          p.y -= Math.sin(angle) * force;
        }
        
        ctx.beginPath();
        ctx.fillStyle = `rgba(99, 102, 241, ${p.opacity})`;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
};

// ============ NEW ADDITION 3: Mouse Trailer Effect ============
const MouseTrailer = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });
  const opacity = useMotionValue(0);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      opacity.set(1);
    };
    const onMouseLeave = () => opacity.set(0);
    window.addEventListener("mousemove", onMouseMove);
    document.body.addEventListener("mouseleave", onMouseLeave);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.body.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-50 rounded-full"
      style={{
        x: springX,
        y: springY,
        opacity,
        translateX: "-50%",
        translateY: "-50%",
        width: 400,
        height: 400,
        background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, rgba(139,92,246,0) 70%)",
      }}
    />
  );
};

// ============ NEW ADDITION 4: Floating Notification System ============
const NotificationSystem = () => {
  const [notifications, setNotifications] = useState<Array<{ id: number; message: string; type: string }>>([]);
  let nextId = 0;

  useEffect(() => {
    // Listen for custom events
    const showNotification = (e: CustomEvent) => {
      const id = nextId++;
      setNotifications(prev => [...prev, { id, message: e.detail.message, type: e.detail.type }]);
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== id));
      }, 3000);
    };

    window.addEventListener('showNotification', showNotification as EventListener);
    return () => window.removeEventListener('showNotification', showNotification as EventListener);
  }, []);

  if (notifications.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      {notifications.map(notif => (
        <motion.div
          key={notif.id}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="px-4 py-2 rounded-lg text-sm"
          style={{
            background: "rgba(15, 23, 42, 0.95)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(99,102,241,0.3)",
            color: "#a5b4fc"
          }}
        >
          {notif.message}
        </motion.div>
      ))}
    </div>
  );
};

// ============ NEW ADDITION 5: Skill Icons with Hover Info ============
const EnhancedSkillTags = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  const skills = [
    { label: "☕ Java 21", color: "#f89820", description: "8+ years of enterprise Java development" },
    { label: "🍃 Spring Boot", color: "#6db33f", description: "Microservices, Security, Data JPA" },
    { label: "☁️ AWS", color: "#ff9900", description: "EC2, S3, Lambda, RDS, CloudFormation" },
    { label: "🐳 Docker", color: "#2496ed", description: "Containerization & orchestration" },
    { label: "⚛️ React", color: "#61dafb", description: "Hooks, Redux, Next.js" },
    { label: "⎈ Kubernetes", color: "#326ce5", description: "Cluster management & scaling" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2.5 mb-10">
      {skills.map(({ label, color, description }) => (
        <div key={label} className="relative">
          <motion.span
            className="text-xs font-medium px-3 py-1.5 rounded-full cursor-help inline-block"
            style={{ background: `${color}12`, color, border: `1px solid ${color}25` }}
            onHoverStart={() => setHoveredSkill(label)}
            onHoverEnd={() => setHoveredSkill(null)}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            {label}
          </motion.span>
          {hoveredSkill === label && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 rounded-lg text-xs whitespace-nowrap z-20"
              style={{
                background: "rgba(15, 23, 42, 0.95)",
                backdropFilter: "blur(8px)",
                border: `1px solid ${color}40`,
                color: color
              }}
            >
              {description}
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

// ============ NEW ADDITION 6: Animated Counter for Stats ============
const AnimatedCounter = ({ value, suffix = "", label }: { value: number; suffix: string; label: string }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * value));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl font-black gradient-text">
        {count}{suffix}
      </div>
      <div className="text-xs text-[--text-muted] mt-0.5 uppercase tracking-wider">{label}</div>
    </div>
  );
};

// ============ NEW ADDITION 7: Keyboard Shortcuts Help ============
const KeyboardShortcuts = () => {
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'H') {
        setShowHelp(prev => !prev);
      } else if (e.key === 'Escape') {
        setShowHelp(false);
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (!showHelp) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] p-6 rounded-2xl w-80"
      style={{
        background: "rgba(15, 23, 42, 0.98)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(99,102,241,0.3)",
        boxShadow: "0 25px 40px -12px rgba(0,0,0,0.5)"
      }}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-white">⌨️ Keyboard Shortcuts</h3>
        <button onClick={() => setShowHelp(false)} className="text-gray-400 hover:text-white">✕</button>
      </div>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between"><span className="text-gray-400">Ctrl + Shift + H</span><span>Show/Hide Help</span></div>
        <div className="flex justify-between"><span className="text-gray-400">Esc</span><span>Close modal</span></div>
        <div className="flex justify-between"><span className="text-gray-400">Ctrl + D</span><span>Download Resume</span></div>
      </div>
    </motion.div>
  );
};

// ============ MAIN EXPORT - Your Original Hero Component Enhanced ============
export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  // Keyboard shortcut for download
  useEffect(() => {
    const handleDownload = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'd') {
        e.preventDefault();
        const link = document.createElement('a');
        link.href = profile.resumeUrl;
        link.download = `${profile.name}_Resume.pdf`;
        link.click();
        
        // Show notification
        window.dispatchEvent(new CustomEvent('showNotification', { 
          detail: { message: '📄 Downloading resume...', type: 'success' }
        }));
      }
    };
    window.addEventListener('keydown', handleDownload);
    return () => window.removeEventListener('keydown', handleDownload);
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-dvh flex items-center justify-center overflow-hidden"
    >
      {/* NEW: Background Particles */}
      <BackgroundParticles />
      
      {/* NEW: Mouse Trailer */}
      <MouseTrailer />
      
      {/* Original: Floating tech icons background */}
      <FloatingIcons />

      {/* Original: Hero radial gradient */}
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
        {/* Original: Status badge - now enhanced with a message */}
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
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Available for work
        </motion.div>

        {/* Original: Name */}
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

        {/* Original: Typewriter role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl sm:text-2xl md:text-3xl font-medium text-[--text-secondary] mb-6 h-10"
        >
          <TypewriterText roles={profile.roles} />
        </motion.div>

        {/* Original: Bio */}
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

        {/* NEW: Enhanced skill tags with hover descriptions */}
        <EnhancedSkillTags />

        {/* UPDATED: CTA Buttons - Now with Smart Contact Dropdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          {/* NEW: Smart contact dropdown replaces old Hire Me button */}
          <SmartContactDropdown />
          
          {/* Original: Download button - enhanced with notification */}
          <motion.a
            href={profile.resumeUrl}
            download
            className="btn-secondary group"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              window.dispatchEvent(new CustomEvent('showNotification', { 
                detail: { message: '📄 Downloading resume...', type: 'info' }
              }));
            }}
          >
            <Download size={15} />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Original: Social links */}
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

       
      </motion.div>

      {/* Original: Scroll indicator - enhanced with better animation */}
      
      

      {/* NEW: Notification System */}
      <NotificationSystem />
      
      {/* NEW: Keyboard Shortcuts Help */}
      <KeyboardShortcuts />
    </section>
  );
}