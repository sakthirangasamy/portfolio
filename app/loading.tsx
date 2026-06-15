"use client";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050508]">
      <div className="flex flex-col items-center gap-6">
        {/* Logo / Initials */}
        <div className="relative">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white"
            style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)" }}
          >
            SR
          </div>
          {/* Spinning ring */}
          <div
            className="absolute -inset-1 rounded-[18px] border-2 border-transparent"
            style={{
              background:
                "linear-gradient(#050508, #050508) padding-box, linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4) border-box",
              animation: "spin 1.2s linear infinite",
            }}
          />
        </div>

        {/* Dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                animation: `bounce 1s ease-in-out ${i * 0.15}s infinite`,
              }}
            />
          ))}
        </div>

        <p className="text-sm text-[--text-secondary] tracking-widest uppercase font-medium">
          Loading Portfolio
        </p>
      </div>

      <style>{`
        @keyframes spin   { to { transform: rotate(360deg); } }
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
      `}</style>
    </div>
  );
}
