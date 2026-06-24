import Logo from "./Logo";

const services = [
  {
    tag: "Stage 1",
    title: "Stage 1 Güç Yazılımı",
    desc: "Fabrika donanımıyla maksimum performans. Ek parça gerektirmez, günlük kullanıma uygundur. Her araca özel mühendis haritası.",
    badge: "Ortalama %20 performans artışı · %15'e varan yakıt tasarrufu",
    img: "/images/services/stage1/Gemini_Generated_Image_hndz47hndz47hndz.png",
    showLogo: false,
  },
  {
    tag: "TCU",
    title: "Şanzıman Yazılımı (TCU)",
    desc: "Vites geçiş sürelerini kısaltır, vuruş azaltır ve gaz tepkisini iyileştirir. Otomatik ve DCT şanzımanlarda performans artışı.",
    badge: "DCT ve otomatik şanzımanlar",
    img: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=900",
    showLogo: true,
  },
  {
    tag: "AdBlue",
    title: "AdBlue Çözümü",
    desc: "SCR katalizör, AdBlue pompası veya sensör arızalarında yazılım seviyesinde kalıcı çözüm. Güç kısıtlamasını kaldırır. Euro 5/6 desteği.",
    badge: "Tüm ticari ve binek dizel modeller",
    img: "https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=900",
    showLogo: true,
  },
  {
    tag: "DPF",
    title: "DPF / FAP Çözümü",
    desc: "Tıkanan dizel partikül filtresi, rejenere ışığı ve kara duman sorunlarında yazılım devre dışı bırakma. Kalıcı çözüm.",
    badge: "Tüm dizel motor tipleri desteklenir",
    img: "https://images.pexels.com/photos/163945/pexels-photo-163945.jpeg?auto=compress&cs=tinysrgb&w=900",
    showLogo: true,
  },
  {
    tag: "EGR",
    title: "EGR Kapatma",
    desc: "EGR valfinden kaynaklanan titreme, çekiş problemi ve arıza kodlarını yazılım seviyesinde kalıcı olarak giderir.",
    badge: "Mekanik ve yazılım EGR arızaları",
    img: "https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=900",
    showLogo: true,
  },
  {
    tag: "Teşhis",
    title: "Arıza Teşhisi",
    desc: "OBD2 ve profesyonel teşhis cihazlarıyla kapsamlı tarama, arıza kodu okuma ve ECU versiyon analizi.",
    badge: "VAG, BMW, Ford, Mercedes, Fiat ve diğerleri",
    img: "https://images.pexels.com/photos/4489747/pexels-photo-4489747.jpeg?auto=compress&cs=tinysrgb&w=900",
    showLogo: true,
  },
  {
    tag: "Lambda",
    title: "Lambda / Katalizör",
    desc: "Lambda sensörü ve katalizör arızalarında yazılım seviyesinde çözüm. Arıza ışığı kapatma, motor verimi düzeltme.",
    badge: "Benzin ve dizel tüm modeller",
    img: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=900",
    showLogo: true,
  },
];

export default function Services() {
  return (
    <section id="hizmetler" style={{ background: "#111", padding: "96px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
        <p className="section-eyebrow reveal font-display">Hizmetlerimiz</p>
        <h2 className="section-title reveal font-display">
          Tüm Güç Yazılımı<br />Çözümleri
        </h2>
        <p className="section-sub reveal">
          ECU optimizasyonundan arıza çözümlerine kadar tam kapsamlı hizmet. Her marka ve modele özel harita yazılımı.
          Güvenli, sorunsuz, mühendis onaylı.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }} className="services-grid">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`service-card reveal ${i % 3 === 1 ? "reveal-delay-1" : i % 3 === 2 ? "reveal-delay-2" : ""}`}
              style={{
                background: "#181818",
                padding: "36px 32px",
                border: "1px solid #242424",
                transition: "all 0.3s",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: 160,
                  borderRadius: 6,
                  overflow: "hidden",
                  marginBottom: 20,
                  position: "relative",
                  border: "1px solid rgba(232,22,30,0.2)",
                }}
              >
                <img
                  src={s.img}
                  alt={s.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.6) saturate(0.8)", transition: "all .4s" }}
                />
                <span
                  className="font-display"
                  style={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: "#fff",
                    background: "rgba(232,22,30,0.85)",
                    padding: "3px 9px",
                    borderRadius: 3,
                  }}
                >
                  {s.tag}
                </span>
                {s.showLogo && (
                  <div style={{ position: "absolute", bottom: 8, right: 8, opacity: 0.85 }}>
                    <Logo size={48} />
                  </div>
                )}
              </div>
              <h3 className="font-display" style={{ fontSize: 22, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 10 }}>
                {s.title}
              </h3>
              <p style={{ fontSize: 14, color: "#888", lineHeight: 1.6, marginBottom: 14 }}>{s.desc}</p>
              <div className="font-display" style={{ fontSize: 13, fontWeight: 600, color: "#e8161e", letterSpacing: 0.5 }}>
                {s.badge}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
