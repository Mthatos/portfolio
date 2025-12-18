import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';

/**
 * MatrixRain Component
 * 
 * Renders a subtle, professional Matrix-style background animation using HTML5 Canvas.
 * - Optimized for performance (throttled FPS)
 * - Accessibility support (reduced motion check, pause button)
 * - Configurable visuals (density, speed, colors)
 */
export const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Initialize state based on user's reduced motion preference for accessibility
  // If the user prefers reduced motion, the animation starts paused.
  const [isPlaying, setIsPlaying] = useState(() => {
    if (typeof window !== 'undefined') {
      return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return true;
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // --- Configuration Variables ---
    const CONFIG = {
      // Characters to display (Classic Matrix mix: Katakana + Latin + Numbers)
      CHARS: 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      FONT_SIZE: 16,
      FONT_FAMILY: "'VT323', monospace",
      COLOR: '#10b981', // Muted Emerald Green for professional look
      FPS: 20,           // Low FPS for an ambient, non-distracting feel
      // Fade opacity controls trail length. 
      // Higher = shorter trails, Lower = longer trails.
      // Color must match the main background (slate-900 / #0f172a)
      TRAIL_FADE: 'rgba(15, 23, 42, 0.12)', 
      DENSITY_THRESHOLD: 0.98, // Higher = fewer drops (0 to 1). 0.98 is very sparse.
      OPACITY_VARIANCE: true   // Whether to vary character opacity for depth
    };

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Set canvas size and reset context properties
    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      // Re-apply font setting after resize clears context
      ctx.font = `${CONFIG.FONT_SIZE}px ${CONFIG.FONT_FAMILY}`;
    };
    
    // Initial setup
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Initialize columns
    const columns = Math.floor(width / CONFIG.FONT_SIZE);
    // Array to track the y-coordinate of each column's drop
    const drops: number[] = new Array(columns).fill(1);

    // Animation Loop Control
    let animationFrameId: number;
    let lastTime = 0;
    const interval = 1000 / CONFIG.FPS;

    const draw = (currentTime: number) => {
      if (!isPlaying) return;

      animationFrameId = requestAnimationFrame(draw);

      // Throttling for FPS control to ensure smooth but slow animation
      const deltaTime = currentTime - lastTime;
      if (deltaTime < interval) return;

      lastTime = currentTime - (deltaTime % interval);

      // 1. Create fading trail effect
      // We draw a semi-transparent rectangle over the whole canvas
      // tailored to the background color to make old characters fade out slowly
      ctx.fillStyle = CONFIG.TRAIL_FADE;
      ctx.fillRect(0, 0, width, height);

      // 2. Prepare text style
      ctx.fillStyle = CONFIG.COLOR;
      ctx.font = `${CONFIG.FONT_SIZE}px ${CONFIG.FONT_FAMILY}`;

      // 3. Draw characters
      for (let i = 0; i < drops.length; i++) {
        // Randomly skip columns to create "rain" effect and reduce density
        // This keeps the screen from becoming too cluttered
        if (Math.random() > CONFIG.DENSITY_THRESHOLD) {
             drops[i]++;
             continue;
        }

        const text = CONFIG.CHARS.charAt(Math.floor(Math.random() * CONFIG.CHARS.length));
        
        // Optional: Vary opacity for depth texture
        if (CONFIG.OPACITY_VARIANCE) {
          ctx.globalAlpha = Math.random() * 0.5 + 0.5;
        }
        
        ctx.fillText(text, i * CONFIG.FONT_SIZE, drops[i] * CONFIG.FONT_SIZE);
        
        ctx.globalAlpha = 1.0; // Reset opacity

        // 4. Reset drops to top
        // Randomly send drop back to top after it crosses the screen height
        // Adding randomness (> 0.99) to the reset ensures columns don't look like repeating patterns
        if (drops[i] * CONFIG.FONT_SIZE > height && Math.random() > 0.99) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    if (isPlaying) {
      animationFrameId = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isPlaying]);

  return (
    <>
      {/* Canvas positioned behind everything with low opacity */}
      <canvas 
        ref={canvasRef} 
        className="fixed top-0 left-0 w-full h-full -z-20 opacity-[0.25] pointer-events-none" 
        aria-hidden="true"
      />
      
      {/* Play/Pause Control for Accessibility */}
      <button 
        onClick={() => setIsPlaying(!isPlaying)}
        className="fixed bottom-4 left-4 z-40 p-2 text-slate-400 hover:text-emerald-400 transition-colors bg-slate-900/90 backdrop-blur rounded-full border border-slate-700 hover:border-emerald-500/50 shadow-lg"
        title={isPlaying ? "Pause Background Animation" : "Play Background Animation"}
        aria-label={isPlaying ? "Pause Background Animation" : "Play Background Animation"}
      >
        {isPlaying ? <Pause size={16} /> : <Play size={16} />}
      </button>
    </>
  );
};