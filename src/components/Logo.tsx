interface LogoProps {
  size?: number;
  className?: string;
}

// OZecu logosu — küçük, akılda kalıcı. Kırmızı "OZ" rozeti + "ecu" yazısı.
export default function Logo({ size = 120, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size * 0.42}
      viewBox="0 0 120 50"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="OZecu"
    >
      <defs>
        <linearGradient id="ozGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff2832" />
          <stop offset="100%" stopColor="#b8090f" />
        </linearGradient>
      </defs>
      {/* OZ rozeti */}
      <rect x="0" y="2" width="46" height="46" rx="10" fill="url(#ozGrad)" />
      <text
        x="23"
        y="33"
        textAnchor="middle"
        fontFamily="'Barlow Condensed', sans-serif"
        fontSize="26"
        fontWeight="900"
        fill="white"
        letterSpacing="-1"
      >
        OZ
      </text>
      {/* ecu yazısı */}
      <text
        x="54"
        y="34"
        textAnchor="start"
        fontFamily="'Barlow Condensed', sans-serif"
        fontSize="30"
        fontWeight="800"
        fill="white"
        letterSpacing="-0.5"
      >
        ecu
      </text>
      {/* kırmızı nokta */}
      <circle cx="116" cy="10" r="4" fill="#e8161e" />
    </svg>
  );
}
