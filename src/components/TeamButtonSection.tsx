import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const teamPreview = [
  { name: "Soham Singh", avatar: "S" },
  { name: "Soumik Misra", avatar: "S" },
  { name: "Rishi Ghosh", avatar: "R" },
  { name: "Upasana Mishra", avatar: "U" },
];

const TeamButtonSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#0a0a0a] py-32 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#ADE1ED]/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        <span className="font-mono text-[10px] tracking-[0.3em] text-[#ADE1ED] uppercase mb-6 block">
          Elite Engineering
        </span>
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-12">
          Built by engineers who<br />
          <span className="text-white/40">know the cost of data leaks.</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {teamPreview.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#ADE1ED]/30 transition-all duration-500">
                <span className="text-lg font-black text-white/20">{member.avatar}</span>
              </div>
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">{member.name}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate("/team")}
          className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-black hover:bg-[#ADE1ED] transition-all duration-300 rounded-full font-bold text-sm tracking-wider uppercase overflow-hidden"
        >
          <span className="relative z-10">View Full Team</span>
          <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default TeamButtonSection;
