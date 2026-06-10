# PINNs for Laplace’s Equation

## Complex Analysis × AI for Science Learning Notes

This document is my learning note and project explanation for a small AI for Science project. The goal is to understand how a Physics-Informed Neural Network can be connected with concepts from complex analysis, especially analytic functions, harmonic functions, the Cauchy–Riemann equations, and Laplace’s equation.

The explanation follows the order:

1. intuition
2. formulas
3. connection to the project

---

# 0. What Is This Project About?

The central question of this project is:

> Can a neural network learn a function not only from data, but also from a mathematical law?

I start with one of the simplest analytic functions in complex analysis:

$$
f(z)=z^2
$$

Let

$$
z=x+iy
$$

Then

$$
f(z)=(x+iy)^2=x^2-y^2+i(2xy)
$$

So the real and imaginary parts are:

$$
u(x,y)=x^2-y^2
$$

$$
v(x,y)=2xy
$$

Here, $u(x,y)$ is a harmonic function. This means it satisfies Laplace’s equation:

$$
\Delta u=u_{xx}+u_{yy}=0
$$

In this project, I train a PINN, which stands for Physics-Informed Neural Network, to learn the function

$$
u(x,y)=x^2-y^2.
$$

---

# 1. The Starting Point of Complex Analysis: What Is $z=x+iy$?

In real-variable functions, we usually work with one real variable:

$$
f(x)
$$

In complex analysis, a complex number is written as:

$$
z=x+iy
$$

where

$$
x=\operatorname{Re}(z)
$$

and

$$
y=\operatorname{Im}(z)
$$

This means that a complex number can be understood as a point on the plane:

$$
z=(x,y)
$$

Therefore, a complex function

$$
f(z)
$$

can be viewed as a function that maps a point in the plane to another complex number.

---

# 2. Why Is $f(z)=z^2$ a Good Example for This Project?

I choose $f(z)=z^2$ because it is simple, but it still contains a complete complex-analysis structure.

Let

$$
z=x+iy
$$

Then

$$
f(z)=z^2=(x+iy)^2
$$

Expanding it gives:

$$
(x+iy)^2=x^2+2ixy+i^2y^2
$$

Since

$$
i^2=-1
$$

we get:

$$
f(z)=x^2-y^2+i(2xy)
$$

Therefore, it can be written as:

$$
f(z)=u(x,y)+iv(x,y)
$$

where

$$
u(x,y)=x^2-y^2
$$

and

$$
v(x,y)=2xy
$$

Here, $u$ is the real part and $v$ is the imaginary part.

---

# 3. What Is an Analytic Function?

In complex analysis, if a function $f(z)$ is complex differentiable in a region, it is called an analytic function.

A very important condition for analytic functions is that their real and imaginary parts satisfy the Cauchy–Riemann equations.

Suppose

$$
f(z)=u(x,y)+iv(x,y)
$$

Then the Cauchy–Riemann equations are:

$$
u_x=v_y
$$

$$
u_y=-v_x
$$

This means that the real part $u$ and the imaginary part $v$ are not arbitrary functions. Their partial derivatives must satisfy a strict relationship.

---

# 4. Checking the Cauchy–Riemann Equations for $f(z)=z^2$

I already know that

$$
u(x,y)=x^2-y^2
$$

and

$$
v(x,y)=2xy
$$

First, I compute the partial derivatives of $u$:

$$
u_x=2x
$$

$$
u_y=-2y
$$

Then I compute the partial derivatives of $v$:

$$
v_x=2y
$$

$$
v_y=2x
$$

Now I check the Cauchy–Riemann equations.

The first equation is:

$$
u_x=v_y
$$

Since

$$
u_x=2x
$$

and

$$
v_y=2x
$$

the first equation holds.

The second equation is:

$$
u_y=-v_x
$$

Since

$$
u_y=-2y
$$

and

$$
-v_x=-2y
$$

the second equation also holds.

Therefore,

$$
f(z)=z^2
$$

is an analytic function.

---

# 5. What Is a Harmonic Function?

A harmonic function is a function that satisfies Laplace’s equation.

If a two-variable function $u(x,y)$ satisfies

$$
\Delta u=u_{xx}+u_{yy}=0
$$

then it is called harmonic.

This equation is very important because it appears in many physical problems, such as:

