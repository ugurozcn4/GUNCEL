import { useState, useRef, useEffect } from "react";

interface Msg {
  role: "bot" | "user";
  text: string;
}

// Araç tipine göre tahmini güç artışı bilgisi
function getPowerInfo(motor: string): string {
  const q = motor.toLowerCase();

  // Renault / Dacia
  if (/(1\.5\s*dci|dci|1\.5\s*dizel)/.test(q)) {
    return "1.5 dCi motorlar Stage 1 ile genellikle 25–35 HP arası güç artışı sağlar. Tork artışı sayesinde sollamalar çok daha rahat olur. Yakıtta %5–10 tasarruf imkanı var.";
  }
  // VW / Audi / Skoda / Seat
  if (/(1\.6\s*tdi|1\.9\s*tdi|2\.0\s*tdi|tdi)/.test(q)) {
    return "TDI motorlar Stage 1 ile genellikle 30–40 HP arası güç artışı sağlar. 2.0 TDI'lerde bu değer 40 HP'ye kadar çıkabilir. Tork artışı çok belirgin olur.";
  }
  // BMW
  if (/(1\.6\s*d|2\.0\s*d|3\.0\s*d|xdrive|bmw)/.test(q)) {
    return "BMW dizel motorlar Stage 1 ile 30–50 HP arası güç artışı sağlar. Özellikle 2.0d ve 3.0d motorlarda tork artışı çok belirgin olur.";
  }
  // Mercedes
  if (/(mercedes|merc|cdi|om6|om65)/.test(q)) {
    return "Mercedes CDI motorlar Stage 1 ile 25–40 HP arası güç artışı sağlar. OM651 ve OM654 motorlarda verim çok yüksektir.";
  }
  // Ford
  if (/(ford|tdci|ecoboost|ecoblue)/.test(q)) {
    return "Ford TDCi ve EcoBlue motorlar Stage 1 ile 25–35 HP arası güç artışı sağlar. 2.0 EcoBlue motorlarda bu değer 40 HP'ye yaklaşabilir.";
  }
  // Opel / Vauxhall
  if (/(opel|vauxhall|cdti)/.test(q)) {
    return "Opel CDTI motorlar Stage 1 ile 25–35 HP arası güç artışı sağlar. 2.0 CDTI motorlarda tork artışı çok belirgin olur.";
  }
  // Fiat / Alfa
  if (/(fiat|alfa|romeo|multijet|jtd)/.test(q)) {
    return "Fiat/Alfa Multijet motorlar Stage 1 ile 20–30 HP arası güç artışı sağlar. 1.6 ve 2.0 Multijet motorlarda verim iyi olur.";
  }
  // Hyundai / Kia
  if (/(hyundai|kia|crdi|crdi)/.test(q)) {
    return "Hyundai/Kia CRDi motorlar Stage 1 ile 25–35 HP arası güç artışı sağlar. Tucson ve Sportage modellerinde çok memnuniyet var.";
  }
  // Peugeot / Citroen
  if (/(peugeot|citroen|hdi|bluehdi)/.test(q)) {
    return "Peugeot/Citroen HDi/BlueHDi motorlar Stage 1 ile 25–35 HP arası güç artışı sağlar. 1.6 ve 2.0 HDi motorlarda verim yüksektir.";
  }
  // Toyota
  if (/(toyota|d-4d|d4d)/.test(q)) {
    return "Toyota D-4D motorlar Stage 1 ile 20–30 HP arası güç artışı sağlar. Japon motorlar genellikle sağlam yapılıdır, güvenli artış yapılır.";
  }
  // Benzin
  if (/(benzin|tsi|tfsi|fsi|mpi|gdi|turbo|ecoboost)/.test(q)) {
    return "Benzinli ve turbo benzinli motorlar Stage 1 ile 20–40 HP arası güç artışı sağlar. TSI ve TFSI motorlarda verim çok yüksektir.";
  }
  // Ticari
  if (/(transit|sprinter|ducato|jumper|master|trafic|vivaro|panelvan|ticari)/.test(q)) {
    return "Ticari araçlarda Stage 1 ile 25–35 HP arası güç artışı sağlar. Yük altında çekiş çok daha iyi olur, yakıtta tasarruf sağlanır.";
  }
  // İş makinesi
  if (/(traktor|traktör|ekskavator|yukleyici|forklift|ismakine|tarim)/.test(q)) {
    return "İş makinelerinde Stage 1 ile 20–40 HP arası güç artışı sağlar. Çekiş gücü artar, zorlu koşullarda performans iyileşir.";
  }

  return "Stage 1 güç yazılımı genellikle %25'e varan güç artışı sağlar. Aracınızın motor tipine göre net bir tahmin için bana marka ve modelini yazabilirsiniz.";
}

