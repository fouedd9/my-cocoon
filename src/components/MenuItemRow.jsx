import { Gem } from "lucide-react";
import { fmt } from "../utils/utils";

function MenuItemRow({ item }) {
  if (item.special && item.subs) {
    return (
      <div
        style={{ padding: "20px", marginBlock: "24px" }}
        className="special-card bg-noir-card border border-gold/15 rounded-xl p-5 sm:p-7 my-6 scroll-reveal"
      >
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-4">
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className="font-display text-xl sm:text-2xl text-gold font-medium">
              {item.n}
            </h3>
            {item.tag && (
              <span
                style={{ padding: "4px 8px" }}
                className="text-[10px] font-body font-semibold tracking-widest uppercase bg-gold/10 text-gold-light px-2.5 py-1 rounded-full border border-gold/20"
              >
                {item.tag}
              </span>
            )}
          </div>
          <span className="font-body text-gold-light font-medium text-lg tracking-wide">
            {fmt(item.p)}
          </span>
        </div>
        {item.d && (
          <p
            style={{ marginBottom: "1.25rem" }}
            className="text-cream-muted text-sm font-body mb-5 leading-relaxed"
          >
            {item.d}
          </p>
        )}
        <div className="space-y-4">
          {item.subs.map((sub, si) => (
            <div style={{ paddingTop: "1.5rem" }} key={si}>
              <p
                style={{ fontFamily: "Cormorant Garamond, serif" }}
                className="sub-heading text-gold-dark font-menu text-lg font-semibold mb-2"
              >
                {sub.t}
              </p>
              <ul style={{ marginTop: "1rem" }} className="space-y-1.5 ml-1">
                {sub.i.map((line, li) => (
                  <li
                    style={{ paddingBlock: "4px" }}
                    key={li}
                    className="flex items-start gap-2 text-cream-dark text-sm font-body"
                  >
                    <span className="text-gold/40 mt-1.5 text-[6px]">
                      {/* <i className="fa-solid fa-diamond" /> */}
                      <Gem size={12} strokeWidth={2} />
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="menu-row scroll-reveal py-3 border-b border-noir-lighter/60">
      <div className="flex items-baseline">
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span className="item-name font-menu text-lg sm:text-xl text-cream font-medium transition-colors duration-300 whitespace-nowrap pr-1">
            {item.n}
          </span>
          {item.tag && (
            <span
              style={{ padding: "4px 8px" }}
              className="text-[9px] font-body font-semibold tracking-widest uppercase bg-gold/10 text-gold-light px-2 py-0.5 rounded-full border border-gold/20 shrink-0"
            >
              {item.tag}
            </span>
          )}
        </div>
        <span className="dot-leader" />
        {item.p != null && (
          <span className="font-body text-gold font-medium text-sm sm:text-base tracking-wide whitespace-nowrap pl-1">
            {fmt(item.p)}
          </span>
        )}
      </div>
      <div className="flex items-center gap-2 flex-wrap mt-1">
        {item.d && (
          <p className="text-cream-muted text-xs sm:text-sm font-body leading-relaxed">
            {item.d}
          </p>
        )}
      </div>
    </div>
  );
}
export default MenuItemRow;
