import { useState } from 'react';
import { MathBlock, MathInline } from './Math';

const steps = [
  { key: 'uxx', label: 'Compute ', labelMath: 'u_{xx}', result: 'u_{xx}=2' },
  { key: 'uyy', label: 'Compute ', labelMath: 'u_{yy}', result: 'u_{yy}=-2' },
  { key: 'laplace', label: 'Check Laplace equation', result: 'u_{xx}+u_{yy}=2-2=0' },
];

export function FormulaCard() {
  const [active, setActive] = useState(steps[0].key);
  const result = steps.find((step) => step.key === active)?.result;

  return (
    <div className="rounded-lg border border-white/10 bg-panel/80 p-5 shadow-glow">
      <MathBlock math="u(x,y)=x^2-y^2" />
      <div className="mt-4 flex flex-wrap gap-2">
        {steps.map((step) => (
          <button
            key={step.key}
            onClick={() => setActive(step.key)}
            className={`rounded-md px-3 py-2 text-sm font-medium transition ${active === step.key ? 'bg-cyanline text-ink' : 'bg-white/10 text-slate-200 hover:bg-white/15'}`}
          >
            {step.labelMath ? <>{step.label}<MathInline math={step.labelMath} /></> : step.label}
          </button>
        ))}
      </div>
      <div className="mt-4 rounded-md border border-cyanline/25 bg-cyanline/10 p-4">
        {result && <MathBlock math={result} />}
      </div>
    </div>
  );
}
