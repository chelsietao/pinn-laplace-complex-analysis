import type { ReactNode } from 'react';

type PageContainerProps = {
  children: ReactNode;
  className?: string;
};

export function PageContainer({ children, className = '' }: PageContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1400px] px-5 sm:px-6 lg:px-10 xl:px-12 ${className}`}>
      {children}
    </div>
  );
}
