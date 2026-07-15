import { ChevronDown } from "lucide-react";
import Ornament from "./Ornament";

function Hero() {
  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 45%, rgba(201,169,110,0.04) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 80%, rgba(201,169,110,0.02) 0%, transparent 50%)",
        }}
      />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-px h-32 bg-linear-to-b from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-px h-32 bg-linear-to-b from-transparent via-gold/20 to-transparent" />

      <div
        style={{ display: "flex", flexDirection: "column", gap: "24px" }}
        className="relative z-10"
      >
        <p className="font-body text-cream-muted text-xs sm:text-sm tracking-[0.35em] uppercase mb-6">
          Restaurant &amp; Brasserie
        </p>
        <h1 className="gold-shimmer font-display text-6xl sm:text-8xl lg:text-9xl font-semibold tracking-[0.15em] leading-none mb-6">
          MY COCOON
        </h1>
        <Ornament />
        <p className="font-body text-cream-dark text-sm sm:text-base tracking-[0.2em] uppercase mb-2">
          Monastir, Tunisie
        </p>
        <p className="font-body text-gold/60 text-xs tracking-[0.3em] uppercase mt-4">
          Menu 2026
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-indicator">
        <ChevronDown className=" text-gold/40 text-sm" size={32} />
      </div>
    </header>
  );
}
export default Hero;
