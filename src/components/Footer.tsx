import Logo from "./Logo";

const WHATSAPP = "https://wa.me/905319477416";
const INSTAGRAM = "https://www.instagram.com/oz.ecu/";

export default function Footer() {
  return (
    <footer style={{ background: "#050505", borderTop: "1px solid #242424", padding: "40px 0 24px" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        <Logo size={90} />
        <div style={{ fontSize: 13, color: "#888" }}>© 2018 OZecu. Tüm hakları saklıdır.</div>
        <div style={{ display: "flex", gap: 20 }}>
          <a href="mailto:info@ozecu.com" style={{ fontSize: 12, color: "#888", textDecoration: "none", letterSpacing: 1, textTransform: "uppercase" }}>
            info@ozecu.com
          </a>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" style={{ fontSize: 12, color: "#888", textDecoration: "none", letterSpacing: 1, textTransform: "uppercase" }}>
            Instagram
          </a>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" style={{ fontSize: 12, color: "#888", textDecoration: "none", letterSpacing: 1, textTransform: "uppercase" }}>
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
