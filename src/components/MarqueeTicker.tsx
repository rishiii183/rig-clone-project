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
  const doubled = [...items, ...items];

  return (
    <div className="bg-background border-y border-border py-4 overflow-hidden relative">

      <div className="relative z-10 animate-marquee flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="font-mono text-xs uppercase tracking-widest text-muted-foreground mx-8 flex items-center gap-8">
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeTicker;
