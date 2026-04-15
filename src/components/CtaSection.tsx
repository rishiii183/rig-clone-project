import { useState } from "react";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="early-access" className="relative bg-background py-24 px-6 md:px-12 overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">
          Break free from big AI
        </h2>
        <p className="text-muted-foreground font-sans mb-10">
          Request early access to deploy Foretyx on your own infrastructure.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-md bg-card border border-border font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="btn-rig"
            >
              Request Early Access
            </button>
          </form>
        ) : (
          <div className="p-6 rounded-xl border border-primary/30 bg-card inline-block">
            <p className="text-primary font-mono text-sm">✓ You're on the list!</p>
            <p className="text-muted-foreground font-sans text-sm mt-2">We'll reach out when it's your turn.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CtaSection;
