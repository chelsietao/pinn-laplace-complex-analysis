import { MathBlock, MathInline } from '../components/Math';

function ExplanationText({ children }: { children: React.ReactNode }) {
  return <div className="space-y-4 text-base leading-8 text-slate-300">{children}</div>;
}

export const figureExplanations = {
  summary: (
    <ExplanationText>
      <p>This summary figure gives an overview of the whole project. The top row compares the analytic solution, the PINN prediction, and the absolute error. The analytic solution is <MathInline math="u(x,y)=x^2-y^2" />, which comes from the real part of the complex function <MathInline math="f(z)=z^2" />. The PINN prediction is the neural network approximation of the same function.</p>
      <p>Visually, the first two plots are almost identical, which means the neural network has successfully learned the shape of the harmonic function. The error plot shows the absolute difference between the exact solution and the PINN prediction. The error is very small, with an <MathInline math="L^2" /> error around <MathInline math="0.0002" />.</p>
      <p>The bottom-left plot shows the training loss curves. The loss decreases over time, meaning the model gradually learns to satisfy both Laplace's equation and the boundary conditions. The bottom-right plot shows domain coloring for <MathInline math="f(z)=z^2" />, visualizing how the complex function transforms the complex plane.</p>
      <p>This figure connects all parts of the project: complex analysis, harmonic functions, neural network training, error analysis, and complex-function visualization.</p>
    </ExplanationText>
  ),
  analytic: (
    <ExplanationText>
      <p>This figure visualizes the analytic function <MathInline math="f(z)=z^2" />, where <MathInline math="z=x+iy" />. Expanding the function gives:</p>
      <MathBlock math="f(z)=z^2=(x+iy)^2=x^2-y^2+i(2xy)" />
      <p>Therefore, the real and imaginary parts are:</p>
      <MathBlock math="u(x,y)=x^2-y^2" />
      <MathBlock math="v(x,y)=2xy" />
      <p>The left plot shows <MathInline math="u(x,y)=x^2-y^2" />. This function is harmonic because it satisfies Laplace's equation:</p>
      <MathBlock math="\Delta u = u_{xx}+u_{yy}=0" />
      <p>The middle plot shows <MathInline math="v(x,y)=2xy" />, which is the harmonic conjugate of <MathInline math="u" />. Together, <MathInline math="u" /> and <MathInline math="v" /> form the analytic function <MathInline math="f(z)=u+iv" />.</p>
      <p>The right plot shows level curves of <MathInline math="u" /> and <MathInline math="v" />. The blue curves represent constant values of <MathInline math="u" />, while the red dashed curves represent constant values of <MathInline math="v" />. These two families of curves meet orthogonally. This orthogonality is a geometric consequence of the Cauchy-Riemann equations and is one of the most beautiful visual features of analytic functions.</p>
      <p>This figure shows that complex analysis is not only symbolic. It has a clear geometric structure that can be visualized directly.</p>
    </ExplanationText>
  ),
  curves: (
    <ExplanationText>
      <p>This figure shows how the Physics-Informed Neural Network learns during training. The left plot shows the loss curves on a logarithmic scale. There are three main losses: the total loss, the PDE residual loss, and the boundary condition loss.</p>
      <p>The PDE residual loss measures how well the neural network satisfies Laplace's equation inside the domain:</p>
      <MathBlock math="u_{xx}+u_{yy}=0" />
      <p>The boundary condition loss measures how well the neural network matches the known values on the boundary of the square domain. The total loss combines these two objectives.</p>
      <p>At the beginning of training, the losses are large because the neural network has not yet learned the correct function. As training continues, the losses decrease significantly. This means the model is learning both the differential equation and the boundary values. The learning-rate decay points help stabilize training and allow the model to refine its approximation.</p>
      <p>The right plot zooms in on the late-stage training behavior. It shows that the final loss is very small, around <MathInline math="1.4\times 10^{-5}" />. This indicates that the trained PINN has reached a stable and accurate solution.</p>
      <p>This figure is important because it shows the learning process, not just the final result. It demonstrates how the neural network gradually becomes consistent with the mathematical structure of the problem.</p>
    </ExplanationText>
  ),
  points: (
    <ExplanationText>
      <p>This figure shows the training points used by the PINN. The blue points are interior collocation points, and the red points are boundary points.</p>
      <p>The interior points are used to enforce the PDE condition. At each blue point, the neural network prediction is differentiated using automatic differentiation, and the model is penalized if</p>
      <MathBlock math="u_{xx}+u_{yy}" />
      <p>is not close to zero. In other words, the blue points teach the model the physics or mathematics inside the domain.</p>
      <p>The red boundary points are used to enforce the boundary condition. Since the exact solution is known on the boundary, the neural network is trained to match those boundary values.</p>
      <p>This figure explains the key idea of a Physics-Informed Neural Network. Instead of requiring labeled data everywhere in the domain, the model learns from two sources: the governing equation in the interior and known values on the boundary. This is why PINNs are useful for scientific problems governed by differential equations.</p>
    </ExplanationText>
  ),
  crossSection: (
    <ExplanationText>
      <p>This figure compares the PINN prediction and the analytic solution along the line <MathInline math="y=0" />. On this line, the analytic solution becomes</p>
      <MathBlock math="u(x,0)=x^2" />
      <p>The blue curve represents the exact analytic solution, while the red dashed curve represents the PINN prediction. The two curves almost completely overlap, showing that the neural network has learned the correct solution very accurately along this cross-section.</p>
      <p>The shaded error region is very small, which means the difference between the PINN prediction and the exact solution is almost negligible.</p>
      <p>This figure is useful because a one-dimensional cross-section makes the comparison easier to understand. While contour plots show the whole two-dimensional structure, this plot gives a simple and direct view of how close the neural network prediction is to the true solution.</p>
    </ExplanationText>
  ),
  error: (
    <ExplanationText>
      <p>This figure compares the analytic solution, the PINN prediction, and the absolute error over the whole two-dimensional domain.</p>
      <p>The left plot shows the exact analytic solution</p>
      <MathBlock math="u(x,y)=x^2-y^2" />
      <p>The middle plot shows the PINN prediction</p>
      <MathBlock math="\hat{u}_\theta(x,y)" />
      <p>The two plots look almost identical, which means the neural network has captured the global shape of the harmonic function.</p>
      <p>The right plot shows the absolute error</p>
      <MathBlock math="|\hat{u}_\theta-u_{\text{exact}}|" />
      <p>The error values are very small, with an <MathInline math="L^2" /> error around <MathInline math="0.00021" /> and a maximum error around <MathInline math="0.00115" />. Most of the domain has very low error. Slightly larger errors appear near some boundary or corner regions, which is common in PINN training because boundary behavior can be harder to approximate precisely.</p>
      <p>This figure is important because it provides quantitative and visual evidence that the PINN successfully approximates the analytic solution. It also shows where the model performs best and where improvement may still be possible.</p>
    </ExplanationText>
  ),
  harmonic: (
    <ExplanationText>
      <p>This figure investigates whether the PINN solution preserves the complex-analysis structure behind the problem.</p>
      <p>For the analytic function</p>
      <MathBlock math="f(z)=z^2" />
      <p>we have</p>
      <MathBlock math="u(x,y)=x^2-y^2,\qquad v(x,y)=2xy" />
      <p>The Cauchy-Riemann equations are</p>
      <MathBlock math="u_x=v_y,\qquad u_y=-v_x" />
      <p>The top-left plot shows the exact derivative <MathInline math="u_x=2x" />. The top-middle plot shows the derivative <MathInline math="u_x" /> computed from the PINN using automatic differentiation. The two plots are very similar, meaning the neural network has learned not only the function value, but also a meaningful derivative structure.</p>
      <p>The top-right plot shows the error between the PINN derivative and the exact derivative. The error is small, which supports the accuracy of the learned solution.</p>
      <p>The bottom-left plot shows the analytic harmonic conjugate <MathInline math="v(x,y)=2xy" />. The bottom-middle plot shows the recovered <MathInline math="v" /> using the Cauchy-Riemann relationship. This demonstrates that information about the harmonic conjugate can be reconstructed from the learned potential function.</p>
      <p>The bottom-right plot shows level curves from the PINN-based reconstruction. The blue curves represent constant values of <MathInline math="u" />, while the red dashed curves represent constant values of <MathInline math="v" />. Their near-orthogonal structure shows that the learned function approximately preserves the geometry of analytic functions.</p>
      <p>This figure is significant because it goes beyond ordinary error comparison. It checks whether the neural network has learned a solution that is compatible with complex analysis.</p>
    </ExplanationText>
  ),
  domain: (
    <ExplanationText>
      <p>This figure shows domain coloring visualizations of several complex functions. Domain coloring is a method for visualizing complex-valued functions. Since a complex output has both magnitude and argument, color is used to represent this information.</p>
      <p>In these plots, the hue represents the argument</p>
      <MathBlock math="\arg(f(z))" />
      <p>and the brightness represents the magnitude</p>
      <MathBlock math="|f(z)|" />
      <p>The first plot shows</p>
      <MathBlock math="f(z)=z^2" />
      <p>This function doubles angles and squares distances from the origin:</p>
      <MathBlock math="z=re^{i\theta}\quad \Longrightarrow \quad z^2=r^2e^{i2\theta}" />
      <p>The second plot shows <MathInline math="f(z)=z^3" />, which triples angles. The third plot shows <MathInline math="f(z)=e^z" />, an entire function with exponential behavior. The fourth plot shows <MathInline math="f(z)=1/z" />, which has a pole at the origin. The fifth plot shows <MathInline math="f(z)=\sin z" />. The last plot shows a rational function with zeros and poles.</p>
      <p>This figure helps the viewer understand that different complex functions create different geometric patterns. Zeros, poles, angle multiplication, and exponential growth can all be seen visually through color and brightness.</p>
      <p>For this project, domain coloring provides a bridge between symbolic complex analysis and visual intuition.</p>
    </ExplanationText>
  ),
  flow: (
    <ExplanationText>
      <p>This figure connects complex analysis with fluid mechanics. In two-dimensional potential flow, a complex analytic function can describe both a velocity potential and a stream function.</p>
      <p>For this project, the function is based on</p>
      <MathBlock math="f(z)=z^2" />
      <p>The potential function is</p>
      <MathBlock math="\phi(x,y)=x^2-y^2" />
      <p>and the stream function is</p>
      <MathBlock math="\psi(x,y)=2xy" />
      <p>The left plot shows the velocity field. The arrows indicate the direction of the flow, while the background color represents the speed <MathInline math="|\nabla \phi|" />. Here,</p>
      <MathBlock math="\nabla \phi = (2x,-2y)" />
      <p>The red streamlines show curves along which the stream function is constant.</p>
      <p>The right plot shows streamlines and equipotential lines together. The red curves represent</p>
      <MathBlock math="\psi=\text{constant}" />
      <p>and the blue dashed curves represent</p>
      <MathBlock math="\phi=\text{constant}" />
      <p>These two families of curves are orthogonal, which reflects the Cauchy-Riemann equations. This is the same geometric structure seen in analytic functions.</p>
      <p>This figure is important because it shows that complex analysis is not only an abstract mathematical theory. The same harmonic and analytic structures appear in physics, especially in ideal fluid flow and potential theory.</p>
    </ExplanationText>
  ),
} satisfies Record<string, React.ReactNode>;
