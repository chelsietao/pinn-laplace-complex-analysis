const math = ['Analytic functions', 'Cauchy-Riemann equations', 'Harmonic functions', "Laplace's equation", 'Harmonic conjugates', 'Domain coloring', 'Potential flow'];
const ai = ['Physics-Informed Neural Networks', 'Automatic differentiation', 'PDE residual loss', 'Boundary condition loss', 'Error visualization'];
const outcomes = ['Connected complex analysis with PDEs', 'Used a neural network to approximate a harmonic function', 'Verified result against exact analytic solution', 'Visualized mathematical and physical interpretations'];

function PillList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => <span key={item} className="rounded-md border border-white/10 bg-white/10 px-3 py-2 text-sm text-slate-200">{item}</span>)}
      </div>
    </div>
  );
}

export function ProjectReview() {
  return (
    <div className="grid gap-5">
      <PillList title="Mathematical Concepts Used" items={math} />
      <PillList title="AI / Computational Concepts Used" items={ai} />
      <PillList title="Learning Outcomes" items={outcomes} />
      <div className="rounded-lg border border-cyanline/25 bg-cyanline/10 p-6">
        <h3 className="text-xl font-semibold text-white">Why This Project Matters</h3>
        <p className="mt-3 leading-8 text-slate-200">
          This project is intentionally small but conceptually rich. It uses a simple analytic function so that the exact solution is known, allowing us to test whether a neural network can recover a mathematically correct PDE solution. This makes it a good beginner-friendly AI for Science demonstration while still being connected to rigorous complex analysis.
        </p>
      </div>
    </div>
  );
}