* steady-state heat conduction
* electrostatic potential
* gravitational potential
* ideal fluid flow
* real and imaginary parts of analytic functions in complex analysis

Intuitively, Laplace’s equation describes an equilibrium state.

For example, in a steady-state temperature distribution, if there is no heat source and no heat sink, the temperature satisfies:

$$
u_{xx}+u_{yy}=0
$$

---

# 6. Why Is $u(x,y)=x^2-y^2$ Harmonic?

I compute:

$$
u(x,y)=x^2-y^2
$$

First, differentiate twice with respect to $x$:

$$
u_x=2x
$$

$$
u_{xx}=2
$$

Then differentiate twice with respect to $y$:

$$
u_y=-2y
$$

$$
u_{yy}=-2
$$

Therefore,

$$
u_{xx}+u_{yy}=2+(-2)=0
$$

So

$$
\Delta u=0
$$

This means that

$$
u(x,y)=x^2-y^2
$$

is a harmonic function.

---

# 7. An Important Conclusion from Complex Analysis

If

$$
f(z)=u(x,y)+iv(x,y)
$$

is an analytic function, then both $u$ and $v$ are harmonic functions.

That is,

$$
\Delta u=0
$$

and

$$
\Delta v=0
$$

This shows that complex analysis and Laplace’s equation are deeply connected.

This is the most important mathematical idea behind my project:

> The real and imaginary parts of an analytic function naturally produce solutions to Laplace’s equation.

---

# 8. What Is a Harmonic Conjugate?

If $u(x,y)$ and $v(x,y)$ can be combined to form an analytic function

$$
f(z)=u(x,y)+iv(x,y),
$$

then $v$ is called a harmonic conjugate of $u$.

In this example,

$$
u(x,y)=x^2-y^2
$$

and

$$
v(x,y)=2xy
$$

satisfy the Cauchy–Riemann equations. Therefore,

$$
v(x,y)=2xy
$$

is the harmonic conjugate of

$$
u(x,y)=x^2-y^2.
$$

---

# 9. Why Use a PINN in This Project?

A standard neural network is usually trained with many data points:

$$
(x_i,y_i) \mapsto u_i
$$

The model learns the relationship between inputs and outputs.

However, a PINN does not rely only on data. It also puts the governing equation into the loss function.

PINN stands for:

$$
\text{Physics-Informed Neural Network}
$$

The idea is:

> The neural network should not simply guess the answer. It should also obey a physical or mathematical law.

In this project, I require the neural-network solution $\hat{u}_\theta(x,y)$ to satisfy:

$$
\hat{u}*{xx}+\hat{u}*{yy}\approx 0
$$

This means that the neural network should approximate a solution to Laplace’s equation.

---

# 10. Two Types of Training Points in the PINN

## 10.1 Interior Points

Interior points are points inside the domain.

For example, in the square domain

$$
[-1,1]\times[-1,1],
$$

many points are randomly sampled inside the square.

At these points, I require:

$$
\hat{u}*{xx}(x_i,y_i)+\hat{u}*{yy}(x_i,y_i)\approx 0
$$

This means that the neural network is forced to satisfy Laplace’s equation inside the domain.

---

## 10.2 Boundary Points

Boundary points are points on the edge of the domain.

Since I know the exact solution is

$$
u(x,y)=x^2-y^2,
$$

I require the neural-network prediction on the boundary to be close to the true value:

$$
\hat{u}*\theta(x_j,y_j)\approx u*{\text{exact}}(x_j,y_j)
$$

That is,

$$
\hat{u}_\theta(x_j,y_j)\approx x_j^2-y_j^2
$$

---

# 11. The PINN Loss Function

The total loss of a PINN usually has two parts:

$$
\mathcal{L}_{\text{total}}
==========================

\mathcal{L}*{\text{PDE}}
+
\mathcal{L}*{\text{BC}}
$$

Here,

$$
\mathcal{L}_{\text{PDE}}
$$

is the PDE residual loss. It penalizes the neural network when it does not satisfy Laplace’s equation.

Meanwhile,

$$
\mathcal{L}_{\text{BC}}
$$

is the boundary condition loss. It penalizes the neural network when it does not match the exact boundary values.

---

## 11.1 PDE Loss

$$
\mathcal{L}_{\text{PDE}}
========================

