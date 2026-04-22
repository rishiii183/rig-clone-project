import { ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      label: "INTERCEPT",
      title: "Prompt captured before it leaves.",
      body: "When an employee types a prompt into any AI tool ChatGPT, Gemini, Copilot . The Foretyx sidecar intercepts it at the network layer, before the request leaves the device.",
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
      body: "The sanitised prompt reaches the LLM. When the response returns, Foretyx rehydrates it locally restoring placeholders to real values on-device. The employee gets a complete, accurate answer. No data ever left unprotected.",
    },
  ];

  return (
    <section id="how-it-works" className="py-32 px-6 md:px-12 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#ADE1ED]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-[#ADE1ED]/3 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-20 text-center md:text-left">
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#ADE1ED] uppercase mb-4 block">
            The Protocol
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-8">
            Three steps. <span className="text-white/40">Zero leakage.</span>
          </h2>
          <p className="text-white/40 text-lg md:text-xl max-w-3xl leading-relaxed font-sans">
            Foretyx sits as a silent middleware layer between every employee and every AI model they use.
            The entire process happens on-device in under <span className="text-[#ADE1ED] font-mono">200ms</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[15%] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />

          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-[32px] border border-white/5 bg-white/[0.02] backdrop-blur-md group hover:border-[#ADE1ED]/30 transition-all duration-700 overflow-hidden"
            >
              {/* Subtle hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ADE1ED]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="flex justify-between items-center mb-10 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-mono text-xs font-bold text-white group-hover:bg-[#ADE1ED] group-hover:text-black transition-all duration-500">
                  {step.step}
                </div>
                <span className="text-[9px] font-bold tracking-[0.4em] text-[#ADE1ED] uppercase opacity-60 group-hover:opacity-100 transition-opacity">
                  {step.label}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-white transition-colors duration-300 relative z-10">
                {step.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed font-sans group-hover:text-white/60 transition-colors duration-500 relative z-10">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        {/* --- FLOW DIAGRAM --- */}
        <div className="relative p-1 md:p-12 rounded-[40px] border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent overflow-x-auto scrollbar-hide">
          <div className="flex items-center justify-between min-w-[900px] gap-8 py-8">
            {/* Employee */}
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-4 group-hover:border-white/20 transition-colors">
                <div className="w-8 h-8 rounded-full bg-white/10" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/30">User Input</span>
            </div>

            <div className="flex-1 h-[1px] bg-gradient-to-r from-white/10 to-[#ADE1ED]/50 relative">
              <ArrowRight className="absolute -right-2 -top-2 w-4 h-4 text-[#ADE1ED]" />
            </div>

            {/* Intercept/Scrub/Guard */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#ADE1ED]/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative py-5 px-8 rounded-2xl border border-[#ADE1ED]/30 bg-[#ADE1ED]/5 text-center flex flex-col gap-1 backdrop-blur-md">
                <span className="text-[9px] font-bold tracking-widest text-[#ADE1ED] uppercase opacity-60">Engine</span>
                <span className="text-sm font-bold text-white">Scrub + Guard</span>
              </div>
            </div>

            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#ADE1ED]/50 to-white/10 relative">
              <ArrowRight className="absolute -right-2 -top-2 w-4 h-4 text-white/20" />
            </div>

            {/* External LLM */}
            <div className="px-10 py-5 rounded-2xl border border-white/5 bg-white/[0.02] text-center opacity-40">
              <span className="text-[9px] font-bold tracking-widest text-white uppercase opacity-40">External</span>
              <span className="text-sm font-bold text-white">Cloud LLM</span>
            </div>

            <div className="w-20 flex justify-center">
              <div className="w-10 h-[1px] bg-white/10 rotate-180 relative">
                <ArrowRight className="absolute -right-2 -top-2 w-4 h-4 text-white/10" />
              </div>
            </div>

            {/* Rehydrate */}
            <div className="py-5 px-8 rounded-2xl border border-[#ADE1ED]/30 bg-[#ADE1ED]/5 text-center flex flex-col gap-1 backdrop-blur-md">
              <span className="text-[9px] font-bold tracking-widest text-[#ADE1ED] uppercase opacity-60">Engine</span>
              <span className="text-sm font-bold text-white">Rehydrate</span>
            </div>

            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#ADE1ED]/50 to-white/10 relative">
              <ArrowRight className="absolute -right-2 -top-2 w-4 h-4 text-white/20" />
            </div>

            {/* Safe Output */}
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 rounded-full border border-[#ADE1ED]/30 bg-[#ADE1ED]/10 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(173,225,237,0.1)]">
                <div className="w-8 h-8 rounded-full bg-[#ADE1ED]/20 animate-pulse" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#ADE1ED]">Safe Output</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
