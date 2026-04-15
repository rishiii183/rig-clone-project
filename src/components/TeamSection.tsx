const teamMembers = [
  {
    name: "Soham",
    role: "CEO & Co-founder",
    oneLiner: "Leads product strategy and the Control Plane — the centralised policy, analytics, and auth layer that governs every deployment.",
    avatar: "S",
  },
  {
    name: "Soummik",
    role: "CTO & Co-founder",
    oneLiner: "Owns the Data Plane sidecar — PII detection, ONNX injection models, the guard pipeline, and local inference. The person who built the engine.",
    avatar: "S",
  },
  {
    name: "Rishi",
    role: "COO & Co-founder",
    oneLiner: "Leads infrastructure, deployment, and the desktop application. Responsible for making Foretyx run reliably on every enterprise machine at scale.",
    avatar: "R",
  },
  {
    name: "Aditya",
    role: "Business & GTM Lead",
    oneLiner: "Drives go-to-market, compliance documentation, and enterprise partnerships. Translates technical architecture into regulatory and commercial value.",
    avatar: "A",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="bg-[#0a0a0a] py-32 px-6 md:px-12 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#ADE1ED] uppercase mb-4 block">
            The Team
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
            Built by engineers who
            <br />
            <span className="text-white/40">got tired of watching data leak.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 overflow-hidden group-hover:border-[#ADE1ED]/30 transition-all duration-500 group-hover:scale-105">
                <span className="text-2xl font-black text-white/20 group-hover:text-[#ADE1ED]/50">{member.avatar}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#ADE1ED] transition-colors">{member.name}</h3>
              <span className="font-mono text-[10px] text-[#ADE1ED] uppercase tracking-[0.2em] mb-4 block">
                {member.role}
              </span>
              <p className="text-xs text-white/40 leading-relaxed font-sans max-w-[200px]">
                {member.oneLiner}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm italic text-white/30 font-sans leading-relaxed">
            "We built Foretyx after watching a team member paste a client database into ChatGPT by accident. That was the moment we knew the problem was real."
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
