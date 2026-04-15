import { ArrowRight } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4">
      <div />
      <div className="flex items-center gap-8">
        <a href="#how-it-works" className="font-mono text-sm uppercase tracking-widest text-primary-foreground/90 hover:text-primary-foreground transition-all">
          How It Works
        </a>
        <a href="#approach" className="font-mono text-sm uppercase tracking-widest text-primary-foreground/90 hover:text-primary-foreground transition-all">
          Why Foretyx
        </a>
        <a href="#use-cases" className="font-mono text-sm uppercase tracking-widest text-primary-foreground/90 hover:text-primary-foreground transition-all">
          Use Cases
        </a>
        <a
          href="#early-access"
          className="btn-rig"
        >
          Request Early Access
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
