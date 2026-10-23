const cards = [
  {
    title: "NABL Accredited",
    sub: "ISO/IEC 17025",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3l2.1 4.3 4.7.7-3.4 3.3.8 4.7L12 14.8 7.8 16l.8-4.7L5.2 8l4.7-.7L12 3z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path d="M8 20h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Reliable & Accurate",
    sub: "Test Results",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3l7 3v5c0 4.6-2.9 8-7 9.2C7.9 19 5 15.6 5 11V6l7-3z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M9.2 11.8l1.9 1.9 3.8-3.9"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Global Standards",
    sub: "Market Acceptance",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M3.8 12h16.4M12 3.8c2.2 2.3 3.4 5.1 3.4 8.2S14.2 18 12 20.2C9.8 18 8.6 15.1 8.6 12S9.8 6.1 12 3.8z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    title: "Expert Engineers",
    sub: "Technical Support",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="16" cy="9.5" r="2.1" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M4 18.2c.6-2.3 2.5-3.6 5-3.6s4.4 1.3 5 3.6M13.4 14c1.4-.3 2.9 0 4.1.9.8.6 1.4 1.6 1.7 3.1"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function TrustBar() {
  return (
    <section
      id="section-2"
      className="section-two"
      style={{
        display: "block",
        visibility: "visible",
        opacity: 1,
        position: "relative",
        zIndex: 30,
        background: "#eef3fb",
        padding: "2.5rem 1rem 3rem",
        margin: 0,
      }}
    >
      <div
        className="section-two-inner"
        style={{
          width: "min(1180px, 100%)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: "1rem",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.title}
            className="section-two-card"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.9rem",
              background: "#fff",
              border: "1px solid #d9e1ef",
              borderRadius: "1rem",
              boxShadow: "0 12px 28px rgba(15,23,42,0.1)",
              padding: "1.2rem",
            }}
          >
            <span
              style={{
                width: "2.6rem",
                height: "2.6rem",
                borderRadius: "0.75rem",
                background: "#e8f1ff",
                color: "#1f6fe5",
                display: "grid",
                placeItems: "center",
                flexShrink: 0,
              }}
            >
              {card.icon}
            </span>
            <div>
              <strong style={{ display: "block", color: "#0f172a", fontSize: "1rem" }}>
                {card.title}
              </strong>
              <span
                style={{
                  display: "block",
                  marginTop: "0.2rem",
                  color: "#5a6785",
                  fontSize: "0.85rem",
                }}
              >
                {card.sub}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
