const WHATSAPP = "https://wa.me/905319477416";
const INSTAGRAM = "https://www.instagram.com/oz.ecu/";

export default function Contact() {
  return (
    <section id="iletisim" style={{ background: "#0a0a0a", padding: "96px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
        <p className="section-eyebrow reveal font-display">İletişim</p>
        <h2 className="section-title reveal font-display">
          Aracınız İçin<br />İletişime Geçin
        </h2>
        <p className="section-sub reveal">
          Araç marka, model ve yıl bilgisiyle ulaşın. Size özel fiyat ve işlem süresi belirtelim.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }} className="contact-grid">
          <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              style={{
                background: "#181818",
                border: "1px solid #242424",
                borderRadius: 4,
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                gap: 16,
                textDecoration: "none",
                color: "#fff",
                transition: "all 0.2s",
              }}
            >
              <div style={{ width: 44, height: 44, background: "rgba(37,211,102,0.1)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 12, color: "#888", letterSpacing: 1, textTransform: "uppercase", marginBottom: 2 }}>WhatsApp</div>
                <div style={{ fontWeight: 600, fontSize: 15 }}>0531 947 74 16</div>
              </div>
            </a>

            <a
              href="tel:+905319477416"
              style={{
                background: "#181818",
                border: "1px solid #242424",
                borderRadius: 4,
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                gap: 16,
                textDecoration: "none",
                color: "#fff",
                transition: "all 0.2s",
              }}
            >
              <div style={{ width: 44, height: 44, background: "rgba(232,22,30,0.1)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 20 }}>
                📞
              </div>
              <div>
                <div style={{ fontSize: 12, color: "#888", letterSpacing: 1, textTransform: "uppercase", marginBottom: 2 }}>Telefon</div>
                <div style={{ fontWeight: 600, fontSize: 15 }}>0531 947 74 16</div>
              </div>
            </a>

            <a
              href="mailto:info@ozecu.com"
              style={{
                background: "#181818",
                border: "1px solid #242424",
                borderRadius: 4,
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                gap: 16,
                textDecoration: "none",
                color: "#fff",
                transition: "all 0.2s",
              }}
            >
              <div style={{ width: 44, height: 44, background: "rgba(74,158,255,0.1)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 20 }}>
                ✉️
              </div>
              <div>
                <div style={{ fontSize: 12, color: "#888", letterSpacing: 1, textTransform: "uppercase", marginBottom: 2 }}>E-posta</div>
                <div style={{ fontWeight: 600, fontSize: 15 }}>info@ozecu.com</div>
              </div>
            </a>

            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              style={{
                background: "#181818",
                border: "1px solid #242424",
                borderRadius: 4,
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                gap: 16,
                textDecoration: "none",
                color: "#fff",
                transition: "all 0.2s",
              }}
            >
              <div style={{ width: 44, height: 44, background: "rgba(225,48,108,0.1)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#E1306C">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 12, color: "#888", letterSpacing: 1, textTransform: "uppercase", marginBottom: 2 }}>Instagram</div>
                <div style={{ fontWeight: 600, fontSize: 15 }}>@oz.ecu</div>
              </div>
            </a>
          </div>

          <div className="reveal reveal-delay-1">
            <div
              style={{
                background: "#181818",
                border: "1px solid #242424",
                borderRadius: 4,
                padding: 32,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 18,
              }}
            >
              <div className="font-display" style={{ fontSize: 64, fontWeight: 900, lineHeight: 1, color: "#e8161e" }}>
                700<span style={{ color: "#fff" }}>+</span>
              </div>
              <p style={{ fontSize: 14, color: "#ccc", lineHeight: 1.7, maxWidth: 380 }}>
                OZecu farkıyla yola çıkan araç sayısı. Her biri mühendis onaylı, test edilmiş bir harita ile çalışıyor.
              </p>
              <div style={{ display: "flex", gap: 32, marginTop: 8, flexWrap: "wrap" }}>
                <div>
                  <div className="font-display" style={{ fontSize: 26, fontWeight: 800, color: "#fff" }}>25 HP</div>
                  <div style={{ fontSize: 11, color: "#888", letterSpacing: 1, textTransform: "uppercase", marginTop: 2 }}>Ort. Güç Artışı</div>
                </div>
                <div>
                  <div className="font-display" style={{ fontSize: 26, fontWeight: 800, color: "#fff" }}>8+</div>
                  <div style={{ fontSize: 11, color: "#888", letterSpacing: 1, textTransform: "uppercase", marginTop: 2 }}>Yıllık Deneyim</div>
                </div>
                <div>
                  <div className="font-display" style={{ fontSize: 26, fontWeight: 800, color: "#fff" }}>%100</div>
                  <div style={{ fontSize: 11, color: "#888", letterSpacing: 1, textTransform: "uppercase", marginTop: 2 }}>Müşteri Memnuniyeti</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
