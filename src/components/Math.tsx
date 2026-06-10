import { BlockMath, InlineMath } from 'react-katex';

type MathProps = {
  math: string;
  className?: string;
};

export function MathBlock({ math, className = '' }: MathProps) {
  return (
    <div className={`math-scroll ${className}`}>
      <BlockMath math={math} />
    </div>
  );
}

export function MathInline({ math, className = '' }: MathProps) {
  return (
    <span className={`math-inline ${className}`}>
      <InlineMath math={math} />
    </span>
  );
}
