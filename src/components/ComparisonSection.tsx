import { Check, X, AlertCircle } from "lucide-react";

const ComparisonSection = () => {
  const tableData = [
    // ... existing tableData mapping remains the same
    {
      feature: "On-device processing (Raw prompts never leave)",
      foretyx: { status: "yes", text: "Yes always" },
      cloud: { status: "no", text: "Routes through their cloud" },
      dlp: { status: "no", text: "No" },
    },
    {
      feature: "Indian PII detection (Aadhaar, PAN, GSTIN)",
      foretyx: { status: "yes", text: "Native support" },
      cloud: { status: "no", text: "Not supported" },
      dlp: { status: "warn", text: "Limited" },
    },
    {
      feature: "Prompt injection blocking",
      foretyx: { status: "yes", text: "ONNX ML model" },
      cloud: { status: "warn", text: "Some offer basic rules" },
      dlp: { status: "no", text: "No" },
    },
    {
      feature: "Model-agnostic",
      foretyx: { status: "yes", text: "Any LLM" },
      cloud: { status: "warn", text: "Often vendor-locked" },
      dlp: { status: "no", text: "No" },
    },
    {
      feature: "Placeholder rehydration (local)",
      foretyx: { status: "yes", text: "On-device only" },
      cloud: { status: "no", text: "Server-side" },
      dlp: { status: "no", text: "No" },
    },
    {
      feature: "Audit log without raw content",
      foretyx: { status: "yes", text: "Metadata only" },
      cloud: { status: "no", text: "Logs raw prompts" },
      dlp: { status: "warn", text: "Varies" },
    },
    {
      feature: "DPDP Act compliance support",
      foretyx: { status: "yes", text: "Built for it" },
      cloud: { status: "no", text: "Not designed for India" },
      dlp: { status: "warn", text: "Partial" },
    },
  ];

  const renderStatus = (status: string, text: string) => {
    switch (status) {
      case "yes":
        return (
          <div className="flex items-center gap-2 text-[#ADE1ED]">
            <Check className="w-4 h-4 stroke-[3]" />
            <span className="text-xs font-medium">{text}</span>
          </div>
        );
      case "no":
        return (
          <div className="flex items-center gap-2 text-white/20">
            <X className="w-4 h-4 stroke-[3]" />
            <span className="text-xs">{text}</span>
          </div>
        );
      case "warn":
        return (
          <div className="flex items-center gap-2 text-amber-500/60">
            <AlertCircle className="w-4 h-4" />
            <span className="text-xs">{text}</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="why-foretyx" className="bg-background py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#ADE1ED] uppercase mb-4 block">
            Why Foretyx
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
            Not another cloud proxy.
            <br />
            <span className="text-white/40">A fundamentally different architecture.</span>
          </h2>
        </div>

        <div className="overflow-x-auto rounded-xl border border-white/10 bg-white/[0.02]">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-white/10 uppercase font-mono text-[10px] tracking-widest text-white/40">
                <th className="p-6 font-bold">Feature</th>
                <th className="p-6 font-bold bg-[#ADE1ED]/5 text-[#ADE1ED] border-x border-white/5 relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#ADE1ED]" />
                  Foretyx
                </th>
                <th className="p-6 font-bold">Cloud AI Gateways</th>
                <th className="p-6 font-bold">Enterprise DLP Tools</th>
              </tr>
            </thead>
            <tbody className="font-sans">
              {tableData.map((row, idx) => (
                <tr key={idx} className="border-b border-white/5 hover:bg-white/[0.01] transition-colors group">
                  <td className="p-6 text-sm text-white/70 font-medium">{row.feature}</td>
                  <td className="p-6 bg-[#ADE1ED]/[0.02] border-x border-white/5 group-hover:bg-[#ADE1ED]/[0.04]">
                    {renderStatus(row.foretyx.status, row.foretyx.text)}
                  </td>
                  <td className="p-6">
                    {renderStatus(row.cloud.status, row.cloud.text)}
                  </td>
                  <td className="p-6">
                    {renderStatus(row.dlp.status, row.dlp.text)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-white/30 uppercase tracking-[0.2em]">
            * Comparison based on standard enterprise deployments as of Q2 2026.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
