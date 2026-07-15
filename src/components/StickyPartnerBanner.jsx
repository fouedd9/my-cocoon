import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";

import { partners } from "../data/partners";

export default function StickyPartnerBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  const partner = useMemo(() => {
    return partners.find((item) => item.active);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!partner) return null;

  const shouldShow = isVisible && !isClosed;

  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "60px",
        zIndex: 300,
        transform: shouldShow ? "translateY(0)" : "translateY(100%)",
        opacity: shouldShow ? 1 : 0,
        transition: "transform 0.35s ease, opacity 0.35s ease",
        pointerEvents: shouldShow ? "auto" : "none",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          background: "rgba(17, 17, 17, 0.96)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderTop: "1px solid rgba(201, 169, 110, 0.25)",
          boxShadow: "0 -10px 30px rgba(0, 0, 0, 0.35)",
        }}
      >
        <a
          href={partner.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "6px 48px 6px 10px",
            textDecoration: "none",
            minWidth: 0,
          }}
        >
          <img
            src={partner.image}
            alt={partner.name}
            style={{
              width: "48px",
              height: "48px",
              objectFit: "cover",
              borderRadius: "8px",
              flexShrink: 0,
            }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minWidth: 0,
              flex: 1,
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "13px",
                fontWeight: 600,
                lineHeight: 1.2,
                color: "#f7f0e7",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {partner.title}
            </p>

            <p
              style={{
                margin: 0,
                marginTop: "3px",
                fontSize: "11px",
                lineHeight: 1.2,
                color: "#c9a96e",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {partner.description}
            </p>
          </div>
        </a>

        {/* <button
          type="button"
          onClick={() => setIsClosed(true)}
          aria-label="Fermer la publicité partenaire"
          style={{
            position: "absolute",
            top: "50%",
            right: "12px",
            transform: "translateY(-50%)",
            width: "30px",
            height: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.06)",
            color: "#c9a96e",
            cursor: "pointer",
          }}
        >
          <X size={16} />
        </button> */}
      </div>
    </div>
  );
}
