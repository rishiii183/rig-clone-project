const steps = [
  {
    num: "01",
    title: "A focused model, trained specifically for coding.",
    desc: "Every parameter is dedicated to coding, planning, tool use, and structured edits. By narrowing the domain, we concentrate intelligence where it matters.",
  },
  {
    num: "02",
    title: "Full intelligence, compressed to fit your machine.",
    desc: "An 8 GB model that fits comfortably in memory on a MacBook. Full reasoning. Local execution. Zero cost per token.",
  },
  {
    num: "03",
    title: "A custom runtime, engineered for Apple Silicon.",
    desc: "A custom inference engine optimized for Apple Silicon. Model, context engine, and tools designed as a single coordinated system.",
  },
];

const ApproachSection = () => {
  return (
    <section id="approach" className="bg-[#0a0a0a] py-32 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-24">
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#ED462D] uppercase mb-4 block">Our Approach</span>
          <h2 className="text-5xl md:text-7xl lg:text-[100px] font-black leading-[0.95] tracking-[-0.04em] text-white">
            Purpose beats scale.
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {steps.map((s) => (
            <div key={s.num} className="p-10 md:p-14 bg-[#0a0a0a] hover:bg-white/[0.02] transition-colors group">
              <span className="font-mono text-[9px] text-[#ED462D] uppercase tracking-[0.4em] font-bold block mb-10">CORE PHASE {s.num}</span>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight tracking-tight group-hover:text-[#ED462D] transition-colors">{s.title}</h3>
                <p className="text-sm text-white/40 font-sans leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison section */}
        <div className="mt-32 grid lg:grid-cols-2 gap-20">
          <div>
            <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-[1px] bg-[#ED462D]" />
                <h4 className="font-mono text-[10px] text-white uppercase tracking-[0.3em]">Code Parameter Efficiency</h4>
            </div>
            <div className="space-y-12">
              <div>
                <div className="flex justify-between font-mono text-[10px] mb-4">
                  <span className="text-white uppercase tracking-widest">Foretyx Architecture</span>
                  <span className="text-[#ED462D]">100% OPTIMIZED</span>
                </div>
                <div className="h-2 bg-white/5 relative">
                  <div className="h-full bg-[#ED462D] shadow-[0_0_15px_#ED462D]" style={{ width: "100%" }} />
                  {/* Tick marks */}
                  <div className="absolute inset-0 flex justify-between pointer-events-none">
                    {[...Array(11)].map((_, i) => (
                        <div key={i} className="w-px h-full bg-[#0a0a0a]/50" />
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between font-mono text-[10px] mb-4">
                  <span className="text-white/40 uppercase tracking-widest">Generalized Models</span>
                  <span className="text-white/20">~18% RELEVANT</span>
                </div>
                <div className="h-2 bg-white/5">
                  <div className="h-full bg-white/10" style={{ width: "18%" }} />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-[1px] bg-[#ED462D]" />
                <h4 className="font-mono text-[10px] text-white uppercase tracking-[0.3em]">In-Memory Footprint</h4>
            </div>
            <div className="space-y-12">
              <div>
                <div className="flex justify-between font-mono text-[10px] mb-4">
                  <span className="text-white uppercase tracking-widest">Foretyx SLM</span>
                  <span className="text-[#ED462D]">8 GB (LOCAL)</span>
                </div>
                <div className="h-2 bg-white/5">
                  <div className="h-full bg-[#ED462D] shadow-[0_0_15px_#ED462D]" style={{ width: "8%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between font-mono text-[10px] mb-4">
                  <span className="text-white/40 uppercase tracking-widest">Industry Standard</span>
                  <span className="text-white/20">200+ GB (CLOUD)</span>
                </div>
                <div className="h-2 bg-white/5">
                  <div className="h-full bg-white/10" style={{ width: "100%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
