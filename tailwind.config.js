/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        ink: '#08111f',
        panel: '#101b2b',
        cyanline: '#55d6ff',
        coral: '#ff7a70',
        gold: '#ffd166',
        mint: '#67e8a5',
      },
      boxShadow: {
        glow: '0 0 30px rgba(85, 214, 255, 0.18)',
      },
    },
  },
  plugins: [],
};
