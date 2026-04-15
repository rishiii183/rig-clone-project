const WhyNow = () => {
  const stats = [
    {
      stat: "5×",
      title: "AI usage growth in 2 years",
      body: "But enterprise AI governance tooling is 3 years behind. The attack surface is growing faster than the defences.",
    },
    {
      stat: "DPDP",
      title: "India's Data Protection Act is now in force",
      body: "For the first time, organisations are legally accountable for AI-exposed personal data. Non-compliance carries penalties. The legal pressure is new and real.",
    },
    {
      stat: "€4B+",
      title: "GDPR fines crossed €4 billion",
      body: "Global regulators are watching. Every enterprise using cloud AI without a governance layer is a liability waiting to be triggered. Foretyx is the governance layer.",
    },
  ];

  return (
    <section id="why-now" className="py-32 px-6 md:px-12 bg-[#0a0a0a] border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#ADE1ED] uppercase mb-4 block">
            Why Now
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
            The window is open.
            <br />
            <span className="text-white/40">It won't be for long.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm group hover:border-white/10 transition-all"
            >
              <div className="font-mono text-5xl font-black text-[#ADE1ED] mb-6 group-hover:scale-110 transition-transform origin-left">
                {item.stat}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                {item.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed font-sans">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-white/30 text-xs font-mono uppercase tracking-[0.2em] max-w-xl mx-auto leading-relaxed">
            Foretyx is the compliance layer enterprises are scrambling to build themselves — and failing to.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyNow;
