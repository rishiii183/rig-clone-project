import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-section relative min-h-screen px-6 md:px-12 pt-6 pb-12 overflow-hidden flex flex-col">

      {/* 1. TOP HEADER ROW (Logo & Nav) */}
      <div className="relative z-20 flex items-center justify-between w-full mb-4">
        <div className="font-mono text-2xl font-bold tracking-tighter text-primary-foreground">
          FORETYX
        </div>


      </div>

      {/* --- MOVING WATERMARKS --- */}

      {/* TOP SIDE WATERMARK */}
      <div className="absolute top-20 inset-x-0 overflow-hidden pointer-events-none select-none opacity-[0.03] z-0">
        <div className="whitespace-nowrap font-mono text-[10vw] font-black text-primary-foreground leading-none animate-[slide_50s_linear_infinite]">
          FORETYX FORETYX FORETYX FORETYX
        </div>
      </div>

      {/* MIDDLE PART WATERMARK */}
      <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none opacity-[0.05] z-0">
        <div className="whitespace-nowrap font-mono text-[18vw] font-black text-primary-foreground leading-none animate-[slide_60s_linear_infinite_reverse]">
          FORETYX FORETYX FORETYX FORETYX
        </div>
      </div>

      {/* BOTTOM SIDE WATERMARK */}
      <div className="absolute bottom-10 inset-x-0 overflow-hidden pointer-events-none select-none opacity-[0.03] z-0">
        <div className="whitespace-nowrap font-mono text-[10vw] font-black text-primary-foreground leading-none animate-[slide_55s_linear_infinite]">
          FORETYX FORETYX FORETYX FORETYX
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 max-w-4xl mt-8 my-auto">
        {/* mt-8 pulls the headline close to the logo, my-auto keeps the content vertically balanced */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-[-0.04em] text-primary-foreground mb-8">
          Your employees use AI.
          <br />
          Your data shouldn't leave the building.
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mb-10 font-sans">
          Foretyx is an on-device AI security gateway. It intercepts employee prompts before they reach any external LLM scrubbing PII, blocking injections, and enforcing your org's policies. Entirely on your infrastructure. Zero raw data ever leaves unprotected.
        </p>
        <div className="flex flex-wrap gap-4 mt-6">
          <a href="#early-access" className="btn-rig">
            Request Early Access
          </a>
          <a
            href="#how-it-works"
            className="btn-rig-outline !text-primary-foreground before:!border-primary-foreground/30 hover:before:!bg-primary-foreground/10"
          >
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;