\frac{1}{N}
\sum_{i=1}^{N}
\left(
\hat{u}*{xx}(x_i,y_i)+\hat{u}*{yy}(x_i,y_i)
\right)^2
$$

This term means that, at every interior point, I compute:

$$
\hat{u}*{xx}+\hat{u}*{yy}
$$

If this value is not close to 0, the model is penalized.

This is because Laplace’s equation requires it to be 0.

---

## 11.2 Boundary Loss

$$
\mathcal{L}_{\text{BC}}
=======================

\frac{1}{M}
\sum_{j=1}^{M}
\left(
\hat{u}*{\theta}(x_j,y_j)-u*{\text{exact}}(x_j,y_j)
\right)^2
$$

This term means that, at every boundary point, I compare

$$
\hat{u}_{\theta}(x_j,y_j)
$$

with

$$
u_{\text{exact}}(x_j,y_j).
$$

The larger the difference is, the larger the loss becomes.

---

# 12. Why Can a PINN Learn Without Knowing the Answer Everywhere?

Supervised learning usually requires many labeled data points.

The idea of a PINN is different.

I do not need to know the correct answer at every point.
I only need to know:

1. what equation the function must satisfy inside the domain
2. what values the function must take on the boundary

Then the model can be trained.

In this project, the neural network learns from two constraints.

Inside the domain:

$$
u_{xx}+u_{yy}=0
$$

On the boundary:

$$
u=x^2-y^2
$$

This is why PINNs are useful for scientific problems governed by differential equations.

---

# 13. What Is Automatic Differentiation?

In a PINN, I need to compute derivatives of the neural-network output, such as:

$$
\hat{u}_x
$$

$$
\hat{u}_{xx}
$$

$$
\hat{u}_{yy}
$$

These derivatives are not computed by hand. They are computed by automatic differentiation.

Since the neural network itself is a differentiable function, PyTorch can automatically compute:

$$
\frac{\partial \hat{u}}{\partial x}
$$

$$
\frac{\partial^2 \hat{u}}{\partial x^2}
$$

$$
\frac{\partial^2 \hat{u}}{\partial y^2}
$$

This is the key reason why a PINN can include a PDE inside the loss function.

---

# 14. How to Read the Training Result

During training, I plot the loss curves.

If the loss decreases, it means that the model is learning to:

1. satisfy Laplace’s equation
2. match the boundary condition

Usually, I look at three curves:

$$
\mathcal{L}_{\text{total}}
$$

$$
\mathcal{L}_{\text{PDE}}
$$

$$
\mathcal{L}_{\text{BC}}
$$

If these losses decrease as the number of epochs increases, it indicates that the training is successful.

---

# 15. How to Compare the PINN with the Exact Solution

Since the exact solution in this project is known:

$$
u_{\text{exact}}(x,y)=x^2-y^2,
$$

I can directly compare

$$
\hat{u}_\theta(x,y)
$$

with

$$
u_{\text{exact}}(x,y).
$$

I can visualize:

1. the exact solution
2. the PINN prediction
3. the absolute error

The absolute error is:

$$
|\hat{u}*\theta-u*{\text{exact}}|
$$

If the error is small, it means that the PINN has learned the function well.

---

# 16. What Does the Cross-Section Plot Show?

Two-dimensional plots can sometimes make small differences difficult to see. Therefore, I can take a one-dimensional slice, for example:

$$
y=0
$$

On this line,

$$
u(x,0)=x^2-0^2=x^2
$$

So the exact solution becomes:

$$
u(x,0)=x^2
$$

Then I plot the PINN prediction and $x^2$ on the same graph.

If the two curves almost overlap, it means that the model predicts well along this cross-section.

---

# 17. What Does Error Analysis Show?

Error analysis studies:

$$
|\hat{u}*\theta(x,y)-u*{\text{exact}}(x,y)|
$$

This tells me where the model performs well and where it performs less accurately.

Usually, a PINN may have slightly larger errors near boundaries or corners, because these regions can be more sensitive.

If the overall error is small, it means that the model successfully approximates the harmonic function.

---

# 18. Why Check the Cauchy–Riemann Structure?

I do not only want to know:

> Does the PINN match the values of the exact solution?

I also want to know:

> Does the learned function preserve the structure of complex analysis?

