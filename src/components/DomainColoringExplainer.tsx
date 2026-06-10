import { useState } from 'react';
import { MathBlock, MathInline } from './Math';

function pointOnCircle(angleDegrees: number, radius = 42) {
  const radians = (angleDegrees * Math.PI) / 180;
  return {
    x: 50 + radius * Math.cos(radians),
    y: 50 - radius * Math.sin(radians),
  };
}

function AnglePlane({
  angle,
  label,
  color,
}: {
  angle: number;
  label: string;
  color: string;
}) {
  const ray = pointOnCircle(angle);
  const gradientId = `${label.toLowerCase().replace(/\s+/g, '-')}-glow`;

  return (
    <div className="rounded-md border border-white/10 bg-ink/40 p-3">
      <div className="mb-2 flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-slate-200">{label}</p>
        <p className="text-sm text-slate-400">{Math.round(angle)} degrees</p>
      </div>
      <svg viewBox="0 0 100 100" className="aspect-square w-full" role="img" aria-label={`${label} angle on the complex plane`}>
        <defs>
          <radialGradient id={gradientId} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={color} stopOpacity="0.28" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100" height="100" rx="8" fill={`url(#${gradientId})`} />
        <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
        <line x1="8" y1="50" x2="92" y2="50" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
        <line x1="50" y1="8" x2="50" y2="92" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
        <line x1="50" y1="50" x2={ray.x} y2={ray.y} stroke={color} strokeLinecap="round" strokeWidth="4" />
        <circle cx={ray.x} cy={ray.y} r="4" fill={color} />
        <circle cx="50" cy="50" r="2.5" fill="white" opacity="0.9" />
      </svg>
    </div>
  );
}

export function DomainColoringExplainer() {
  const [theta, setTheta] = useState(45);
  const doubledTheta = theta * 2;
  const inputColor = `hsl(${theta}, 92%, 62%)`;
  const outputColor = `hsl(${doubledTheta % 360}, 92%, 62%)`;

  return (
    <div className="rounded-lg border border-white/10 bg-panel/80 p-5">
      <h3 className="text-xl font-semibold text-white">Angle Doubling</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">Move the angle of <MathInline math="z" /> and watch what <MathInline math="f(z)=z^2" /> does to the argument.</p>
      <label className="mt-5 block text-sm font-medium text-slate-200" htmlFor="theta"><MathInline math={`\\theta=${theta}^{\\circ}`} /></label>
      <input
        id="theta"
        type="range"
        min="0"
        max="180"
        value={theta}
        onChange={(event) => setTheta(Number(event.target.value))}
        className="mt-3 w-full accent-cyanline"
      />
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <AnglePlane angle={theta} label="Input angle" color={inputColor} />
        <AnglePlane angle={doubledTheta} label="Output angle" color={outputColor} />
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-md bg-white/[0.04] p-4">
          <div className="mb-3 h-2 rounded-full" style={{ backgroundColor: inputColor }} aria-hidden="true" />
          <p className="text-sm text-slate-400">Input</p>
          <MathBlock math="z=re^{i\theta}" className="math-compact" />
          <p className="mt-2 text-sm text-slate-300">Current argument: <MathInline math={`\\theta=${theta}^{\\circ}`} /></p>
        </div>
        <div className="rounded-md bg-white/[0.04] p-4">
          <div className="mb-3 h-2 rounded-full" style={{ backgroundColor: outputColor }} aria-hidden="true" />
          <p className="text-sm text-slate-400">Output</p>
          <MathBlock math="z^2=r^2e^{i2\theta}" className="math-compact" />
          <p className="mt-2 text-sm text-slate-300">Mapped argument: <MathInline math={`2\\theta=${doubledTheta}^{\\circ}`} /></p>
        </div>
      </div>
    </div>
  );
}
