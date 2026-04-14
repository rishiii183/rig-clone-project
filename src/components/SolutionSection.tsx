import { Wifi, WifiOff, Infinity, Shield, Zap } from "lucide-react";

const features = [
  { icon: WifiOff, label: "Offline", title: "Work offline", desc: "Flights. Spotty Wi-Fi. Network outages. Nothing stops your flow." },
  { icon: Infinity, label: "Unlimited", title: "Remove the meter", desc: "Refactor the whole codebase. Riff on an idea all day. Run agent loops without cost." },
  { icon: Shield, label: "Privacy", title: "Sever the connection", desc: "Your code, keystrokes, and files never leave your machine. Not anonymized. Not sent." },
  { icon: Zap, label: "Latency", title: "Stop waiting", desc: "No round-trip to a data center. Inference happens on your machine in milliseconds." },
];

const SolutionSection = () => {
  return (
    <section className="bg-[#0a0a0a] py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-24">
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#ED462D] uppercase mb-4 block">Introducing Foretyx</span>
          <h2 className="text-5xl md:text-7xl lg:text-[100px] font-black leading-[0.95] tracking-[-0.04em] text-white">
            Everything local.
            <br />
            <span className="text-white/40">Own your AI.</span>
          </h2>
        </div>

        {/* Diagram */}
        <div className="p-[1px] bg-white/10 mb-20" style={{ clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)' }}>
          <div className="bg-[#0f0f0f] p-12 md:p-20 flex flex-col md:flex-row items-center justify-center gap-12 overflow-hidden relative" style={{ clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)' }}>
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none scanlines" />
            
            <div className="text-center p-8 border border-[#ED462D]/30 bg-[#ED462D]/5 flex-1 relative group">
              <div className="font-mono text-[10px] text-[#ED462D] mb-4 uppercase tracking-[0.2em]">Local Engine</div>
              <div className="font-mono text-xl text-white font-bold mb-2">Node Locked</div>
              <div className="font-mono text-xs text-white/40">GPU Inference · Context Graph</div>
              <div className="text-[10px] text-[#ED462D] mt-6 font-mono tracking-widest animate-pulse">STATUS: ACTIVE</div>
            </div>

            <div className="flex flex-col items-center gap-4 py-8">
              <div className="w-24 h-[1px] bg-[#ED462D] relative group">
                <div className="absolute inset-0 bg-[#ED462D] animate-ping opacity-20" />
              </div>
              <span className="font-mono text-[9px] text-[#ED462D] uppercase tracking-[0.4em] font-bold">Connection Severed</span>
              <div className="w-24 h-[1px] bg-[#ED462D]" />
            </div>

            <div className="text-center p-8 border border-white/5 bg-white/5 flex-1 opacity-20 filter grayscale">
              <div className="font-mono text-[10px] text-white/40 mb-4 uppercase tracking-[0.2em]">External Cloud</div>
              <div className="font-mono text-xl text-white/40 font-bold mb-2">Data Center</div>
              <div className="font-mono text-xs text-white/20">Telemetry · API Calls</div>
              <div className="text-[10px] text-white/20 mt-6 font-mono tracking-widest">STATUS: BLOCKED</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {features.map((f) => (
            <div key={f.label} className="p-10 bg-[#0a0a0a] hover:bg-white/[0.02] transition-colors group">
              <f.icon className="w-5 h-5 text-[#ED462D] mb-8 group-hover:scale-110 transition-transform" />
              <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-[9px] text-[#ED462D] uppercase tracking-[0.2em] font-bold">{f.label}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{f.title}</h3>
              <p className="text-sm text-white/40 font-sans leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
