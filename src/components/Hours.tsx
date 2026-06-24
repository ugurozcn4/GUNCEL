const days = [
  { day: "Pazartesi", time: "09:00 – 17:00", status: "Açık", cls: "open" },
  { day: "Salı", time: "09:00 – 17:00", status: "Açık", cls: "open" },
  { day: "Çarşamba", time: "09:00 – 17:00", status: "Açık", cls: "open" },
  { day: "Perşembe", time: "09:00 – 17:00", status: "Açık", cls: "open" },
  { day: "Cuma", time: "09:00 – 17:00", status: "Açık", cls: "open" },
  { day: "Cumartesi", time: "10:00 – 14:00", status: "Yarım Gün", cls: "half" },
  { day: "Pazar", time: "—", status: "Kapalı", cls: "closed" },
];

const statusColor: Record<string, string> = {
  open: "#22C55E",
  half: "#F59E0B",
  closed: "#e8161e",
};

export default function Hours() {
  return (
    <section id="saatler" style={{ background: "#111", padding: "96px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
        <p className="section-eyebrow reveal font-display">Çalışma Saatleri</p>
        <h2 className="section-title reveal font-display">
          Ne Zaman<br />Gelebilirsiniz?
        </h2>
        <p className="section-sub reveal">
          Randevu almadan da gelebilirsiniz, ancak önceden WhatsApp ile bilgi verirseniz bekleme süresini sıfıra
          indiriyoruz.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" }} className="hours-grid">
          <div className="reveal" style={{ border: "1px solid #242424", borderRadius: 4, overflow: "hidden" }}>
            <div
              className="font-display"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                padding: "14px 20px",
                background: "rgba(232,22,30,0.08)",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "#888",
                borderBottom: "1px solid #242424",
              }}
            >
              <span>Gün</span>
              <span style={{ textAlign: "center" }}>Saat</span>
              <span style={{ textAlign: "right" }}>Durum</span>
            </div>
            {days.map((d) => (
              <div
                key={d.day}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  padding: "14px 20px",
                  borderBottom: "1px solid #242424",
                  transition: "background 0.2s",
                }}
              >
                <span style={{ fontSize: 14, fontWeight: 500 }}>{d.day}</span>
                <span style={{ fontSize: 14, color: "#ccc", textAlign: "center" }}>{d.time}</span>
                <span className="font-display" style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, textAlign: "right", color: statusColor[d.cls] }}>
                  {d.status}
                </span>
              </div>
            ))}
          </div>

          <div className="reveal reveal-delay-1" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: "#181818", border: "1px solid #242424", borderRadius: 4, padding: 24, display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div style={{ fontSize: 24, flexShrink: 0 }}>📅</div>
              <div>
                <h3 className="font-display" style={{ fontSize: 16, fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>
                  Randevu Alın
                </h3>
                <p style={{ fontSize: 13, color: "#888", lineHeight: 1.6 }}>
                  WhatsApp üzerinden önceden randevu alarak araç marka, model ve yapılmasını istediğiniz işlemi belirtin.
                  Bekleme süresi olmadan hizmet alın.
                </p>
              </div>
            </div>
            <div style={{ background: "#181818", border: "1px solid #242424", borderRadius: 4, padding: 24, display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div style={{ fontSize: 24, flexShrink: 0 }}>⏱️</div>
              <div>
                <h3 className="font-display" style={{ fontSize: 16, fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>
                  İşlem Süresi
                </h3>
                <p style={{ fontSize: 13, color: "#888", lineHeight: 1.6 }}>
                  Stage 1 yazılımı genellikle 1–3 saat içinde tamamlanır. DPF, AdBlue ve EGR çözümleri ise ortalama 1–2
                  saattir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
