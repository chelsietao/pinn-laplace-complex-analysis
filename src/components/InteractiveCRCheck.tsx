import { MathBlock, MathInline } from './Math';

const derivatives = [
  { symbol: 'u_x = 2x', meaning: <>Horizontal change of the real part <MathInline math="u" />. It matches <MathInline math="v_y" /> in the Cauchy-Riemann equations.</> },
  { symbol: 'u_y = -2y', meaning: <>Vertical change of the real part <MathInline math="u" />. It is the negative of <MathInline math="v_x" />.</> },
  { symbol: 'v_x = 2y', meaning: <>Horizontal change of the imaginary part <MathInline math="v" />. Its negative matches <MathInline math="u_y" />.</> },
  { symbol: 'v_y = 2x', meaning: <>Vertical change of the imaginary part <MathInline math="v" />. It matches <MathInline math="u_x" />.</> },
];

export function InteractiveCRCheck() {
  return (
    <div className="rounded-lg border border-white/10 bg-panel/80 p-5">
      <h3 className="text-xl font-semibold text-white">Hover the Derivatives</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">The Cauchy-Riemann equations align horizontal and vertical rates of change so that u and v fit together as one analytic function.</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {derivatives.map((item) => (
          <div key={item.symbol} className="group rounded-md border border-white/10 bg-white/[0.04] p-4 transition hover:border-cyanline/60 hover:bg-cyanline/10">
            <MathBlock math={item.symbol} />
            <p className="mt-3 text-sm leading-6 text-slate-300 opacity-75 transition group-hover:opacity-100">{item.meaning}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-md border border-mint/30 bg-mint/10 p-4 text-mint">
        <MathBlock math="u_x=v_y,\qquad u_y=-v_x" />
        <p className="mt-2 text-sm text-slate-200">Therefore <MathInline math="f(z)=z^2" /> is analytic.</p>
      </div>
    </div>
  );
}
