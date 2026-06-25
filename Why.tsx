const reasons = [
  { icon: "👷", title: "Uzman Mühendis Kadrosu", desc: "8+ yıllık deneyimle alanında uzman mühendis ve teknisyenler. Her harita mühendis onayıyla çıkar." },
  { icon: "🔬", title: "Profesyonel Ekipman", desc: "Kalibrasyonlu ECU okuyucu ve güncel yazılım araçları. Sektörün en son teknolojisi kullanılır." },
  { icon: "🛡️", title: "Güvenli & Sorunsuz Yazılım", desc: "Motor ömrünü kısaltmayan, kapsamlı test sürecinden geçirilmiş ve belgelenmiş haritalar. Müşteri güvenliği ön planda." },
  { icon: "⭐", title: "Müşteri Memnuniyeti Öncelik", desc: "Her işlemde müşteri memnuniyetini ön planda tutuyoruz. İşlem öncesi detaylı bilgilendirme yapılır." },
  { icon: "🔄", title: "Satış Sonrası Destek", desc: "İşlem sonrası teknik destek ve yazılım güncelleme garantisi. Sorunlarınızda yanınızdayız." },
  { icon: "↩️", title: "OEM'e Dönüş Garantisi", desc: "İstediğinizde fabrika yazılımına geri dönüş imkânı. Her zaman kontrol sizde." },
];

export default function Why() {
  return (
    <section id="why" style={{ background: "#111", padding: "96px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
        <p className="section-eyebrow reveal font-display">Neden OZecu?</p>
        <h2 className="section-title reveal font-display">Farkımız</h2>
        <p className="section-sub reveal">
          Müşteri memnuniyetine öncelik veriyoruz. Güvenli ve sorunsuz yazılımlar, her araca özel, mühendisler tarafından
          geliştirilmiş çözümler.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }} className="why-grid">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`why-card reveal ${i % 3 === 1 ? "reveal-delay-1" : i % 3 === 2 ? "reveal-delay-2" : ""}`}
              style={{ padding: 32, background: "#181818", border: "1px solid #242424", transition: "all 0.3s" }}
            >
              <div style={{ fontSize: 28, marginBottom: 16 }}>{r.icon}</div>
              <h3 className="font-display" style={{ fontSize: 18, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>
                {r.title}
              </h3>
              <p style={{ fontSize: 14, color: "#888", lineHeight: 1.6 }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
