import { Wifi, WifiOff, Infinity, Shield, Zap } from "lucide-react";

const features = [
  { 
    icon: WifiOff, 
    label: "SOVEREIGN", 
    title: "Local First", 
    desc: "The Foretyx sidecar runs entirely on your machine. The placeholder map — the cryptographic key linking all redacted data back to real values — never leaves the device. Ever." 
  },
  { 
    icon: Infinity, 
    label: "UNLIMITED", 
    title: "Scale Safely", 
    desc: "Deploy across your entire workforce. Every employee prompt is inspected locally — no per-call API costs, no throughput caps, no cloud billing surprises at the end of the month." 
  },
  { 
    icon: Shield, 
    label: "PROTECTIVE", 
    title: "Audit Everything", 
    desc: "Metadata-only events sync to your Control Plane. What was asked, what entity types were flagged, which policy triggered, what the risk score was — audit-ready for DPDP, GDPR, and HIPAA. No raw prompts ever stored." 
  },
  { 
    icon: Zap, 
    label: "INSTANT", 
    title: "Sub-200ms", 
    desc: "The full guard pipeline — PII detection across 20+ entity types, ONNX injection scoring, policy enforcement — completes in under 200ms. Security at the speed of thought." 
  },
];

const SolutionSection = () => {
  return (
    <section className="bg-[#0a0a0a] py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-24">
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#ADE1ED] uppercase mb-4 block">Introducing Foretyx</span>
          <h2 className="text-5xl md:text-7xl lg:text-[100px] font-black leading-[0.95] tracking-[-0.04em] text-white">
            Everything local.
            <br />
            <span className="text-white/40">Own your AI.</span>
          </h2>
        </div>

        {/* --- Diagram --- */}
        <div className="p-[1px] bg-white/10 mb-20" style={{ clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)' }}>
          <div className="bg-[#0f0f0f] p-12 md:p-20 flex flex-col md:flex-row items-center justify-center gap-12 overflow-hidden relative" style={{ clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)' }}>
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none scanlines" />
            
            <div className="text-center p-8 border border-[#ADE1ED]/30 bg-[#ADE1ED]/5 flex-1 relative group">
              <div className="font-mono text-[10px] text-[#ADE1ED] mb-4 uppercase tracking-[0.2em]">Foretyx Sidecar</div>
              <div className="font-mono text-xl text-white font-black mb-2 tracking-tighter uppercase">Foretyx Node</div>
              <div className="font-mono text-[11px] text-white/50 space-y-1">
                <div className="flex items-center justify-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-success" />
                    PII Scrubbed Locally
                </div>
                <div className="flex items-center justify-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-success" />
                    Injection Detected
                </div>
                <div className="flex items-center justify-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-success" />
                    Policy Enforced
                </div>
              </div>
              <div className="text-[10px] text-[#ADE1ED] mt-6 font-mono tracking-widest animate-pulse uppercase">Placeholder Map: Never Leaves Device</div>
            </div>

            <div className="flex flex-col items-center gap-4 py-8 relative">
              <div className="w-24 h-[1px] bg-[#ADE1ED] relative" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#ADE1ED] text-4xl font-light opacity-50">✕</div>
              <span className="font-mono text-[9px] text-[#ADE1ED] uppercase tracking-[0.4em] font-bold text-center">Security Guardrail Active</span>
              <div className="w-24 h-[1px] bg-[#ADE1ED]" />
            </div>

            <div className="text-center p-8 border border-white/5 bg-white/5 flex-1 opacity-20 filter grayscale">
              <div className="font-mono text-[10px] text-white/40 mb-4 uppercase tracking-[0.2em]">External LLM</div>
              <div className="font-mono text-xl text-white/40 font-bold mb-2 uppercase">Public Cloud</div>
              <div className="font-mono text-[11px] text-white/20 space-y-1">
                <div>BLOCKED: Raw PII</div>
                <div>BLOCKED: Injections</div>
                <div>PASSED: Sanitised prompt only</div>
              </div>
              <div className="text-[10px] text-white/20 mt-6 font-mono tracking-widest uppercase">Compliance: Enforced</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 overflow-hidden">
          {features.map((f) => (
            <div key={f.label} className="p-12 bg-[#0a0a0a] hover:bg-white/[0.03] transition-all duration-500 group relative">
              {/* Hover highlight background */}
              <div className="absolute inset-0 bg-[#ADE1ED]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <f.icon className="w-6 h-6 text-[#ADE1ED] mb-10 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(173,225,237,0.5)] transition-all duration-500" />
              
              <div className="flex justify-between items-start mb-6">
                <span className="font-mono text-[10px] text-[#ADE1ED] uppercase tracking-[0.3em] font-bold opacity-80 group-hover:opacity-100 transition-opacity">{f.label}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-6 tracking-tight group-hover:text-[#ADE1ED] transition-colors duration-300">{f.title}</h3>
              <p className="text-[13px] text-white/40 font-sans leading-relaxed group-hover:text-white/60 transition-colors duration-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
