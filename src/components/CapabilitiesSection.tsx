const capabilities = [
  { num: "01", title: "Inspects every packet.", desc: "Analyzes prompts and completions in real-time, identifying sensitive data before it leaves your machine." },
  { num: "02", title: "Scrubs PII automatically.", desc: "Detects and redacts emails, API keys, and names using a local high-performance inspection engine." },
  { num: "03", title: "Prevents prompt injections.", desc: "Deep-scans incoming instructions to block malicious redirects or jailbreak attempts at the edge." },
  { num: "04", title: "Enforces custom policies.", desc: "Set granular rules for which models can be accessed and what data types are permitted for export." },
  { num: "05", title: "Encrypts audit trails.", desc: "Generates a tamper-proof forensic log of all AI interactions, stored locally and synced securely." },
  { num: "06", title: "Hardened Data Plane.", desc: "A security-first architecture designed to act as a one-way valve: insights come in, secrets stay in." },
];

const stats = [
  { label: "Latency", value: "0ms", sub: "Real-time Guardrail" },
  { label: "Privacy", value: "100%", sub: "Air-gapped by design" },
  { label: "Security / Node", value: "MAX", sub: "Hardened infrastructure" },
  { label: "Uptime", value: "Local", sub: "No dependency on cloud" },
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {capabilities.map((c) => (
            <div key={c.num} className="p-6 rounded-lg border border-border bg-background group hover:border-primary/30 transition-colors">
              <span className="font-mono text-xs text-primary mb-4 block">[ {c.num} ]</span>
              <h3 className="text-lg font-bold text-foreground mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">{c.desc}</p>
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
