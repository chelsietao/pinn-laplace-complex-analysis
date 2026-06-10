import { ArrowUpRight } from 'lucide-react';
import { navItems } from '../data/sections';
import { PageContainer } from './PageContainer';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur-xl">
      <PageContainer>
        <nav className="flex items-center justify-between gap-4 py-3" aria-label="Primary navigation">
          <a href="#top" className="text-sm font-semibold text-white sm:text-base">PINN x Complex Analysis</a>
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="https://github.com/chelsietao/pinn-laplace-complex-analysis"
            className="inline-flex items-center gap-2 rounded-md border border-cyanline/40 px-3 py-2 text-sm text-cyanline transition hover:bg-cyanline/10"
          >
            Source <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </nav>
      </PageContainer>
    </header>
  );
}
