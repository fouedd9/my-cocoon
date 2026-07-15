import { useEffect, useState } from "react";

function StickyNav({ sectionIds, activeSection }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 70;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[150] transition-all duration-500 ${scrolled ? "bg-noir/90 backdrop-blur-xl border-b border-gold/10 shadow-lg shadow-black/30" : "bg-transparent"}`}
      role="navigation"
      aria-label="Navigation du menu"
    >
      <div
        className="nav-scroll flex items-center gap-1 sm:gap-2 overflow-x-auto px-4 sm:px-6 py-3 max-w-6xl mx-auto no-scrollbar"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          padding: "12px 0",
          width: "100dvw",
          overflow: "scroll",
        }}
      >
        {sectionIds.map((s) => (
          <button
            style={{
              display: "flex",
              padding: "12px",
              gap: "22px",
              fontFamily: "Inter', sans-serif",
              fontSize: "14px",
              fontWeight: 600,
            }}
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className={`nav-link whitespace-nowrap text-xs sm:text-sm font-body font-medium tracking-wide px-2 sm:px-3 py-1.5 rounded-md transition-colors duration-300 ${activeSection === s.id ? "active text-gold" : "text-cream-muted hover:text-cream"}`}
            aria-current={activeSection === s.id ? "true" : "false"}
          >
            {s.title}
          </button>
        ))}
      </div>
    </nav>
  );
}
export default StickyNav;