If the neural network has learned a function that is truly close to the real part of an analytic function, then its derivative relationships should also be close to the Cauchy–Riemann structure.

For example:

$$
u_x=v_y
$$

$$
u_y=-v_x
$$

This means that I am not only doing surface-level curve fitting. I am also checking a deeper mathematical structure.

---

# 19. What Is Domain Coloring?

Domain coloring is a method for visualizing complex functions.

A complex function has a complex output:

$$
w=f(z)
$$

A complex number contains two important pieces of information:

1. magnitude:

$$
|w|
$$

2. argument:

$$
\arg(w)
$$

In domain coloring, hue usually represents the angle $\arg(w)$, while brightness represents the magnitude $|w|$.

---

# 20. How to Read the Domain Coloring of $f(z)=z^2$

A complex number can be written in polar form:

$$
z=re^{i\theta}
$$

Then

$$
z^2=r^2e^{i2\theta}
$$

This shows two things.

First, the radius is squared:

$$
r\mapsto r^2
$$

Second, the angle is doubled:

$$
\theta\mapsto 2\theta
$$

Therefore, $f(z)=z^2$ doubles angles in the complex plane. This produces a clear color pattern in the domain-coloring visualization.

---

# 21. Why Can This Be Connected to Fluid Flow?

In ideal two-dimensional fluid flow, a potential function and a stream function can be used to describe the flow.

In this example,

$$
\phi(x,y)=x^2-y^2
$$

can be interpreted as a velocity potential.

Meanwhile,

$$
\psi(x,y)=2xy
$$

can be interpreted as a stream function.

Together, they form:

$$
f(z)=\phi+i\psi
$$

This has the same structure as an analytic function in complex analysis.

---

# 22. Why Are Equipotential Lines and Streamlines Orthogonal?

For an analytic function, the level curves of the real part $u$ and the level curves of the imaginary part $v$ are usually orthogonal.

That is,

$$
u(x,y)=c_1
$$

and

$$
v(x,y)=c_2
$$

usually intersect at right angles.

The reason behind this is the Cauchy–Riemann equations.

In fluid mechanics, this means that equipotential lines and streamlines are orthogonal.

Therefore, complex analysis is not only an abstract theory. It can also describe physical flow fields.

---

# 23. The Full Logic of This Project

The project can be understood as a complete chain of ideas.

Starting from

$$
f(z)=z^2,
$$

I obtain:

$$
u(x,y)=x^2-y^2
$$

The function $u$ satisfies:

$$
\Delta u=0
$$

Therefore, it is an exact solution of Laplace’s equation.

Next, I train a PINN:

$$
\hat{u}_\theta(x,y)
$$

so that it satisfies:

$$
\hat{u}*{xx}+\hat{u}*{yy}\approx 0
$$

and also matches the boundary condition:

$$
u=x^2-y^2
$$

Finally, I compare

$$
\hat{u}_\theta
$$

with

$$
u_{\text{exact}}
$$

to check whether the error is small.

---

# 24. The Core Idea of This Project

The core of this project is not simply using AI to make visualizations.

The core idea is:

> I use a neural network to learn a function governed by a mathematical equation, and then I use complex analysis to verify whether the learned function preserves the expected structure.

In other words, the project has three layers.

The first layer is complex analysis:

The real and imaginary parts of analytic functions are harmonic functions.

The second layer is PDE theory:

Harmonic functions satisfy Laplace’s equation.

The third layer is AI for Science:

A neural network can learn this function through a PDE residual and a boundary condition.

---

# 25. Project Value and Key Understanding

This project presents a learning path from pure mathematics to AI for Science.

I start from the complex-analysis function

$$
f(z)=z^2
$$

and obtain a harmonic solution to Laplace’s equation:

$$
u(x,y)=x^2-y^2
$$

Then I use a PINN to learn this solution and use error analysis to compare the neural-network prediction with the exact solution.

At the same time, I use Cauchy–Riemann verification to check whether the learned function preserves the derivative structure from complex analysis. I also use domain coloring to observe the geometric transformation of complex functions, and potential flow to connect the same mathematics to physical interpretation.

Therefore, the value of this project is not only that a neural network can reproduce a figure. The value is that it connects complex analysis, Laplace’s equation, PINNs, error analysis, complex-function visualization, and physical intuition into one coherent learning system.
