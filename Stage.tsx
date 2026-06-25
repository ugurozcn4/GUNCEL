import { Zap, Shield, Gauge } from "lucide-react";

const stages = [
  {
    icon: Zap,
    title: "Stage 1",
    subtitle: "Stok Harita Optimizasyonu",
    desc: "Fabrika donanımıyla maksimum güç ve verimlilik. Ek parça gerektirmez. Günlük kullanıma uygun, güvenli ve ekonomik. Her araca özel mühendis haritası ile optimize edilir.",
    features: [
      "%25'e varan güç artışı",
      "%15'e varan yakıt tasarrufu",
      "Tork artışı ve daha iyi çekiş",
      "Maksimum verimlilik",
      "Her araca özel harita",
      "Fabrika donanımıyla uyumlu",
      "Garanti kapsamında geri dönüş imkanı",
    ],
    color: "#e8161e",
  },
  {
    icon: Shield,
    title: "Stage 2",
    subtitle: "Donanım + Yazılım Paketi",
    desc: "Ek donanım yükseltmeleriyle daha agresif harita. Tüm araçlarda desteklenmez; araç donanımına ve motor yapısına bağlıdır.",
    features: [
      "%35'e varan güç artışı (destekleyen araçlarda)",
      "Intercooler / downpipe önerilir",
      "Agresif vites geçişleri",
      "Sporif sürüş odaklı",
      "Her araç desteklemez — önce kontrol edin",
    ],
    color: "#ff6b35",
  },
  {
    icon: Gauge,
    title: "Stage 3",
    subtitle: "Yarış Mühendisliği",
    desc: "Otomobil sporları için detaylı ve maliyetli bir işlem. Turbo, enjektör ve soğutma yükseltmeleri gerektirir. Çok az araç destekler.",
    features: [
      "Büyük turbo / enjektör yükseltme gerekir",
      "Özel dyno ayarı",
      "Track ve drag kullanımı",
      "Çok az araç destekler",
      "Detaylı bilgi için iletişime geçin",
    ],
    color: "#ffd700",
  },
];

export default function Stage() {
  return (
    <section id="stage" style={{ background: "#0a0a0a", padding: "96px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
        <p className="section-eyebrow reveal font-display">Performans Seviyeleri</p>
        <h2 className="section-title reveal font-display">
          Stage 1 · 2 · 3<br />Güç Paketleri
        </h2>
        <p className="section-sub reveal">
          Aracının potansiyelini keşfet. Her stage, farklı donanım ve beklenti seviyesine göre hazırlanmış profesyonel yazılım paketidir.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="stage-grid">
          {stages.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className={`reveal ${i === 1 ? "reveal-delay-1" : i === 2 ? "reveal-delay-2" : ""}`}
                style={{
                  background: "#141414",
                  border: `1px solid ${i === 0 ? "rgba(232,22,30,0.3)" : "#242424"}`,
                  borderRadius: 8,
                  padding: "40px 32px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s",
                }}
              >
                {/* Glow efekti */}
                <div
                  style={{
                    position: "absolute",
                    top: -60,
                    right: -60,
                    width: 180,
                    height: 180,
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${s.color}15 0%, transparent 70%)`,
                    pointerEvents: "none",
                  }}
                />

                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 10,
                    background: `${s.color}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                    border: `1px solid ${s.color}30`,
                  }}
                >
                  <Icon size={24} color={s.color} />
                </div>

                <div className="font-display" style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: s.color, marginBottom: 6 }}>
                  {s.title}
                </div>
                <h3 className="font-display" style={{ fontSize: 24, fontWeight: 800, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 12 }}>
                  {s.subtitle}
                </h3>
                <p style={{ fontSize: 14, color: "#888", lineHeight: 1.6, marginBottom: 24 }}>{s.desc}</p>

                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {s.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        fontSize: 13,
                        color: "#aaa",
                        padding: "8px 0",
                        borderBottom: "1px solid #222",
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
