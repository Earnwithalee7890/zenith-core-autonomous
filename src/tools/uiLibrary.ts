import { logger } from "../utils/logger.js";

/**
 * UILibrary - Provides pre-baked, high-quality UI configurations and templates
 */
export const uiLibrary = {
  /**
   * Get a premium Tailwind CSS configuration
   */
  getTailwindConfig: () => `
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
        },
        dark: {
          800: '#1e293b',
          900: '#0f172a',
          DEFAULT: '#020617',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
`,

  /**
   * Get a boilerplate for a modern index.html
   */
  getHtmlBoilerplate: (title: string) => `
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
      body { font-family: 'Inter', sans-serif; }
      .glass { background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); }
    </style>
  </head>
  <body class="bg-slate-950 text-slate-200">
    <div id="root"></div>
  </body>
</html>
`,

  /**
   * Get a modern Vite config
   */
  getViteConfig: () => `
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
`,

  /**
   * Get a premium Dashboard layout
   */
  getDashboardLayout: (title: string) => `
import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <aside className="fixed left-0 top-0 h-full w-64 glass p-6 hidden md:block">
        <h2 className="text-xl font-bold gradient-text mb-10">${title}</h2>
        <nav className="space-y-4">
          {['Overview', 'Analytics', 'Agents', 'Settings'].map(item => (
            <button key={item} className="w-full text-left p-3 rounded-xl hover:bg-white/5 transition-colors text-slate-400 hover:text-white">
              {item}
            </button>
          ))}
        </nav>
      </aside>
      <main className="md:ml-64 p-8">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="w-10 h-10 rounded-full bg-sky-500/20 border border-sky-500/50 flex items-center justify-center">
            <span className="text-sky-400 text-xs font-bold">Z</span>
          </div>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[1, 2, 3].map(i => (
            <div key={i} className="glass p-6 rounded-2xl">
              <h3 className="text-slate-500 text-sm mb-2">Metric 0{i}</h3>
              <p className="text-2xl font-bold">$10,000</p>
            </div>
          ))}
        </div>
        <div className="glass p-8 rounded-3xl min-h-[400px]">
          <h3 className="font-bold mb-6">Activity Feed</h3>
          <div className="space-y-6">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="flex gap-4 items-start border-b border-white/5 pb-4">
                <div className="w-2 h-2 rounded-full bg-sky-500 mt-2"></div>
                <div>
                  <p className="text-sm font-medium">New job accepted from Seedstr</p>
                  <p className="text-xs text-slate-500">2 minutes ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
`,

  /**
   * Get an interactive 'Lottie-like' CSS loading animation
   */
  getZenithAnimation: () => `
@keyframes zenithPulse {
  0% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.05); opacity: 0.8; }
  100% { transform: scale(1); opacity: 0.5; }
}

.zenith-loader {
  position: relative;
  width: 100px;
  height: 100px;
}

.zenith-loader::before, .zenith-loader::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(circle, #38bdf8 0%, transparent 70%);
  animation: zenithPulse 2s infinite ease-in-out;
}

.zenith-loader::after {
  animation-delay: -1s;
  background: radial-gradient(circle, #818cf8 0%, transparent 70%);
}
`
};

export default uiLibrary;
