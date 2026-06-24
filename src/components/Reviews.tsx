const reviews = [
  {
    badge: "Stage 1",
    stars: 5,
    text: "320d'de sollamalarda fark net hissediliyor. İşlem öncesi her şeyi açık açık anlattılar, beklentimi doğru ayarladım.",
    name: "Murat K.",
    car: "BMW 320d F30",
    initials: "MK",
  },
  {
    badge: "DPF",
    stars: 5,
    text: "Passat'ta DPF lambası sürekli yanıyordu, servise üç kez gittim çözülmedi. Burada bir saatte hallettiler, dört aydır sorun yok.",
    name: "Emre Y.",
    car: "VW Passat 2.0 TDI",
    initials: "EY",
  },
  {
    badge: "AdBlue",
    stars: 4,
    text: "Sprinter'da AdBlue arızası yüzünden güç kısıtlaması vardı, işimi aksatıyordu. Yazılımla çözdüler, sonuç iyi ama randevu için iki gün bekledim.",
    name: "Ömer Ç.",
    car: "Mercedes Sprinter 316",
    initials: "ÖÇ",
  },
  {
    badge: "Stage 1",
    stars: 4,
    text: "Egea 1.3 Multijet'e yaptırdım. Çok büyük beklentim yoktu ama gaz tepkisi iyileşti, şehir içi daha rahat. Fiyat performans iyi.",
    name: "Taner D.",
    car: "Fiat Egea 1.3 Multijet",
    initials: "TD",
  },
  {
    badge: "Stage 1",
    stars: 5,
    text: "Insignia'da yüklüyken sollama yapmak eziyetti. Tork artışı sayesinde artık rahat geçiyorum. WhatsApp'tan fiyat sordum, net cevap verdiler.",
    name: "Serkan B.",
    car: "Opel Insignia 2.0 CDTI",
    initials: "SB",
  },
  {
    badge: "EGR",
    stars: 5,
    text: "Tucson'da EGR'den dolayı rölantide titreme vardı, parça değiştirmek istemedim. Yazılım kapatma yaptılar, titreme bitti. Beş aydır sorun yok.",
    name: "Caner A.",
    car: "Hyundai Tucson 2.0 CRDi",
    initials: "CA",
  },
  {
    badge: "Stage 1",
    stars: 4,
    text: "Clio 1.5 dCi'ye yaptırdım. Çok agresif bir değişiklik beklemiyordum ama gaz tepkisi iyileşti, sollamalar daha rahat. Yakıtta pek fark görmedim.",
    name: "Deniz A.",
    car: "Renault Clio 1.5 dCi",
    initials: "DA",
  },
  {
    badge: "TCU",
    stars: 5,
    text: "Golf DSG'de vites geçişlerinde vuruntu vardı. TCU yazılımı sonrası çok daha yumuşak oldu, aynı zamanda Stage 1 de yaptırdım. İkisi birlikte çok iyi.",
    name: "Burak S.",
    car: "VW Golf 1.4 TSI DSG",
    initials: "BS",
  },
  {
    badge: "DPF",
    stars: 5,
    text: "Transit'te DPF sürekli rejenerasyon istiyordu, uzun yolda sinir bozucuydu. Yazılım sonrası lamba söndü, araç rahatladı. Teşekkürler.",
    name: "İbrahim K.",
    car: "Ford Transit 2.0 EcoBlue",
    initials: "İK",
  },
];

export default function Reviews() {
  return (
    <section id="yorumlar" style={{ background: "#0a0a0a", padding: "96px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
        <p className="section-eyebrow reveal font-display">Referanslar</p>
        <h2 className="section-title reveal font-display">
          Müşteri<br />Yorumları
        </h2>
        <p className="section-sub reveal">Gerçek müşteri, gerçek araç, gerçek sonuç.</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="reviews-grid">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className={`review-card reveal ${i % 3 === 1 ? "reveal-delay-1" : i % 3 === 2 ? "reveal-delay-2" : ""}`}
              style={{
                background: "#181818",
                border: "1px solid #242424",
                borderRadius: 4,
                padding: 28,
                transition: "all 0.3s",
                position: "relative",
              }}
            >
              <span
                className="font-display"
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 1,
                  padding: "3px 8px",
                  background: "rgba(232,22,30,0.15)",
                  border: "1px solid rgba(232,22,30,0.3)",
                  borderRadius: 3,
                  color: "#e8161e",
                }}
              >
                {r.badge}
              </span>
              <div style={{ color: "#FFB800", fontSize: 16, letterSpacing: 2, marginBottom: 16 }}>
                {"★".repeat(r.stars)}
                <span style={{ color: "#333" }}>{"★".repeat(5 - r.stars)}</span>
              </div>
              <p style={{ fontSize: 14, color: "#ccc", lineHeight: 1.7, marginBottom: 20 }}>{r.text}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  className="font-display"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #e8161e, #b8090f)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    fontWeight: 800,
                    color: "#fff",
                    flexShrink: 0,
                  }}
                >
                  {r.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{r.name}</div>
                  <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>{r.car}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
