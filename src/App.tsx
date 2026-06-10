import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUp, Brain, ExternalLink, GitBranch, Network, Sigma } from 'lucide-react';
import { DomainColoringExplainer } from './components/DomainColoringExplainer';
import { FormulaCard } from './components/FormulaCard';
import { ImageFigure } from './components/ImageFigure';
import { InteractiveCRCheck } from './components/InteractiveCRCheck';
import { LossExplanation } from './components/LossExplanation';
import { MathBlock, MathInline } from './components/Math';
import { Navbar } from './components/Navbar';
import { PageContainer } from './components/PageContainer';
import { ProjectReview } from './components/ProjectReview';
import { Section } from './components/Section';
import { figureExplanations } from './data/figureExplanations';
import { images } from './data/sections';

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55 },
};

function HighlightCard({ icon: Icon, title, text }: { icon: typeof Sigma; title: string; text: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.055] p-5 backdrop-blur transition hover:border-cyanline/50 hover:bg-white/[0.08]">
      <Icon className="h-6 w-6 text-cyanline" aria-hidden="true" />
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}

function ConceptMap() {
  const nodes: React.ReactNode[] = [
    'Analytic function',
    'Harmonic function',
    "Laplace's equation",
    'PINN approximation',
    'Error analysis',
    'Scientific visualization',
  ];
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
      {nodes.map((node, index) => (
        <div key={index} className="relative">
          <div className="flex min-h-28 flex-col items-center justify-center gap-2 overflow-hidden rounded-lg border border-white/10 bg-panel/80 p-4 text-center text-sm font-medium leading-snug text-slate-100 shadow-glow">
            {node}
          </div>
          {index < nodes.length - 1 && <div className="mx-auto hidden h-px w-3 bg-cyanline/50 2xl:absolute 2xl:left-full 2xl:top-1/2 2xl:block" aria-hidden="true" />}
        </div>
      ))}
    </div>
  );
}

function TogglePanel() {
  const options = {
    u: <><MathBlock math="u(x,y)=x^2-y^2" /> <p className="text-slate-200">This is the real part and the harmonic function learned by the PINN.</p></>,
    v: <><MathBlock math="v(x,y)=2xy" /> <p className="text-slate-200">This is the harmonic conjugate associated with <MathInline math="u" />.</p></>,
    both: <><MathBlock math="f(z)=u(x,y)+iv(x,y)" /> <p className="text-slate-200">Together they reconstruct <MathInline math="f(z)=z^2" />, an analytic complex function.</p></>,
    cr: <><MathBlock math="u_x=v_y,\qquad u_y=-v_x" /> <p className="text-slate-200">The Cauchy-Riemann equations hold.</p></>,
  };
  const [active, setActive] = React.useState<keyof typeof options>('both');
  return (
    <div className="self-start rounded-lg border border-white/10 bg-panel/80 p-5">
      <div className="flex flex-wrap gap-2">
        {Object.keys(options).map((key) => (
          <button key={key} onClick={() => setActive(key as keyof typeof options)} className={`rounded-md px-3 py-2 text-sm font-medium transition ${active === key ? 'bg-mint text-ink' : 'bg-white/10 text-slate-200 hover:bg-white/15'}`}>
            {key === 'u' ? 'Show u only' : key === 'v' ? 'Show v only' : key === 'both' ? 'Show u and v' : 'Show C-R check'}
          </button>
        ))}
      </div>
      <div className="mt-4 text-base leading-7 text-slate-200">{options[active]}</div>
    </div>
  );
}

