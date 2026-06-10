import { useState } from 'react';
import type { ReactNode } from 'react';
import { MathInline } from './Math';

const lossTerms = {
  total: {
    label: 'Total Loss',
    text: 'The combined objective optimized during training. It balances the PDE residual with the boundary condition mismatch.',
  },
  pde: {
    label: 'PDE Loss',
    text: <>The mean squared value of <MathInline math="u_{xx}+u_{yy}" /> at interior points. Smaller values mean the neural solution better respects Laplace's equation.</>,
  },
  bc: {
    label: 'Boundary Loss',
    text: 'The mismatch between the network prediction and the exact boundary values on the edge of the square domain.',
  },
} satisfies Record<string, { label: string; text: ReactNode }>;

export function LossExplanation() {
  const [active, setActive] = useState<keyof typeof lossTerms>('pde');
  return (
    <div className="rounded-lg border border-white/10 bg-panel/80 p-5">
      <div className="flex flex-wrap gap-2">
        {Object.entries(lossTerms).map(([key, value]) => (
          <button
            key={key}
            onClick={() => setActive(key as keyof typeof lossTerms)}
            className={`rounded-md px-3 py-2 text-sm font-medium transition ${active === key ? 'bg-gold text-ink' : 'bg-white/10 text-slate-200 hover:bg-white/15'}`}
          >
            {value.label}
          </button>
        ))}
      </div>
      <p className="mt-4 text-base leading-7 text-slate-200">{lossTerms[active].text}</p>
    </div>
  );
}
