import { useState } from "react";
import { CAR_DATABASE, BRANDS, calcStage1, type Fuel } from "../data/cars";

const WHATSAPP = "https://wa.me/905319477416";

export default function Calculator() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [version, setVersion] = useState("");
  const [result, setResult] = useState<{ base: number; after: number; gain: number; pct: number; fuel: Fuel } | null>(null);

  const models = brand ? Object.keys(CAR_DATABASE[brand]).sort((a, b) => a.localeCompare(b, "tr")) : [];
  const versions = brand && model ? Object.keys(CAR_DATABASE[brand][model]) : [];

  const onBrand = (b: string) => {
    setBrand(b);
    setModel("");
    setVersion("");
    setResult(null);
  };

  const onModel = (m: string) => {
    setModel(m);
    setVersion("");
    setResult(null);
  };

  const onVersion = (v: string) => {
    setVersion(v);
    if (!brand || !model || !v) return;
    const data = CAR_DATABASE[brand][model][v];
    if (!data) return;
    const r = calcStage1(data.hp, data.fuel);
    setResult({ base: data.hp, after: r.after, gain: r.gain, pct: r.pct, fuel: data.fuel });
  };

  return (
    <section id="hesap" style={{ background: "#0a0a0a", padding: "96px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
        <p className="section-eyebrow reveal font-display">Güç Hesaplayıcı</p>
        <h2 className="section-title reveal font-display">
          Aracınızın Kazanacağı<br />Gücü Hesaplayın
        </h2>
        <p className="section-sub reveal">
          Marka, model ve motor seçin — Stage 1 sonrası tahmini gücü anında görün. Tüm değerler gerçek fabrika HP'sine
          göre hesaplanır. Dizel turbo motorlarda %12-22, turbo benzinlerde %10-18, atmosferik benzinlerde %3-8 güç artışı.
        </p>

        <div className="calc-wrap reveal" style={{ background: "#181818", border: "1px solid #242424", borderRadius: 4, padding: 48, maxWidth: 760, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 28 }} className="calc-grid">
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#888" }}>
                Araç Markası
              </label>
              <select
                value={brand}
                onChange={(e) => onBrand(e.target.value)}
                style={{
                  background: "#111",
                  border: "1.5px solid #242424",
                  color: "#fff",
                  padding: "12px 14px",
                  fontSize: 14,
                  fontFamily: "Inter, sans-serif",
                  borderRadius: 4,
                  width: "100%",
                  appearance: "none",
                  cursor: "pointer",
                }}
              >
                <option value="">Marka Seçiniz...</option>
                {BRANDS.map((b) => (
                  <option key={b} value={b} style={{ background: "#111" }}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#888" }}>
                Model / Seri
              </label>
              <select
                value={model}
                onChange={(e) => onModel(e.target.value)}
                disabled={!brand}
                style={{
                  background: "#111",
                  border: "1.5px solid #242424",
                  color: "#fff",
                  padding: "12px 14px",
                  fontSize: 14,
                  fontFamily: "Inter, sans-serif",
                  borderRadius: 4,
                  width: "100%",
                  appearance: "none",
                  cursor: brand ? "pointer" : "not-allowed",
                  opacity: brand ? 1 : 0.5,
                }}
              >
                <option value="">{brand ? "Model Seçiniz..." : "Önce Marka Seçin"}</option>
                {models.map((mo) => (
                  <option key={mo} value={mo} style={{ background: "#111" }}>
                    {mo}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8, gridColumn: "1 / -1" }}>
              <label style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#888" }}>
                Motor / Versiyon
              </label>
              <select
                value={version}
                onChange={(e) => onVersion(e.target.value)}
                disabled={!brand || !model}
                style={{
                  background: "#111",
                  border: "1.5px solid #242424",
                  color: "#fff",
                  padding: "12px 14px",
                  fontSize: 14,
                  fontFamily: "Inter, sans-serif",
                  borderRadius: 4,
                  width: "100%",
                  appearance: "none",
                  cursor: brand && model ? "pointer" : "not-allowed",
                  opacity: brand && model ? 1 : 0.5,
                }}
              >
                <option value="">{brand && model ? "Versiyon Seçiniz..." : "Önce Model Seçin"}</option>
                {versions.map((v) => (
                  <option key={v} value={v} style={{ background: "#111" }}>
                    {v}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ gridColumn: "1 / -1" }}>
              <div
                className="font-display"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  color: "#e8161e",
                  border: "1px solid rgba(232,22,30,0.35)",
                  background: "rgba(232,22,30,0.06)",
                  padding: "12px 16px",
                  borderRadius: 4,
                }}
              >
                ⚡ Hesaplama Stage 1 güç yazılımına göre yapılır
              </div>
            </div>
          </div>

          {result && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 20,
                padding: 28,
                background: "rgba(232,22,30,0.05)",
                border: "1px solid rgba(232,22,30,0.15)",
                borderRadius: 4,
                marginBottom: 20,
                animation: "fadeInPanel 0.4s ease",
              }}
              className="calc-result"
            >
              <div style={{ textAlign: "center" }}>
                <div className="font-display" style={{ fontSize: 36, fontWeight: 900, color: "#fff", lineHeight: 1 }}>
                  {result.base}
                </div>
                <div style={{ fontSize: 12, color: "#888", letterSpacing: 1, textTransform: "uppercase", marginTop: 4 }}>
                  Mevcut HP
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div className="font-display" style={{ fontSize: 36, fontWeight: 900, color: "#fff", lineHeight: 1 }}>
                  {result.after}
                </div>
                <div style={{ fontSize: 12, color: "#888", letterSpacing: 1, textTransform: "uppercase", marginTop: 4 }}>
                  Tahmini HP
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div className="font-display" style={{ fontSize: 36, fontWeight: 900, color: "#e8161e", lineHeight: 1 }}>
                  +{result.gain}
                </div>
                <div style={{ fontSize: 12, color: "#888", letterSpacing: 1, textTransform: "uppercase", marginTop: 4 }}>
                  HP Kazanım (%{result.pct})
                </div>
              </div>
            </div>
          )}

          {result && result.fuel === "elektrik" && (
            <p style={{ fontSize: 13, color: "#f59e0b", textAlign: "center", marginBottom: 12 }}>
              Elektrikli araçlarda ECU güç yazılımı yapılmaz.
            </p>
          )}

          <p style={{ fontSize: 12, color: "#888", textAlign: "center", lineHeight: 1.6 }}>
            * Değerler tahminî aralıklardır. Gerçek sonuçlar araca ve mevcut modifikasyonlara göre değişir. Kesin değer
            için <a href={WHATSAPP} target="_blank" rel="noreferrer" style={{ color: "#e8161e" }}>WhatsApp'tan bilgi alın</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