function DeploymentSection() {
  const links = [
    { label: 'GitHub Pages', href: 'https://chelsietao.github.io/pinn-laplace-complex-analysis/' },
    { label: 'GitHub Repository', href: 'https://github.com/chelsietao/pinn-laplace-complex-analysis' },
    { label: 'Hugging Face Space', href: 'https://huggingface.co/spaces/chelsietao/pinn-laplace-complex-analysis' },
    { label: 'Download Notebook', href: 'PINN_Laplace_ComplexAnalysis_v2%20(1).ipynb' },
  ];
  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_1.1fr]">
      <div className="rounded-lg border border-white/10 bg-panel/80 p-6">
        <h3 className="text-xl font-semibold text-white">Static Hosting Targets</h3>
        <p className="mt-3 leading-7 text-slate-300">The website is built as a static React app, so it can be deployed to GitHub Pages or Hugging Face Spaces.</p>
        <div className="mt-5 grid gap-3">
          <p className="formula rounded-md bg-white/[0.04] p-3 text-sm text-cyanline">https://chelsietao.github.io/pinn-laplace-complex-analysis/</p>
          <p className="formula rounded-md bg-white/[0.04] p-3 text-sm text-cyanline">https://huggingface.co/spaces/chelsietao/pinn-laplace-complex-analysis</p>
        </div>
      </div>
      <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
        <h3 className="text-xl font-semibold text-white">Project Links</h3>
        <div className="mt-5 flex flex-wrap gap-3">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="inline-flex items-center gap-2 rounded-md border border-cyanline/40 px-4 py-3 text-sm font-semibold text-cyanline transition hover:bg-cyanline/10">
              {link.label} <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
      <PageContainer>
        Created by Chelsie Tao | Complex Analysis × AI for Science | PINN for Laplace’s Equation
      </PageContainer>
    </footer>
  );
}

const summaryItems: React.ReactNode[] = [
  <>Started from <MathInline math="f(z)=z^2" />.</>,
  <>Extracted <MathInline math="u(x,y)=x^2-y^2" />.</>,
  <>Verified that <MathInline math="u" /> satisfies Laplace's equation.</>,
  'Trained a PINN to approximate this harmonic function.',
  'Compared the neural solution with the exact analytic solution.',
  'Visualized errors, harmonic conjugates, domain coloring, and physical interpretation.',
  'Demonstrated how AI can learn structures governed by differential equations.',
];

