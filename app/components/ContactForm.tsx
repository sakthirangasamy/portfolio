"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useState } from "react";

const schema = z.object({
  name:    z.string().min(2, "Name must be at least 2 characters"),
  email:   z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type FormData = z.infer<typeof schema>;
type Status = "idle" | "loading" | "success" | "error";

interface FieldProps {
  label: string;
  error?: string;
  children: React.ReactNode;
}

function Field({ label, error, children }: FieldProps) {
  return (
    <div>
      <label className="block text-xs font-semibold text-[--text-secondary] uppercase tracking-wider mb-2">
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="text-xs text-red-400 mt-1.5 flex items-center gap-1"
          >
            <AlertCircle size={11} /> {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputClass =
  "w-full px-4 py-3 rounded-xl text-sm text-[--text-primary] placeholder:text-[--text-muted] outline-none transition-all duration-200 focus:ring-2 focus:ring-[#6366f1]/40 focus:border-[#6366f1]/60";
const inputStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.1)",
};

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      await new Promise((r) => setTimeout(r, 1800));
      console.log("Form data:", data);
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center py-16 px-8"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
          className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
          style={{ background: "linear-gradient(135deg, #10b981, #059669)" }}
        >
          <CheckCircle size={36} className="text-white" />
        </motion.div>
        <h3 className="text-xl font-semibold text-[--text-primary] mb-2">Message Sent!</h3>
        <p className="text-[--text-secondary] text-sm">
          Thanks for reaching out. I'll get back to you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Your Name" error={errors.name?.message}>
          <input
            {...register("name")}
            placeholder="John Doe"
            className={inputClass}
            style={inputStyle}
            disabled={isSubmitting}
          />
        </Field>
        <Field label="Email Address" error={errors.email?.message}>
          <input
            {...register("email")}
            type="email"
            placeholder="john@company.com"
            className={inputClass}
            style={inputStyle}
            disabled={isSubmitting}
          />
        </Field>
      </div>

      <Field label="Subject" error={errors.subject?.message}>
        <input
          {...register("subject")}
          placeholder="Project Collaboration / Hiring Inquiry"
          className={inputClass}
          style={inputStyle}
          disabled={isSubmitting}
        />
      </Field>

      <Field label="Message" error={errors.message?.message}>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Tell me about your project, timeline, and requirements..."
          className={`${inputClass} resize-none`}
          style={inputStyle}
          disabled={isSubmitting}
        />
      </Field>

      {status === "error" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 text-sm text-red-400 p-3 rounded-xl bg-red-500/10 border border-red-500/20"
        >
          <AlertCircle size={14} /> Failed to send. Please try again or email directly.
        </motion.div>
      )}

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
        whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
      >
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            <Send size={16} /> Send Message
          </>
        )}
      </motion.button>
    </form>
  );
}
