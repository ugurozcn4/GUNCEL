import { useState, useEffect } from "react";
import Logo from "./Logo";

type Cat = "binek" | "ticari" | "ismakine";

const categories: Record<Cat, { title: string; desc: string; img: string }> = {
  binek: {
    title: "Binek Araçlar",
    desc: "Hatchback, sedan, crossover ve station wagon tüm binek araçlarda Stage 1–2 güç yazılımı, DPF, EGR, AdBlue ve DTC off çözümleri. Günlük kullanımda daha canlı gaz tepkisi, düşük yakıt tüketimi ve artan tork. Her marka ve modele özel mühendis haritası.",
    img: "/images/services/stage1/Gemini_Generated_Image_9kq6kg9kq6kg9kq6.png",
  },
  ticari: {
    title: "Ticari Araçlar",
    desc: "Panelvan, kamyonet, minivan ve filo araçlarında Stage 1 güç yazılımı, DPF, EGR, AdBlue ve DTC off çözümleri. Yük altında artan tork, düşen yakıt giderleri ve uzun ömürlü motor performansı. Tüm ticari dizel ve benzin modelleri desteklenir.",
    img: "/images/services/stage1/Gemini_Generated_Image_8wnvlg8wnvlg8wnv.png",
  },
  ismakine: {
    title: "İş Makineleri",
    desc: "Traktör, ekskavatör, yükleyici, forklift ve tarım makinelerinde Stage 1 güç yazılımı, DPF, EGR, AdBlue ve DTC off çözümleri. Daha yüksek çekiş gücü, düşük yakıt tüketimi ve zorlu çalışma koşullarında artan verim. Tüm endüstriyel motor tipleri desteklenir.",
    img: "/images/vehicles/heavy-machinery/32_greyder_d_web_sitesi_gorselleri_816x570_3.jpg",
  },
};

export default function Vehicles() {
  const [active, setActive] = useState<Cat>("binek");
  const cat = categories[active];

  // Kategori değişince fade-in animasyonu için key kullanıyoruz
  useEffect(() => {}, [active]);

  return (
    <section id="araclar" style={{ background: "#0a0a0a", padding: "96px 0", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
        <p className="section-eyebrow reveal font-display">Araç Tipleri</p>
        <h2 className="section-title reveal font-display">
          Her Araca<br />Özel Çözüm
        </h2>
        <p className="section-sub reveal">
          Binek, ticari ve iş makinelerinde yazılım uyguluyoruz. Kategori seçin, o sınıfta neler yaptığımızı görün.
        </p>

        <div className="cat-tabs reveal" style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 32, borderBottom: "1px solid #242424" }}>
          {(Object.keys(categories) as Cat[]).map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className="font-display cat-tab"
              style={{
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: 1,
                textTransform: "uppercase",
                color: active === c ? "#fff" : "#888",
                background: "transparent",
                border: "none",
                padding: "12px 20px",
                cursor: "pointer",
                position: "relative",
                transition: "color 0.2s",
                borderBottom: active === c ? "2px solid #e8161e" : "2px solid transparent",
              }}
            >
              {categories[c].title}
            </button>
          ))}
        </div>

        <div key={active} style={{ animation: "fadeInPanel 0.5s ease" }}>
          <div
            style={{
              position: "relative",
              borderRadius: 6,
              overflow: "hidden",
              border: "1px solid #242424",
              marginBottom: 24,
              minHeight: 380,
            }}
          >
            <img
              src={cat.img}
              alt={cat.title}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(0.45) saturate(0.7)",
                transform: "scale(1.02)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.92) 100%)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: "32px 36px",
              }}
            >
              <h3 className="font-display" style={{ fontSize: 34, fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.5px", marginBottom: 10 }}>
                {cat.title}
              </h3>
              <p style={{ fontSize: 14, color: "#ccc", maxWidth: 620, lineHeight: 1.7 }}>{cat.desc}</p>
            </div>
            {/* Logo köşede */}
            <div style={{ position: "absolute", top: 16, right: 16, opacity: 0.9 }}>
              <Logo size={70} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