export default function App() {
  return (
    <div id="top" className="min-h-screen overflow-hidden">
      <Navbar />
      <main>
        <section className="relative min-h-[88vh] py-20">
          <div className="complex-grid absolute inset-0 opacity-80" aria-hidden="true" />
          <PageContainer>
            <motion.div className="relative flex flex-col justify-center pt-12" {...fadeUp}>
              <div className="w-full max-w-6xl">
                <p className="mb-4 inline-flex rounded-md border border-cyanline/30 bg-cyanline/10 px-3 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyanline">AI for Science Portfolio</p>
                <h1 className="text-5xl font-semibold tracking-normal text-white sm:text-6xl lg:text-7xl">PINNs for Laplace’s Equation</h1>
                <p className="mt-5 w-full max-w-5xl text-xl leading-9 text-slate-200">Connecting Complex Analysis, Harmonic Functions, and AI for Science</p>
                <p className="mt-5 w-full max-w-5xl text-lg leading-8 text-slate-300">This project uses a Physics-Informed Neural Network to approximate a harmonic function derived from the analytic complex function <MathInline math="f(z)=z^2" />. It compares the neural solution with the exact analytic solution and visualizes the connection between Laplace’s equation, Cauchy–Riemann equations, domain coloring, and potential flow.</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#story" className="inline-flex items-center gap-2 rounded-md bg-cyanline px-5 py-3 font-semibold text-ink transition hover:bg-cyan-200">Start the Story <ArrowDown className="h-4 w-4" /></a>
                  <a href="#results" className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-3 font-semibold text-white transition hover:bg-white/10">View Results</a>
                  <a href="#project-review" className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-3 font-semibold text-white transition hover:bg-white/10">Project Review</a>
                </div>
              </div>
              <div className="mt-12 grid gap-4 md:grid-cols-3">
                <HighlightCard icon={Sigma} title="Complex Analysis" text="Analytic functions, harmonic conjugates, and Cauchy-Riemann structure." />
                <HighlightCard icon={Brain} title="Physics-Informed Neural Networks" text="A neural network trained by equations and boundary values, not labels everywhere." />
                <HighlightCard icon={Network} title="Scientific Visualization" text="Contours, domain coloring, training curves, and flow interpretation." />
              </div>
            </motion.div>
          </PageContainer>
        </section>

        <Section id="story" eyebrow="Overview" title="Big Picture: From Complex Analysis to AI for Science" intro="Before introducing formulas, the project starts with a simple question: can a neural network learn a function because it obeys a mathematical law?">
          <motion.div className="grid gap-6 lg:grid-cols-[0.95fr_1.25fr]" {...fadeUp}>
            <div className="rounded-lg border border-white/10 bg-panel/80 p-6">
              <p className="leading-8 text-slate-300">Laplace’s equation appears in equilibrium problems, where a quantity has no internal source or sink and is determined by surrounding constraints. Harmonic functions appear in heat flow, electrostatics, fluid flow, and complex analysis.</p>
              <p className="mt-4 leading-8 text-slate-300">PINNs are neural networks trained using mathematical laws. This project uses a simple exact solution, so we can test whether the neural network learns correctly rather than only producing a plausible-looking picture.</p>
            </div>
            <ConceptMap />
          </motion.div>
        </Section>

        <Section id="foundation" eyebrow="Math Foundation" title={<>Mathematical Foundation: From <MathInline math="f(z)=z^2" /> to Laplace’s Equation</>} intro="The project starts with a classical analytic function whose real part gives an exact harmonic function.">
          <div className="grid gap-6 xl:grid-cols-[1fr_1.35fr]">
            <motion.div className="space-y-6" {...fadeUp}>
              <div className="rounded-lg border border-white/10 bg-panel/80 p-6">
                <div className="space-y-4 text-slate-100">
                  <MathBlock math="z = x + iy" />
                  <MathBlock math="f(z) = z^2 = (x+iy)^2" />
                  <MathBlock math="f(z)=x^2-y^2+i(2xy)" />
                  <MathBlock math="u(x,y)=x^2-y^2" />
                  <MathBlock math="v(x,y)=2xy" />
                </div>
                <p className="mt-5 leading-8 text-slate-300"><MathInline math="u" /> is the real part, <MathInline math="v" /> is the imaginary part, and together they satisfy the Cauchy–Riemann equations.</p>
                <MathBlock math="u_x=v_y,\qquad u_y=-v_x" />
                <p className="mt-5 leading-8 text-slate-300">The real part also satisfies Laplace’s equation, so it becomes the exact solution used to train and test the PINN.</p>
                <MathBlock math="\Delta u = u_{xx}+u_{yy}=0" />
              </div>
              <FormulaCard />
            </motion.div>
            <ImageFigure src={images.analytic} alt="Analytic real and imaginary parts of the complex squaring map with orthogonal level curves" caption={<>Analytic solution and harmonic conjugate derived from <MathInline math="f(z)=z^2" />.</>} explanation={figureExplanations.analytic} />
          </div>
        </Section>

        <Section id="pinn" eyebrow="PINN Method" title="What Is a PINN?" intro="A normal neural network learns from labeled data. A Physics-Informed Neural Network learns from a governing equation inside the domain and boundary conditions on the edge.">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.15fr]">
            <div className="rounded-lg border border-white/10 bg-panel/80 p-6">
              <p className="leading-8 text-slate-300">For this project, interior points enforce Laplace’s equation, while boundary points enforce the known values of the exact solution.</p>
              <div className="mt-5 grid gap-4">
                <div className="rounded-md bg-white/[0.04] p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cyanline">Interior points</p>
                  <MathBlock math="u_{xx}+u_{yy}=0" />
                </div>
                <div className="rounded-md bg-white/[0.04] p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cyanline">Boundary points</p>
                  <MathBlock math="u(x,y)=x^2-y^2" />
                </div>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {['Interior PDE residual', 'Boundary values', 'Neural approximation'].map((item) => <div key={item} className="flex min-h-24 items-center justify-center rounded-md bg-white/[0.04] p-4 text-center text-sm leading-6 text-slate-200">{item}</div>)}
              </div>
            </div>
            <ImageFigure src={images.points} alt="PINN collocation points with interior PDE points and boundary-condition points" caption="Interior points enforce the PDE residual, while boundary points enforce the boundary condition." explanation={figureExplanations.points} />
          </div>
        </Section>

        <Section id="training" eyebrow="Training" title="Training Process" intro="The total loss combines PDE residual loss and boundary condition loss. A decreasing loss means the model is learning.">
          <div className="grid gap-6 xl:grid-cols-[1.45fr_1fr]">
            <ImageFigure src={images.curves} alt="PINN training curves for total loss, PDE residual loss, and boundary condition loss" caption="Training curves show how the PINN gradually reduces PDE and boundary errors." explanation={figureExplanations.curves} />
            <div className="space-y-5">
              <div className="rounded-lg border border-white/10 bg-panel/80 p-6">
                <MathBlock math="\mathcal{L}_{\text{total}}=\mathcal{L}_{\text{PDE}}+\mathcal{L}_{\text{BC}}" />
                <p className="mt-5 leading-8 text-slate-300">PDE loss checks whether the model satisfies Laplace’s equation. Boundary loss checks whether the model matches known values on the boundary.</p>
                <MathBlock math="\mathcal{L}_{\text{PDE}}=\frac{1}{N}\sum_{i=1}^{N}\left(u_{xx}(x_i,y_i)+u_{yy}(x_i,y_i)\right)^2" />
                <MathBlock math="\mathcal{L}_{\text{BC}}=\frac{1}{M}\sum_{j=1}^{M}\left(u_{\theta}(x_j,y_j)-u_{\text{exact}}(x_j,y_j)\right)^2" />
              </div>
              <LossExplanation />
            </div>
          </div>
        </Section>

        <Section id="results" eyebrow="Results" title="Prediction vs Exact Solution" intro={<>After training, the PINN prediction is compared with the exact analytic solution. Along the line <MathInline math="y=0" />, the exact solution becomes <MathInline math="u(x,0)=x^2" />.</>}>
          <ImageFigure src={images.crossSection} alt="Cross-section comparing PINN prediction and exact analytic solution" caption={<>Cross-section comparison along <MathInline math="y=0" />: the PINN prediction nearly overlaps the analytic solution.</>} explanation={figureExplanations.crossSection} />
        </Section>

        <Section id="error" eyebrow="Error" title="Error Analysis" intro={<>The error is defined as the absolute difference between the PINN prediction and the exact solution: <MathInline math="|\hat{u}_\theta-u_{\text{exact}}|" />.</>}>
          <div className="grid gap-6 xl:grid-cols-[1.35fr_0.9fr]">
            <ImageFigure src={images.error} alt="Absolute error between PINN solution and exact analytic solution" caption="Absolute error between the PINN prediction and the analytic solution." explanation={figureExplanations.error} />
            <div className="rounded-lg border border-gold/25 bg-gold/10 p-6">
              <h3 className="text-xl font-semibold text-white">How to Read the Error Plot</h3>
              <div className="mt-4 grid gap-3">
                {['Low error means the model learned the harmonic function accurately.', 'Slightly larger errors may appear near boundaries or corners.', 'The plot proves the PINN is numerically accurate, not only visually similar.'].map((item) => <p key={item} className="rounded-md bg-ink/40 p-4 text-sm leading-6 text-slate-200">{item}</p>)}
              </div>
            </div>
          </div>
        </Section>

        <Section id="cr-validation" eyebrow="C-R Validation" title="Does the Neural Network Preserve Complex-Analysis Structure?" intro="A good approximation should not only match function values. It should also preserve derivative relationships such as the Cauchy–Riemann equations.">
          <div className="grid gap-6 xl:grid-cols-[1.35fr_0.85fr]">
            <ImageFigure src={images.harmonic} alt="Harmonic conjugate recovery and Cauchy-Riemann verification plots" caption="Cauchy–Riemann validation and harmonic conjugate recovery from the PINN solution." explanation={figureExplanations.harmonic} />
            <div className="space-y-6">
              <div className="rounded-lg border border-white/10 bg-panel/80 p-6">
                <MathBlock math="u_x=v_y,\qquad u_y=-v_x" />
                <p className="mt-5 leading-8 text-slate-300">The PINN derivative can be computed using automatic differentiation, and the harmonic conjugate can be recovered from the Cauchy–Riemann structure.</p>
              </div>
              <InteractiveCRCheck />
              <TogglePanel />
            </div>
          </div>
        </Section>

        <Section id="domain-coloring" eyebrow="Domain Coloring" title="Complex Function Visualization: Domain Coloring" intro="Domain coloring uses hue for argument and brightness for magnitude, turning complex-valued functions into readable visual patterns.">
          <div className="grid gap-6 xl:grid-cols-[1.35fr_0.85fr]">
            <ImageFigure src={images.domain} alt="Domain coloring visualizations for complex functions including the squaring map" caption="Domain coloring reveals how complex functions transform the complex plane." explanation={figureExplanations.domain} />
            <div className="space-y-6">
              <div className="rounded-lg border border-white/10 bg-panel/80 p-6">
                <MathBlock math="z=re^{i\theta}" />
                <MathBlock math="z^2=r^2e^{i2\theta}" />
                <p className="mt-5 leading-8 text-slate-300">For <MathInline math="f(z)=z^2" />, angles double and distances from the origin are squared.</p>
              </div>
              <DomainColoringExplainer />
            </div>
          </div>
        </Section>

        <Section id="flow" eyebrow="Physical Interpretation" title="Physical Interpretation: Potential Flow" intro="The same pair of harmonic functions can also be read as a velocity potential and a stream function in an idealized flow model.">
          <div className="grid gap-6 xl:grid-cols-[1.35fr_0.85fr]">
            <ImageFigure src={images.flow} alt="Potential flow interpretation with vector field, streamlines, and equipotential curves" caption={<>Potential-flow interpretation of the analytic function <MathInline math="f(z)=z^2" />.</>} explanation={figureExplanations.flow} />
            <div className="rounded-lg border border-white/10 bg-panel/80 p-6">
              <MathBlock math="\phi(x,y)=x^2-y^2" />
              <MathBlock math="\psi(x,y)=2xy" />
              <p className="mt-5 leading-8 text-slate-300">Equipotential curves and streamlines meet orthogonally, echoing the same Cauchy–Riemann geometry seen earlier.</p>
            </div>
          </div>
        </Section>

        <Section id="summary" eyebrow="Final Summary" title="Project Summary" intro="The final overview brings together the analytic solution, neural prediction, training behavior, error analysis, and complex-function visualization.">
          <div className="grid gap-6 xl:grid-cols-[1.35fr_0.85fr]">
            <ImageFigure src={images.summary} alt="Project summary dashboard for PINN and complex analysis" caption="Final overview of the PINN solution, error analysis, training behavior, and complex-function visualization." explanation={figureExplanations.summary} />
            <div className="rounded-lg border border-white/10 bg-panel/80 p-6">
              <ul className="grid gap-4 text-slate-300">
                {summaryItems.map((item, index) => <li key={index} className="flex gap-3"><GitBranch className="mt-1 h-4 w-4 shrink-0 text-cyanline" />{item}</li>)}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="project-review" eyebrow="Academic Summary" title="Project Review" intro="A concise summary of the mathematical and computational value of the project.">
          <ProjectReview />
        </Section>

        <Section id="deploy" eyebrow="Deployment" title="Source Code and Hosting" intro="Repository name suggestion: chelsietao/pinn-laplace-complex-analysis.">
          <DeploymentSection />
        </Section>
      </main>
      <a href="#top" className="fixed bottom-5 right-5 inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/15 bg-panel/90 text-cyanline shadow-glow backdrop-blur transition hover:bg-white/10" aria-label="Back to top">
        <ArrowUp className="h-5 w-5" />
      </a>
      <Footer />
    </div>
  );
}
