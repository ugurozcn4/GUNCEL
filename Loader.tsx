import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p = Math.min(p + (Math.random() * 4 + 1), 100);
      setProgress(p);
      if (p >= 100) {
        clearInterval(interval);
        setTimeout(() => setDone(true), 300);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="loader"
      style={{
        position: "fixed",
        inset: 0,
        background: "#000",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 32,
        opacity: done ? 0 : 1,
        transition: "opacity 0.5s ease",
        pointerEvents: done ? "none" : "all",
      }}
    >
      <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: 28 }}>
        <div style={{ animation: "logoPulse 0.6s ease-out both" }}>
          <Logo size={200} />
        </div>
        <div style={{ width: 260, height: 3, background: "#1a1a1a", borderRadius: 2, overflow: "hidden" }}>
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              background: "#e8161e",
              borderRadius: 2,
              transition: "width 0.08s linear",
              boxShadow: "0 0 12px #e8161e",
            }}
          />
        </div>
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 14, fontWeight: 600, letterSpacing: 4, color: "#e8161e" }}>
          {Math.floor(progress)}%
        </div>
        <div style={{ fontSize: 11, letterSpacing: 3, color: "#555", textTransform: "uppercase" }}>
          Profesyonel ECU Yazılım Merkezi
        </div>
      </div>
    </div>
  );
}
