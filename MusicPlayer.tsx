import { useState, useEffect, useRef } from "react";

// Müzik çalar — otomatik başlar (%30 ses), loop, değiştir/durdur/ses kısma.
// Telifsiz (royalty-free) phonk tarzı hızlı tempolu parçalar (SoundHelix).
const tracks = [
  {
    title: "Phonk Drift 01",
    artist: "OZecu Mix",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
  },
  {
    title: "Phonk Drift 02",
    artist: "OZecu Mix",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    title: "Phonk Drift 03",
    artist: "OZecu Mix",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
  },
  {
    title: "Phonk Drift 04",
    artist: "OZecu Mix",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
  },
  {
    title: "Phonk Drift 05",
    artist: "OZecu Mix",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  },
  {
    title: "Phonk Drift 06",
    artist: "OZecu Mix",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
  },
];

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const [trackIdx, setTrackIdx] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [showVolume, setShowVolume] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
  }, [volume]);

  // Otomatik başlatma — tarayıcı engelleyebilir, ilk etkileşimde dener
  useEffect(() => {
    const tryStart = () => {
      const audio = audioRef.current;
      if (!audio || playing) return;
      audio.volume = 0.3;
      audio
        .play()
        .then(() => {
          setPlaying(true);
          setVolume(0.3);
        })
        .catch(() => {});
    };
    window.addEventListener("click", tryStart, { once: true });
    window.addEventListener("scroll", tryStart, { once: true });
    window.addEventListener("touchstart", tryStart, { once: true });
    return () => {
      window.removeEventListener("click", tryStart);
      window.removeEventListener("scroll", tryStart);
      window.removeEventListener("touchstart", tryStart);
    };
  }, [playing]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.volume = volume;
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {});
    }
  };

  const nextTrack = () => {
    const newIdx = (trackIdx + 1) % tracks.length;
    setTrackIdx(newIdx);
    const audio = audioRef.current;
    if (audio) {
      audio.src = tracks[newIdx].src;
      audio.volume = volume;
      if (playing) {
        audio.play().catch(() => {});
      }
    }
  };

  const onEnded = () => {
    nextTrack();
  };

  const track = tracks[trackIdx];

  return (
    <div
      style={{
        position: "fixed",
        bottom: 28,
        left: 28,
        zIndex: 500,
        display: "flex",
        alignItems: "center",
        gap: 8,
        background: "rgba(10,10,10,0.92)",
        backdropFilter: "blur(12px)",
        border: "1px solid #242424",
        borderRadius: 30,
        padding: "8px 14px 8px 8px",
      }}
    >
      <audio ref={audioRef} src={track.src} loop={false} onEnded={onEnded} preload="auto" />

      <button
        onClick={togglePlay}
        aria-label={playing ? "Durdur" : "Çal"}
        style={{
          width: 36,
          height: 36,
          background: "#e8161e",
          border: "none",
          borderRadius: "50%",
          color: "#fff",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 14,
          flexShrink: 0,
        }}
      >
        {playing ? "❚❚" : "▶"}
      </button>

      <div style={{ maxWidth: 130, overflow: "hidden" }}>
        <div
          className="font-display"
          style={{
            fontSize: 12,
            fontWeight: 700,
            color: "#fff",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: 1.2,
          }}
        >
          {track.title}
        </div>
        <div style={{ fontSize: 9, color: "#888", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {track.artist}
        </div>
      </div>

      <button
        onClick={nextTrack}
        aria-label="Sonraki şarkı"
        style={{
          width: 28,
          height: 28,
          background: "transparent",
          border: "none",
          color: "#888",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 12,
          flexShrink: 0,
        }}
      >
        ⏭
      </button>

      <button
        onClick={() => setShowVolume(!showVolume)}
        aria-label="Ses"
        style={{
          width: 28,
          height: 28,
          background: "transparent",
          border: "none",
          color: "#888",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 14,
          flexShrink: 0,
        }}
      >
        {volume === 0 ? "🔇" : volume < 0.5 ? "🔉" : "🔊"}
      </button>

      {showVolume && (
        <input
          type="range"
          min={0}
          max={1}
          step={0.05}
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          style={{
            width: 70,
            accentColor: "#e8161e",
            cursor: "pointer",
          }}
        />
      )}
    </div>
  );
}
