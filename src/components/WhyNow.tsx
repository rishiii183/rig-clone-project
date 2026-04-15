const WhyNow = () => {
  const stats = [
    {
      stat: "5×",
      label: "AI usage growth in 2 years",
      detail: "But governance is 3 years behind. The gap between adoption and accountability has never been wider.",
    },
    {
      stat: "DPDP",
      label: "India's Data Protection Act is now in force",
      detail: "Organizations are now legally accountable for every data point processed — including AI prompts.",
    },
    {
      stat: "€4B+",
      label: "GDPR fines crossed €4 billion",
      detail: "Global regulators are watching. Non-compliance is no longer a theoretical risk — it's a balance sheet risk.",
    },
  ];

  return (
    <section id="why-now" className="py-24 px-6 md:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-foreground mb-4">
            Why Now
          </h2>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
            The regulatory window is closing. The organizations that act first will define the new standard for AI compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl border border-border bg-card/50 hover:border-primary/40 transition-all group"
            >
              <div className="font-mono text-5xl font-black text-primary mb-4 group-hover:scale-105 transition-transform inline-block">
                {item.stat}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3 leading-snug">
                {item.label}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNow;
