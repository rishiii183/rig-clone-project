const complianceCards = [
  {
    name: "DPDP ACT 2023",
    region: "India",
    body: "Native Indian PII detection (Aadhaar, PAN, GSTIN, Voter ID, IFSC). Metadata-only audit logs. Data never leaves Indian infrastructure when deployed on-prem. Designed to satisfy data localisation requirements.",
    isRoadmap: false,
  },
  {
    name: "GDPR",
    region: "EU / UK",
    body: "Right to Erasure supported — raw prompts never stored. Data minimisation by design — only metadata synced. Audit trail provides the processing records required for GDPR Article 30 compliance.",
    isRoadmap: false,
  },
  {
    name: "HIPAA",
    region: "USA / Global Healthcare",
    body: "PHI detection across patient identifiers, diagnosis codes, and medical record numbers. Audit logs include entity types flagged per interaction. No raw health data stored or transmitted.",
    isRoadmap: false,
  },
  {
    name: "SOC 2 TYPE II",
    region: "Global Enterprise",
    body: "Foretyx's audit log architecture is designed to support SOC 2 Type II certification. Tamper-proof metadata logs, access controls, and encrypted local storage are part of the current build.",
    isRoadmap: true,
  },
];

const ComplianceSection = () => {
  return (
    <section id="compliance" className="bg-background py-32 px-6 md:px-12 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#ADE1ED] uppercase mb-4 block">
            Compliance
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
            Built for the regulations
            <br />
            <span className="text-white/40">that are already in force.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {complianceCards.map((card, idx) => (
            <div
              key={idx}
              className="p-8 md:p-10 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm relative group transition-all hover:bg-white/[0.08]"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-[#ADE1ED] tracking-tight mb-2">
                    {card.name}
                  </h3>
                  <span className="font-mono text-[10px] text-white/30 uppercase tracking-[0.2em]">
                    {card.region}
                  </span>
                </div>
                {card.isRoadmap && (
                  <span className="px-2 py-0.5 rounded bg-[#ADE1ED]/10 text-[#ADE1ED] text-[9px] font-bold tracking-widest border border-[#ADE1ED]/20">
                    ROADMAP
                  </span>
                )}
              </div>
              
              <p className="text-sm md:text-base text-white/50 leading-relaxed font-sans">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
