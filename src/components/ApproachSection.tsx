const steps = [
  {
    num: "01",
    label: "POLICY ENGINE",
    title: "A local guardrail, engineered for compliance.",
    desc: "Your security policies are defined once in your Control Plane and pushed to every sidecar in real time via WebSocket. Foretyx enforces them locally — even when the network is down. No policy gap, no override window, no exception.",
  },
  {
    num: "02",
    label: "THE DATA PLANE",
    title: "Full inspection, compressed to run anywhere.",
    desc: "The Foretyx Data Plane is a lightweight sidecar deployable on any employee machine. It intercepts, scrubs, and inspects prompts using a Presidio-powered PII detector and an ONNX DistilBERT injection classifier — entirely offline, with zero cloud dependency.",
  },
  {
    num: "03",
    label: "AUDIT CONTROL",
    title: "A custom vault, designed for sovereignty.",
    desc: "Only metadata reaches the Control Plane — timestamps, entity types flagged, injection confidence scores, policy decisions. Raw prompts and PII never leave the device. Your audit trail is forensically complete without ever becoming a liability.",
  },
];

const ApproachSection = () => {
  return (
    <section id="approach" className="bg-[#0a0a0a] py-32 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-24">
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#ADE1ED] uppercase mb-4 block">Our Approach</span>
          <h2 className="text-5xl md:text-7xl lg:text-[100px] font-black leading-[0.95] tracking-[-0.04em] text-white">
            Safety beats scale.
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {steps.map((s, idx) => (
            <div 
              key={s.num} 
              className={`p-10 md:p-14 transition-colors group ${idx === 1 ? 'bg-white/[0.04]' : 'bg-[#0a0a0a] hover:bg-white/[0.02]'}`}
            >
              <span className="font-mono text-[9px] text-[#ADE1ED] uppercase tracking-[0.4em] font-bold block mb-10">{s.label}</span>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight tracking-tight group-hover:text-[#ADE1ED] transition-colors">{s.title}</h3>
                <p className="text-sm text-white/40 font-sans leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison section */}
        <div className="mt-32 grid lg:grid-cols-2 gap-20">
          <div>
            <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-[1px] bg-[#ADE1ED]" />
                <h4 className="font-mono text-[10px] text-white uppercase tracking-[0.3em]">DATA SOVEREIGNTY</h4>
            </div>
            <div className="space-y-12">
              <div>
                <div className="flex justify-between font-mono text-[10px] mb-4">
                  <span className="text-white uppercase tracking-widest">FORETYX DATA PLANE</span>
                  <span className="text-[#ADE1ED]">100% PRIVATE</span>
                </div>
                <div className="h-2 bg-white/5 relative">
                  <div className="h-full bg-[#ADE1ED]" style={{ width: "100%" }} />
                  <div className="absolute inset-0 flex justify-between pointer-events-none">
                    {[...Array(11)].map((_, i) => (
                        <div key={i} className="w-px h-full bg-[#0a0a0a]/50" />
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between font-mono text-[10px] mb-4">
                  <span className="text-white/40 uppercase tracking-widest">UNSECURED CLOUD ACCESS</span>
                  <span className="text-white/20">~0% CONTROL</span>
                </div>
                <div className="h-2 bg-white/5">
                  <div className="h-full bg-white/10" style={{ width: "5%" }} />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-[1px] bg-[#ADE1ED]" />
                <h4 className="font-mono text-[10px] text-white uppercase tracking-[0.3em]">SECURITY OVERHEAD</h4>
            </div>
            <div className="space-y-12">
              <div>
                <div className="flex justify-between font-mono text-[10px] mb-4">
                  <span className="text-white uppercase tracking-widest">FORETYX GUARD PIPELINE</span>
                  <span className="text-[#ADE1ED]">&lt;200ms (REAL-TIME)</span>
                </div>
                <div className="h-2 bg-white/5">
                  <div className="h-full bg-[#ADE1ED]" style={{ width: "20%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between font-mono text-[10px] mb-4">
                  <span className="text-white/40 uppercase tracking-widest">TRADITIONAL CLOUD FIREWALL</span>
                  <span className="text-white/20">500ms+ (LATENT)</span>
                </div>
                <div className="h-2 bg-white/5">
                  <div className="h-full bg-white/10" style={{ width: "90%" }} />
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
