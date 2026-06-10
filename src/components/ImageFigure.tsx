import { useState } from 'react';
import type { ReactNode } from 'react';
import { ChevronDown, ImageOff } from 'lucide-react';

type ImageFigureProps = {
  src: string;
  alt: string;
  caption: ReactNode;
  explanation?: ReactNode;
  wide?: boolean;
};

export function ImageFigure({ src, alt, caption, explanation, wide = false }: ImageFigureProps) {
  const [missing, setMissing] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <figure className={`self-start overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] shadow-glow ${wide ? 'lg:col-span-2' : ''}`}>
      {missing ? (
        <div className="flex min-h-72 flex-col items-center justify-center gap-3 p-8 text-center text-slate-300">
          <ImageOff className="h-10 w-10 text-cyanline" aria-hidden="true" />
          <p className="font-medium">Image placeholder</p>
          <p className="w-full max-w-none text-sm text-slate-400">Place this file at <span className="formula text-cyanline">{src}</span>.</p>
        </div>
      ) : (
        <img className="block h-auto w-full bg-slate-950 object-contain" src={src} alt={alt} onError={() => setMissing(true)} loading="lazy" />
      )}
      <figcaption className="border-t border-white/10 px-4 py-3 text-sm leading-6 text-slate-300">{caption}</figcaption>
      {explanation && (
        <div className="border-t border-white/10">
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-sm font-semibold text-cyanline transition hover:bg-cyanline/10"
            aria-expanded={open}
          >
            <span>{open ? 'Hide detailed explanation' : 'Read detailed explanation'}</span>
            <ChevronDown className={`h-4 w-4 shrink-0 transition ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
          </button>
          {open && <div className="w-full max-w-none border-t border-white/10 bg-ink/35 px-4 py-5">{explanation}</div>}
        </div>
      )}
    </figure>
  );
}
