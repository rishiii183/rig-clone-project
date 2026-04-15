import { ShieldCheck, Cpu, Database } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Intercept",
      description: "Prompt captured before it leaves the device, ensuring no sensitive data is transmitted in raw form.",
      icon: <Cpu className="w-8 h-8 text-primary" />,
    },
    {
      title: "Scrub + Guard",
      description: "PII removed and injections blocked via Presidio and ONNX. Advanced models identify and neutralize risks in real-time.",
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    },
    {
      title: "Rehydrate",
      description: "Clean response is restored locally on-device. Context is maintained while ensuring no data ever leaves unprotected.",
      icon: <Database className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 md:px-12 bg-card/50 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
            Foretyx sits at the edge of your infrastructure, providing a transparent security layer for every AI interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-2xl border border-border bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all group"
            >
              <div className="mb-6 p-3 rounded-xl bg-primary/5 inline-block group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
