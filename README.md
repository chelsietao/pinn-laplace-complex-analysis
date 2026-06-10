# PINNs for Laplace's Equation: Connecting Complex Analysis, Harmonic Functions, and AI for Science

An interactive scientific portfolio website for Chelsie Tao's complex analysis x AI for Science project. The site explains how the analytic function `f(z) = z^2` leads to the harmonic function `u(x, y) = x^2 - y^2`, then shows how a Physics-Informed Neural Network can approximate that solution to Laplace's equation.

The website is designed for a complex analysis professor, AI for Science reviewers, and students who are new to complex analysis, PDEs, or neural networks.

## Suggested Repository Names

GitHub:

```bash
chelsietao/pinn-laplace-complex-analysis
```

Hugging Face Space:

```bash
chelsietao/pinn-laplace-complex-analysis
```

## Local Setup

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Image and Notebook Assets

Put all project PNG images inside:

```bash
public/assets/
```

Expected image files:

```bash
public/assets/section2_analytic_solution.png
public/assets/section3_training_points.png
public/assets/section3_training_curves.png
public/assets/section4_cross_section.png
public/assets/section4_error_analysis.png
public/assets/section5_harmonic_conjugate.png
public/assets/section6_domain_coloring.png
public/assets/section7_fluid_flow.png
public/assets/final_summary.png
```

Place the notebook inside `public/` if you want the "Download Notebook" button to work after build/deployment:

```bash
public/PINN_Laplace_ComplexAnalysis_v2 (1).ipynb
```

The site includes graceful placeholders if any PNG image is missing.

## Deploy to GitHub Pages

1. Push this project to:

```bash
https://github.com/chelsietao/pinn-laplace-complex-analysis
```

2. For a GitHub Pages project site, update `vite.config.ts`:

```ts
export default defineConfig({
  plugins: [react()],
  base: '/pinn-laplace-complex-analysis/',
});
```

3. Build the project:

```bash
npm run build
```

4. Deploy the `dist/` folder. One simple option is `gh-pages`:

```bash
npm install --save-dev gh-pages
```

Add this script to `package.json`:

```json
"deploy": "gh-pages -d dist"
```

Then run:

```bash
npm run build
npm run deploy
```

Expected URL:

```bash
https://chelsietao.github.io/pinn-laplace-complex-analysis/
```

## Deploy to Hugging Face Spaces

1. Create a new Space under `chelsietao`.
2. Use the name:

```bash
pinn-laplace-complex-analysis
```

3. Choose a Static Space, or use a Node/Vite-compatible Space.
4. Push this repository to the Space.
5. Make sure the Space runs:

```bash
npm install
npm run build
```

6. Serve the generated `dist/` directory.

Expected Space URL:

```bash
https://huggingface.co/spaces/chelsietao/pinn-laplace-complex-analysis
```

## Project Description / Citation

"This project demonstrates a Physics-Informed Neural Network approximation of a harmonic function derived from the analytic complex function `f(z) = z^2`."

## Site Structure

```bash
src/
  components/
    DomainColoringExplainer.tsx
    FormulaCard.tsx
    ImageFigure.tsx
    InteractiveCRCheck.tsx
    LossExplanation.tsx
    Navbar.tsx
    ProfessorReview.tsx
    Section.tsx
  data/
    sections.ts
  App.tsx
  index.css
  main.tsx
```

The website includes responsive layout, sticky navigation, smooth scrolling, accessible image alt text, interactive formula panels, a Cauchy-Riemann hover check, loss explanation controls, a domain-coloring angle slider, and a final professor-review section.
