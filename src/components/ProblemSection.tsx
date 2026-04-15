import React, { useEffect, useState } from "react";

const ProblemSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate relative position within the eye container
      const eyeContainer = document.getElementById("eye-radar-container");
      if (eyeContainer) {
        const rect = eyeContainer.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Normalize vector from center to mouse, max distance 10px
        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 8;
        const ratio = Math.min(dist, 100) / 100;
        
        setMousePos({
          x: (dx / dist) * maxDist * ratio,
          y: (dy / dist) * maxDist * ratio
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const problems = [
    {
      num: "001",
      label: "DATA LEAKAGE",
      title: "They see your secrets.",
      desc: "Every time an employee pastes a customer record, contract, or Aadhaar number into ChatGPT — that data permanently leaves your network. Third-party logs capture it, store it, and train on it. You have no visibility, no control, and no way to audit what was exposed.",
    },
    {
      num: "002",
      label: "COMPLIANCE GAPS",
      title: "They bypass your rules.",
      desc: "Shadow AI, unmonitored prompts, and zero policy enforcement. Under India's DPDP Act, GDPR, and HIPAA — your organisation is liable for data your employees unknowingly expose. The cloud LLM gives you no paper trail, no audit log, and no chain of custody.",
    },
    {
      num: "003",
      label: "VULNERABILITY RISKS",
      title: "They invite the injection.",
      desc: "Without a local guardrail, adversarial prompt injections reach your core systems unchecked. Malicious inputs can exfiltrate sensitive data, bypass access controls, or turn your own AI workflows into attack vectors. The cloud provides the model. You bear the risk.",
    },
    {
      num: "004",
      label: "SOVEREIGNTY LOSS",
      title: "They hold your data hostage.",
      desc: "Every interaction makes a round trip across the open internet. You lose the right to erasure the moment the packet leaves your network. Your data security cannot depend on a cloud provider's terms of service, SLA, or goodwill.",
    },
  ];

  return (
    <section className="bg-[#0a0a0a] py-32 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
      {/* Background grain texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section Label */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center gap-3 px-4 py-1.5 border border-white/10 bg-white/5 uppercase tracking-[0.3em] font-mono text-[9px] text-[#ADE1ED]">
            <span className="text-white/20">✕</span> The Problem
          </div>
        </div>

        {/* Headline */}
        <div className="mb-32 max-w-5xl">
          <h2 className="text-6xl md:text-8xl lg:text-[110px] font-black text-white leading-[0.9] tracking-[ -0.04em]">
            You don't own your AI.
            <br />
            <span className="text-white/40">And you're being watched.</span>
          </h2>
        </div>

        {/* BOTTOM: 3-column grid */}
        <div className="grid lg:grid-cols-3 border-t border-white/10 problem-grid">
          {/* LEFT: Surveillance illustration (spans both rows) */}
          <div id="eye-radar-container" className="relative flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white/10 py-24 overflow-hidden problem-eye-col">
            <div className="relative w-full max-w-[440px] aspect-square problem-eye-wrapper">
                <svg 
                  viewBox="0 0 480 480" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-full h-full problem-eye-svg"
                >
                    {/* All line-work at low opacity */}
                    <g className="eye-linework" opacity="0.22">
                        {/* Concentric Circles */}
                        <circle cx="240" cy="240" r="239" stroke="white" strokeWidth="0.5" />
                        <circle cx="240" cy="240" r="180" stroke="white" strokeWidth="0.5" />
                        <circle cx="240" cy="240" r="120" stroke="white" strokeWidth="0.5" />
                        <circle cx="240" cy="240" r="60" stroke="white" strokeWidth="0.5" />
                        
                        {/* Axes */}
                        <line x1="0" y1="240" x2="480" y2="240" stroke="white" strokeWidth="0.5" />
                        <line x1="240" y1="0" x2="240" y2="480" stroke="white" strokeWidth="0.5" />
                        
                        {/* The Eye Shape */}
                        <path 
                          d="M120 240C120 240 180 150 240 150C300 150 360 240 360 240C360 240 300 330 240 330C180 330 120 240 120 240Z" 
                          stroke="white" 
                          strokeWidth="1" 
                        />
                        <circle cx="240" cy="240" r="45" stroke="white" strokeWidth="0.5" />
                    </g>

                    {/* Pupil - outside the low-opacity group, full brightness + glitch potential */}
                    <circle 
                        id="eye-pupil" 
                        className="eye-blink-target" 
                        cx={240 + mousePos.x * 2} 
                        cy={240 + mousePos.y * 2} 
                        r="14" 
                        fill="#ADE1ED" 
                    >
                        <animate 
                          attributeName="opacity" 
                          values="1;0.8;1" 
                          dur="2s" 
                          repeatCount="indefinite" 
                        />
                    </circle>

                    {/* Simple radar sweep line */}
                    <line 
                        x1="240" y1="240" 
                        x2="480" y2="240" 
                        stroke="#ADE1ED" 
                        strokeWidth="0.5" 
                        className="animate-[spin_4s_linear_infinite] origin-center opacity-30"
                    />
                </svg>
            </div>
          </div>

          {/* RIGHT columns: Features */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2">
            {problems.map((p, idx) => (
              <div 
                key={idx} 
                className={`p-10 md:p-16 border-white/10 flex flex-col group hover:bg-white/[0.02] transition-colors problem-card
                    ${idx < 2 ? 'border-b' : ''} 
                    ${idx % 2 === 0 ? 'md:border-r' : ''}`}
              >
                <div className="flex justify-between items-center mb-8">
                  <span className="font-mono text-[9px] font-bold tracking-[0.25em] text-[#ADE1ED] uppercase">
                    {p.label}
                  </span>
                  <span className="font-mono text-[9px] text-white/20 font-medium">
                    {p.num}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl lg:text-[28px] font-bold text-white mb-6 leading-[1.2] tracking-tight group-hover:text-[#ADE1ED] transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm md:text-base text-white/50 font-sans leading-relaxed opacity-70">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