// Yerel kural tabanlı asistan
function generateReply(input: string): string {
  const q = input.toLowerCase().trim();

  // Fiyat / ücret
  if (/(fiyat|ücret|kaç para|ne kadar|kaç tl|cost|price|kaç lira)/.test(q)) {
    return "Fiyat konusunda kesin bilgiyi WhatsApp üzerinden verebiliyoruz çünkü her aracın motor tipi ve durumuna göre fiyat değişiyor. 😊 Aracınızın marka, model ve motor bilgisini 0531 947 74 16 numaralı WhatsApp hattımıza yazın, size özel net fiyatı hemen iletelim.";
  }

  // Randevu
  if (/(randevu|rezervasyon|ne zaman gelebilir|randevu al)/.test(q)) {
    return "Randevu için WhatsApp (0531 947 74 16) üzerinden aracınızın marka, model, yıl ve yapılmasını istediğiniz işlemi yazmanız yeterli. Hafta içi 09:00–17:00, Cumartesi 10:00–14:00 arası hizmet veriyoruz.";
  }

  // Araç tipi sorulduğunda
  if (/(aracım|arabam|motorum|1\.5|1\.6|2\.0|dci|tdi|cdi|tdci|hdi|multijet|crdi|benzin|dizel)/.test(q)) {
    return getPowerInfo(q);
  }

  // Stage 1
  if (/(stage\s*1|güç yazılım|chiptuning|chip tuning|performans)/.test(q)) {
    return "Stage 1 güç yazılımı fabrika donanımıyla yapılır, ek parça gerektirmez. %25'e varan güç artışı sağlar. Yakıt tüketiminde %5–10 tasarruf imkanı var. Aracınızın motor tipini yazarsanız size özel tahmin verebilirim.";
  }

  // Stage 2
  if (/(stage\s*2)/.test(q)) {
    return "Stage 2 donanım yükseltmesi gerektirdiği için (intercooler, downpipe vb.) bu konuyu WhatsApp üzerinden detaylı görüşmek daha doğru olur. 0531 947 74 16 numarasına yazabilirsiniz.";
  }

  // Stage 3
  if (/(stage\s*3)/.test(q)) {
    return "Stage 3 otomobil sporları için detaylı ve maliyetli bir işlem. Turbo, enjektör ve soğutma yükseltmeleri gerektirir. Detaylı bilgi için WhatsApp: 0531 947 74 16.";
  }

  // DPF
  if (/(dpf|fap|partikül)/.test(q)) {
    return "DPF (Dizel Partikül Filtresi) arızalarında yazılım seviyesinde kalıcı çözüm sunuyoruz. Tıkanan filtre, rejenere ışığı ve arıza kodları için yazılım devre dışı bırakma işlemi yapıyoruz. Tüm dizel motor tiplerini destekliyoruz.";
  }

  // AdBlue
  if (/(adblue|urea|scr)/.test(q)) {
    return "AdBlue/SCR arızalarında yazılım seviyesinde kalıcı çözüm sağlıyoruz. Pompa, sensör veya katalizör arızalarında güç kısıtlamasını kaldırıyoruz. Euro 5 ve Euro 6 tüm dizel modelleri destekliyoruz.";
  }

  // EGR
  if (/(egr|egzoz gaz)/.test(q)) {
    return "EGR valfi arızalarından kaynaklanan titreme, güç kaybı ve arıza ışıklarını yazılım seviyesinde kalıcı olarak gideriyoruz. Parça değişimine gerek kalmadan çözüm mümkün.";
  }

  // Yakıt
  if (/(yakıt|tüketim|benzin|mazot|dizel|motorin)/.test(q)) {
    return "Stage 1 yazılımı sonrası yakıt tüketiminde %5–10 arası tasarruf sağlanıyor. Daha verimli yanma ve optimize turbo basıncı sayesinde, aynı güçte daha az yakıt harcıyorsunuz.";
  }

  // Garanti
  if (/(garanti|geri dönüş|oem|fabrika)/.test(q)) {
    return "İstediğinizde aracınızın orijinal fabrika yazılımına geri dönüş yapabiliyoruz. OEM yedek her işlemde saklanır. Yazılım garantisi ve satış sonrası teknik destek sunuyoruz.";
  }

  // Süre / ne kadar sürer
  if (/(ne kadar sürer|süre|kaç saat|ne zaman biter)/.test(q)) {
    return "Stage 1 yazılımı genellikle 1–3 saat içinde tamamlanır. DPF, AdBlue ve EGR çözümleri ortalama 1–2 saat sürer. Aracın ECU tipine göre süre değişebilir.";
  }

  // Konum / nerede
  if (/(nerede|konum|adres|lokasyon)/.test(q)) {
    return "Adres ve yol tarifi için WhatsApp üzerinden iletişime geçebilirsiniz: 0531 947 74 16.";
  }

  // Çalışma saatleri
  if (/(saat|açık|kapalı|ne zaman çalış)/.test(q)) {
    return "Hafta içi 09:00–17:00, Cumartesi 10:00–14:00 arası açığız. Pazar günü kapalıyız. Randevu için WhatsApp: 0531 947 74 16.";
  }

  // Selam / merhaba
  if (/(merhaba|selam|günaydın|iyi akşam|naber|nasılsın)/.test(q)) {
    return "Merhaba! OZecu asistanına hoş geldin. 🚗 Araç yazılımı, Stage 1, DPF, AdBlue, EGR veya randevu hakkında sana nasıl yardımcı olabilirim? Aracınızın motor tipini yazarsanız size özel bilgi verebilirim.";
  }

  // Teşekkür
  if (/(teşekkür|sağ ol|eyvallah|thanks)/.test(q)) {
    return "Rica ederim! Başka bir sorunda buradayım. Aracın için WhatsApp'tan da bize ulaşabilirsin: 0531 947 74 16. 🚗";
  }

  // İletişim
  if (/(iletişim|telefon|numara|whatsapp|insta|e-posta|mail)/.test(q)) {
    return "Bize şu kanallardan ulaşabilirsin:\n📞 Telefon/WhatsApp: 0531 947 74 16\n✉️ E-posta: info@ozecu.com\n📷 Instagram: @oz.ecu";
  }

  // Genel / varsayılan
  return "Sorunu tam anlayamadım ama sana yardımcı olmak isterim! 🚗 Stage 1 güç yazılımı, DPF, AdBlue, EGR çözümleri, randevu veya aracına özel bilgi için bana yazabilirsin. Aracınızın motor tipini yazarsanız size özel tahmin verebilirim. Fiyat konusunda ise WhatsApp (0531 947 74 16) üzerinden net bilgi alabilirsin.";
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "bot",
      text: "Merhaba! Ben OZecu'nun yapay zeka asistanıyım. 🚗 Araç ECU yazılımı, Stage 1, DPF/AdBlue/EGR çözümleri ve randevu hakkında sorularını yanıtlarım. Aracınızın motor tipini yazarsanız size özel bilgi verebilirim. Nasıl yardımcı olabilirim?",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const messagesEnd = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const send = () => {
    const msg = input.trim();
    if (!msg) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: msg }]);
    setTyping(true);
    setTimeout(() => {
      const reply = generateReply(msg);
      setTyping(false);
      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
    }, 700 + Math.random() * 600);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Yapay Zeka Asistan"
        style={{
          position: "fixed",
          bottom: 28,
          right: 28,
          zIndex: 500,
          width: 60,
          height: 60,
          background: "#e8161e",
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 26,
          animation: "chatPulse 2.5s ease-in-out infinite",
          transition: "all 0.2s",
        }}
      >
        💬
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 100,
            right: 28,
            zIndex: 500,
            width: 380,
            maxWidth: "calc(100vw - 32px)",
            height: 560,
            maxHeight: "70vh",
            background: "#181818",
            border: "1px solid #242424",
            borderRadius: 12,
            boxShadow: "0 20px 60px rgba(0,0,0,0.7)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            animation: "fadeInPanel 0.25s ease",
          }}
        >
          <div
            style={{
              background: "#111",
              borderBottom: "1px solid #242424",
              padding: "16px 20px",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                background: "linear-gradient(135deg, #e8161e, #b8090f)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 16,
              }}
            >
              🤖
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: 14 }}>OZecu Asistan</div>
              <div style={{ fontSize: 12, color: "#22C55E", display: "flex", alignItems: "center", gap: 5 }}>
                <span style={{ display: "inline-block", width: 7, height: 7, borderRadius: "50%", background: "#22C55E" }} />
                Çevrimiçi
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{
                marginLeft: "auto",
                background: "transparent",
                border: "none",
                color: "#888",
                fontSize: 20,
                cursor: "pointer",
                width: 28,
                height: 28,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 4,
              }}
            >
              ✕
            </button>
          </div>

          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: 20,
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 8,
                  alignItems: "flex-start",
                  flexDirection: m.role === "user" ? "row-reverse" : "row",
                }}
              >
                {m.role === "bot" && (
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      background: "#e8161e",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 14,
                      flexShrink: 0,
                    }}
                  >
                    🤖
                  </div>
                )}
                <div
                  style={{
                    maxWidth: "80%",
                    padding: "10px 14px",
                    borderRadius: 12,
                    fontSize: 14,
                    lineHeight: 1.6,
                    whiteSpace: "pre-wrap",
                    background: m.role === "bot" ? "#222" : "#e8161e",
                    color: m.role === "bot" ? "#ccc" : "#fff",
                    border: m.role === "bot" ? "1px solid #2a2a2a" : "none",
                  }}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {typing && (
              <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    background: "#e8161e",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    flexShrink: 0,
                  }}
                >
                  🤖
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 5, padding: "10px 14px", background: "#222", border: "1px solid #2a2a2a", borderRadius: 12, width: "fit-content" }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#888", animation: "typingBounce 1.2s ease-in-out infinite" }} />
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#888", animation: "typingBounce 1.2s ease-in-out 0.2s infinite" }} />
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#888", animation: "typingBounce 1.2s ease-in-out 0.4s infinite" }} />
                </div>
              </div>
            )}
            <div ref={messagesEnd} />
          </div>

          <div style={{ borderTop: "1px solid #242424", padding: "14px 16px", display: "flex", gap: 8 }}>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Sorunuzu yazın..."
              rows={1}
              style={{
                flex: 1,
                background: "#111",
                border: "1.5px solid #242424",
                borderRadius: 8,
                padding: "10px 14px",
                fontSize: 14,
                color: "#fff",
                fontFamily: "Inter, sans-serif",
                resize: "none",
                outline: "none",
                maxHeight: 80,
                minHeight: 40,
              }}
            />
            <button
              onClick={send}
              disabled={!input.trim()}
              style={{
                width: 40,
                height: 40,
                background: "#e8161e",
                border: "none",
                borderRadius: 8,
                color: "#fff",
                fontSize: 18,
                cursor: input.trim() ? "pointer" : "not-allowed",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                alignSelf: "flex-end",
                opacity: input.trim() ? 1 : 0.5,
              }}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}
