const capabilities = [
  { 
    num: "01", 
    title: "Intercepts every prompt.", 
    desc: "Every employee prompt to any external LLM passes through the Foretyx sidecar before it leaves the device. Nothing bypasses inspection. The system fails closed — if the sidecar is down, the request is blocked, not passed through." 
  },
  { 
    num: "02", 
    title: "Scrubs 20+ PII entity types.", 
    desc: "Detects and redacts names, emails, phone numbers, Aadhaar, PAN, GSTIN, Voter ID, IFSC codes, Driving License numbers, API keys, crypto wallet addresses, and more — using a Presidio-powered local detection engine." 
  },
  { 
    num: "03", 
    title: "Blocks prompt injections.", 
    desc: "An ONNX DistilBERT model scores every prompt for injection risk in real time. High-confidence adversarial inputs are blocked before reaching the model. Fails closed — ambiguous cases are blocked, not passed." 
  },
  { 
    num: "04", 
    title: "Enforces your org's policies.", 
    desc: "Admins define rules in the Control Plane — which LLMs employees can access, what data types are forbidden, which teams have exceptions. Rules are pushed to every sidecar instantly via WebSocket." 
  },
  { 
    num: "05", 
    title: "Logs metadata, never content.", 
    desc: "Every interaction generates a structured metadata event: entity types detected, injection score, policy decision, timestamp, and device ID. Synced to the Control Plane. Raw prompt content never stored anywhere." 
  },
  { 
    num: "06", 
    title: "Built for Indian compliance.", 
    desc: "The only AI security gateway with native recognition of Indian PII — Aadhaar, PAN card, GSTIN, IFSC, Driving Licence, Voter ID, UPI IDs. Designed for DPDP Act compliance from the ground up." 
  },
];

const stats = [
  { label: "Latency", value: "<200ms", sub: "Full guard pipeline" },
  { label: "Privacy", value: "100%", sub: "Air-gapped by design" },
  { label: "PII Recall", value: "99.9%", sub: "Target SLA" },
  { label: "Uptime", value: "Local", sub: "No cloud dependency" },
];

const CapabilitiesSection = () => {
  return (
    <section className="bg-card py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-label mb-6 block">Capabilities</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
            Your data, secured.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 px-4">
          {capabilities.map((c) => (
            <div key={c.num} className="capability-card-parent h-full">
              <div className="capability-card p-10 h-full flex flex-col justify-end">
                <div className="capability-num-box">[ {c.num} ]</div>
                
                <div className="capability-content">
                  <h3 className="capability-title text-2xl font-bold text-white mb-4 tracking-tight leading-tight">
                    {c.title}
                  </h3>
                  <p className="capability-desc text-[13px] text-white/40 font-sans leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden">
          {stats.map((s) => (
            <div key={s.label} className="bg-background p-6 text-center">
              <div className="font-mono text-xs text-primary uppercase tracking-wider mb-2">{s.label}</div>
              <div className="text-3xl md:text-4xl font-extrabold text-foreground mb-1">{s.value}</div>
              <div className="text-xs text-muted-foreground font-sans">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
