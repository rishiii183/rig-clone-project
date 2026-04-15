import { ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      label: "INTERCEPT",
      title: "Prompt captured before it leaves.",
      body: "When an employee types a prompt into any AI tool — ChatGPT, Gemini, Copilot — the Foretyx sidecar intercepts it at the network layer, before the request leaves the device.",
    },
    {
      step: "02",
      label: "SCRUB + GUARD",
      title: "PII removed. Injections blocked.",
      body: "The prompt passes through a three-layer pipeline: Presidio-based PII detection (20+ entity types), an ONNX DistilBERT injection classifier, and a local LLM semantic guard. Sensitive values are replaced with secure placeholders. Attacks are blocked entirely.",
    },
    {
      step: "03",
      label: "REHYDRATE",
      title: "Clean response. Full context restored.",
      body: "The sanitised prompt reaches the LLM. When the response returns, Foretyx rehydrates it locally — restoring placeholders to real values on-device. The employee gets a complete, accurate answer. No data ever left unprotected.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 md:px-12 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold tracking-[0.2em] uppercase rounded mb-4">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground mb-6">
            Three steps. Zero leakage.
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl leading-relaxed font-sans">
            Foretyx sits as a silent middleware layer between every employee and every AI model they use. Here's what happens in under 200 milliseconds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-10 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm group hover:border-[#ADE1ED]/30 hover:-translate-y-1 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
            >
              {/* Subtle hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ADE1ED]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex justify-between items-start mb-8 relative z-10">
                <span className="text-6xl font-black text-white/[0.03] group-hover:text-[#ADE1ED]/10 transition-colors duration-500">
                  {step.step}
                </span>
                <span className="text-[10px] font-bold tracking-[0.3em] text-[#ADE1ED] uppercase pt-2 opacity-80 group-hover:opacity-100 transition-opacity">
                  {step.label}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-[#ADE1ED] transition-colors duration-300 relative z-10">
                {step.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed font-sans group-hover:text-white/60 transition-colors duration-500 relative z-10">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        {/* --- FLOW DIAGRAM --- */}
        <div className="mt-12 p-8 rounded-3xl border border-white/5 bg-white/[0.02] overflow-x-auto">
          <div className="flex items-center justify-between min-w-[800px] gap-4">
            {/* Employee */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center mb-2">
                <span className="text-[10px] font-bold">USER</span>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">Employee</span>
            </div>

            <ArrowRight className="w-4 h-4 text-white/20" />

            {/* Intercept/Scrub/Guard */}
            <div 
              className="flex-1 py-4 px-6 rounded-xl border border-[#ADE1ED]/30 bg-[#ADE1ED]/5 text-center flex flex-col gap-1 transition-all hover:bg-[#ADE1ED]/10"
              style={{ borderColor: 'rgba(173, 225, 237, 0.3)' }}
            >
              <span className="text-[9px] font-bold tracking-tighter text-[#ADE1ED] uppercase opacity-60">Foretyx Sidecar</span>
              <span className="text-xs font-bold text-[#ADE1ED]">Intercept / Scrub / Guard</span>
            </div>

            <ArrowRight className="w-4 h-4 text-white/20" />

            {/* External LLM */}
            <div className="px-8 py-4 rounded-xl border border-white/10 bg-white/[0.02] text-center opacity-40">
              <span className="text-[9px] font-bold tracking-tighter text-white uppercase opacity-40">Public Cloud</span>
              <span className="text-xs font-bold text-white">External LLM</span>
            </div>

            <div className="flex flex-col items-center">
              <ArrowRight className="w-4 h-4 text-white/20 rotate-180" />
            </div>

            {/* Rehydrate */}
            <div 
              className="flex-1 py-4 px-6 rounded-xl border border-[#ADE1ED]/30 bg-[#ADE1ED]/5 text-center flex flex-col gap-1 transition-all hover:bg-[#ADE1ED]/10"
              style={{ borderColor: 'rgba(173, 225, 237, 0.3)' }}
            >
              <span className="text-[9px] font-bold tracking-tighter text-[#ADE1ED] uppercase opacity-60">Foretyx Sidecar</span>
              <span className="text-xs font-bold text-[#ADE1ED]">Rehydrate</span>
            </div>

            <ArrowRight className="w-4 h-4 text-white/20" />

            {/* Employee Back */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border-2 border-[#ADE1ED]/40 flex items-center justify-center mb-2 bg-[#ADE1ED]/5">
                <span className="text-[10px] font-bold text-[#ADE1ED]">OK</span>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#ADE1ED]/60">Safe Output</span>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5">
              <div className="w-2 h-2 rounded-full bg-[#ADE1ED] animate-pulse" />
              <span className="text-[10px] font-mono text-white/60">Local Placeholder Map (Zero cloud sync)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
