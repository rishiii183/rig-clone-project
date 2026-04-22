const items = [
  "Zero PII leakage",
  "On-device inference",
  "DPDP Act compliant",
  "Prompt injection blocked",
  "Aadhaar & PAN detection",
  "Sub-200ms guard pipeline",
  "Policy enforced locally",
  "GDPR ready",
  "Air-gapped by design",
  "No raw prompts to cloud",
  "Audit trail encrypted",
];

const MarqueeTicker = () => {
  const allItems = [...items, ...items, ...items, ...items];

  return (
    <div className="bg-[#0a0a0a] border-y border-white/5 py-5 overflow-hidden relative">
      <div className="flex animate-marquee whitespace-nowrap">
        {allItems.map((item, i) => (
          <div key={i} className="flex items-center gap-10 mx-5">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors cursor-default">
              {item}
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#ADE1ED] shadow-[0_0_8px_rgba(173,225,237,0.5)]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeTicker;
