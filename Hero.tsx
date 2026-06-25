import { useEffect, useState } from "react";

const WHATSAPP = "https://wa.me/905319477416";

// Türkiye piyasasında satılan günlük araç görselleri (Pexels stok, yüksek kalite)
const heroImages = [
  "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1920",
  "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1920",
  "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1920",
  "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=1920",
];

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % heroImages.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 64,
      }}
    >
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        {heroImages.map((src, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              inset: 0,
              opacity: i === idx ? 1 : 0,
              filter: "brightness(0.35) saturate(0.6)",
              backgroundImage: `url('${src}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "opacity 1.2s ease",
            }}
          />
        ))}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(105deg, rgba(10,10,10,0.97) 0%, rgba(10,10,10,0.82) 50%, rgba(10,10,10,0.55) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 4,
            background: "linear-gradient(to bottom, transparent, #e8161e, transparent)",
            animation: "linePulse 3s ease-in-out infinite",
          }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "0 40px", width: "100%" }}>
        <p
          className="font-display"
          style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: 5,
            textTransform: "uppercase",
            color: "#e8161e",
            marginBottom: 20,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span style={{ display: "block", width: 32, height: 2, background: "#e8161e" }} />
          Profesyonel ECU & Chiptuning Merkezi
        </p>

        <h1
          className="font-display"
          style={{
            fontSize: "clamp(52px, 8vw, 110px)",
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: "-1px",
            textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          ARACININ<br />
          <span style={{ color: "#e8161e" }}>GERÇEK</span><br />
          <span style={{ WebkitTextStroke: "2px #fff", color: "transparent" }}>GÜCÜ</span><br />
          BURADA
        </h1>

        <p style={{ fontSize: 16, color: "#ccc", maxWidth: 540, lineHeight: 1.7, marginBottom: 40 }}>
          +700 araç OZecu farkıyla daha az yakıt ve daha yüksek performansla yollarda. Binek, ticari ve iş makinelerinde
          Stage 1 güç yazılımı; AdBlue, DPF, EGR arıza çözümleri. %25'e varan güç artışı, her araca özel mühendis
          yazılımı.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 56 }}>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="font-display"
            style={{
              background: "#e8161e",
              color: "#fff",
              textDecoration: "none",
              padding: "14px 28px",
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              borderRadius: 4,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              transition: "all 0.2s",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp ile Yaz
          </a>
          <a
            href="#hesap"
            className="font-display"
            style={{
              background: "transparent",
              color: "#fff",
              textDecoration: "none",
              padding: "14px 28px",
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              borderRadius: 4,
              border: "1.5px solid rgba(255,255,255,0.25)",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              transition: "all 0.2s",
            }}
          >
            Güç Hesapla
          </a>
        </div>

        <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
          {[
            { num: "700", suffix: "+", label: "Tamamlanan Araç" },
            { num: "%25", suffix: "'e varan", label: "Güç Artışı" },
            { num: "%15", suffix: "'e varan", label: "Yakıt Tasarrufu" },
            { num: "8", suffix: "+", label: "Yıllık Deneyim" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display" style={{ fontSize: 40, fontWeight: 900, color: "#fff", lineHeight: 1 }}>
                {s.num}
                <span style={{ color: "#e8161e" }}>{s.suffix}</span>
              </div>
              <div style={{ fontSize: 11, color: "#888", letterSpacing: 2, textTransform: "uppercase", marginTop: 4 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
