const useCases = [
  {
    vertical: "LEGAL / LEGALTECH",
    risk: "Lawyers drafting contracts or arguments with AI expose client names, case details, and privileged information to third-party LLM logs.",
    solution: "Scrubs client names, case references, and legal entities before any prompt reaches the model. Full audit trail for privilege documentation.",
  },
  {
    vertical: "HEALTHCARE / PHARMA",
    risk: "Clinical researchers and admin staff using AI for documentation inadvertently expose patient records, diagnoses, and drug trial data.",
    solution: "Detects and redacts patient identifiers, diagnosis codes, and drug names. HIPAA and DPDP Act audit logs generated automatically.",
  },
  {
    vertical: "BFSI / FINTECH",
    risk: "Financial analysts and ops teams pasting account numbers, KYC data, and transaction histories into AI tools for analysis or drafting.",
    solution: "Intercepts account numbers, PAN, Aadhaar, IFSC, and transaction data. Policy engine can block entire data categories for regulated roles.",
  },
  {
    vertical: "IT / SAAS COMPANIES",
    risk: "Engineers pasting source code, API keys, internal architecture docs, and customer data into Copilot or ChatGPT for debugging.",
    solution: "Detects API keys, secrets, internal hostnames, and proprietary code patterns. Blocks exfiltration of IP before it happens.",
  },
  {
    vertical: "GOVERNMENT / DEFENCE",
    risk: "Public sector teams using AI for drafting, research, or analysis, with sensitive citizen data, policy documents, or classified references.",
    solution: "Air-gapped deployment option. No data ever reaches any external service. Full local processing with tamper-proof audit logs for compliance.",
  },
];

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="bg-[#0a0a0a] py-32 px-6 md:px-12 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#ADE1ED] uppercase mb-4 block">
            Use Cases
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
            Every industry.
            <br />
            <span className="text-white/40">Same problem.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {useCases.map((uc, idx) => (
            <div
              key={idx}
              className="group p-8 md:p-10 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm transition-all hover:border-white/10"
            >
              <div className="font-mono text-[9px] font-bold tracking-[0.2em] text-[#ADE1ED] uppercase mb-10 pb-4 border-b border-white/5">
                {uc.vertical}
              </div>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="font-mono text-[10px] text-white/30 uppercase tracking-[0.2em] mb-4">The Risk</h4>
                  <p className="text-sm md:text-base text-white/40 leading-relaxed font-sans italic">
                    "{uc.risk}"
                  </p>
                </div>
                
                <div>
                  <h4 className="font-mono text-[10px] text-[#ADE1ED] uppercase tracking-[0.2em] mb-4">What Foretyx Does</h4>
                  <p className="text-sm md:text-base text-white font-medium leading-relaxed font-sans">
                    {uc.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
