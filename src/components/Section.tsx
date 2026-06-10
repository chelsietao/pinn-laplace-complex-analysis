import { ReactNode } from 'react';
import { PageContainer } from './PageContainer';

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, intro, children }: SectionProps) {
  return (
    <section id={id} className="section-anchor relative w-full py-16">
      <PageContainer>
        <header className="mb-8 w-full max-w-6xl">
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyanline">{eyebrow}</p>
          )}
          <h2 className="w-full text-3xl font-semibold tracking-normal text-white sm:text-4xl">{title}</h2>
          {intro && <p className="mt-4 w-full max-w-5xl text-lg leading-8 text-slate-300">{intro}</p>}
        </header>
        {children}
      </PageContainer>
    </section>
  );
}
