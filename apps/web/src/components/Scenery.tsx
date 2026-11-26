/**
 * Oriental green landscape backdrop (pure CSS/SVG animation, no external images):
 * layered green mountains, drifting mist and clouds, flapping birds, a pagoda and
 * pine silhouettes, and a river strip with surging waves, lotus leaves and koi.
 * Rendered fixed behind the front-end layout; hidden in dark mode via CSS.
 * Styles live in styles/globals.css under the `.sc-*` namespace.
 */

function Bird({ n }: { n: number }) {
  return (
    <div className={`sc-bird sc-b${n}`}>
      <svg viewBox="0 0 60 24">
        <path className="sc-wing-l" d="M30,12 Q18,1 2,7 Q16,12 30,14 Z" />
        <path className="sc-wing-r" d="M30,12 Q42,1 58,7 Q44,12 30,14 Z" />
        <ellipse className="sc-body" cx="30" cy="13" rx="5" ry="2.4" />
      </svg>
    </div>
  );
}

function Fish({ n, spot }: { n: number; spot?: React.ReactNode }) {
  return (
    <div className={`sc-fish sc-f${n}`}>
      <svg viewBox="0 0 100 40">
        <g className="sc-tail">
          <path d="M76,20 L98,5 L98,35 Z" />
        </g>
        <path d="M2,20 Q25,3 56,7 Q79,11 84,20 Q79,29 56,33 Q25,37 2,20 Z" />
        {spot}
        <circle cx="15" cy="17" r="2.2" fill="#123524" />
      </svg>
    </div>
  );
}

export function Scenery() {
  return (
    <div className="scenery" aria-hidden="true">
      <div className="sc-sun" />
      <svg className="sc-mountains sc-m-far" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <defs>
          <linearGradient id="sc-gFar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#cdeeda" />
            <stop offset="1" stopColor="#a9dcbc" />
          </linearGradient>
        </defs>
        <path fill="url(#sc-gFar)" d="M0,320 L0,190 L120,125 L260,175 L380,95 L520,155 L640,105 L780,165 L900,115 L1040,175 L1180,125 L1320,170 L1440,135 L1440,320 Z" />
      </svg>
      <div className="sc-mist sc-mist-1" />
      <svg className="sc-mountains sc-m-mid" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <defs>
          <linearGradient id="sc-gMid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8fd0a8" />
            <stop offset="1" stopColor="#5cb385" />
          </linearGradient>
        </defs>
        <path fill="url(#sc-gMid)" d="M0,320 L0,225 L150,155 L300,210 L430,135 L580,200 L720,145 L870,205 L1000,150 L1150,210 L1290,160 L1440,205 L1440,320 Z" />
      </svg>
      <div className="sc-mist sc-mist-2" />
      <svg className="sc-mountains sc-m-near" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <defs>
          <linearGradient id="sc-gNear" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#3f9d6e" />
            <stop offset="1" stopColor="#256b47" />
          </linearGradient>
        </defs>
        <path fill="url(#sc-gNear)" d="M0,320 L0,265 L180,205 L360,255 L540,195 L720,250 L900,200 L1080,255 L1260,210 L1440,255 L1440,320 Z" />
      </svg>
      {[1, 2, 3, 4, 5].map((n) => (
        <div key={n} className={`sc-cloud sc-c${n}`} />
      ))}
      {[1, 2, 3, 4, 5].map((n) => (
        <Bird key={n} n={n} />
      ))}
      <svg className="sc-pagoda" viewBox="0 0 60 92">
        <g fill="#14532d">
          <rect x="28" y="0" width="4" height="10" />
          <path d="M30,8 L48,22 L12,22 Z" />
          <rect x="22" y="22" width="16" height="12" />
          <path d="M30,32 L52,48 L8,48 Z" />
          <rect x="20" y="48" width="20" height="14" />
          <path d="M30,60 L56,78 L4,78 Z" />
          <rect x="18" y="78" width="24" height="14" />
        </g>
      </svg>
      <svg className="sc-pines" viewBox="0 0 1440 90" preserveAspectRatio="none">
        <g fill="#14532d">
          {[
            'translate(60,18)',
            'translate(210,30) scale(0.8)',
            'translate(1180,22) scale(0.95)',
            'translate(1330,34) scale(0.75)',
          ].map((tr) => (
            <g key={tr} transform={tr}>
              <rect x="9" y="52" width="4" height="20" />
              <path d="M11,0 L24,26 L-2,26 Z" />
              <path d="M11,14 L26,42 L-4,42 Z" />
              <path d="M11,30 L28,58 L-6,58 Z" />
            </g>
          ))}
        </g>
      </svg>
      <div className="sc-water">
        <svg className="sc-waves sc-w-back" viewBox="0 0 2880 60" preserveAspectRatio="none">
          <path fill="rgba(255,255,255,0.35)" d="M0,32 Q60,6 120,32 T240,32 T360,32 T480,32 T600,32 T720,32 T840,32 T960,32 T1080,32 T1200,32 T1320,32 T1440,32 T1560,32 T1680,32 T1800,32 T1920,32 T2040,32 T2160,32 T2280,32 T2400,32 T2520,32 T2640,32 T2760,32 T2880,32 L2880,60 L0,60 Z" />
        </svg>
        <svg className="sc-waves sc-w-front" viewBox="0 0 2880 60" preserveAspectRatio="none">
          <path fill="rgba(255,255,255,0.55)" d="M0,36 Q60,12 120,36 T240,36 T360,36 T480,36 T600,36 T720,36 T840,36 T960,36 T1080,36 T1200,36 T1320,36 T1440,36 T1560,36 T1680,36 T1800,36 T1920,36 T2040,36 T2160,36 T2280,36 T2400,36 T2520,36 T2640,36 T2760,36 T2880,36 L2880,60 L0,60 Z" />
        </svg>
        {[1, 2, 3].map((n) => (
          <div key={n} className={`sc-leaf sc-l${n}`} />
        ))}
        <Fish n={1} spot={<ellipse cx="38" cy="15" rx="9" ry="4" fill="#fff" opacity="0.55" />} />
        <Fish n={2} spot={<ellipse cx="45" cy="24" rx="8" ry="3.5" fill="#e2574c" opacity="0.7" />} />
        <Fish n={3} />
        <Fish n={4} spot={<ellipse cx="34" cy="16" rx="7" ry="3.5" fill="#fff" opacity="0.6" />} />
      </div>
    </div>
  );
}
