'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <main className={`min-h-[100dvh] relative overflow-hidden bg-gradient-to-b from-[#fff8f5] to-[#fff4ef]/30 transition-opacity duration-200 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
      {/* Enhanced decorative background elements */}
      <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-[#ffe0cc]/35 rounded-full blur-[160px] transform translate-x-1/3 -translate-y-1/3 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-[900px] h-[900px] bg-primary/[0.06] rounded-full blur-[160px] transform -translate-x-1/3 translate-y-1/3 animate-pulse-slower"></div>
      
      {/* Decorative stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" style={{ zIndex: 1 }}>
        {/* Stars - First Layer (Brighter) */}
        <div className="absolute top-[25%] left-[20%] w-4 h-4 animate-pulse-slow hidden sm:block">
          <svg viewBox="0 0 24 24" className="w-full h-full fill-[#ffb366]/40 drop-shadow-[0_0_12px_rgba(255,179,102,0.2)]">
            <path d="M12 2L9.1 9.1L2 12L9.1 14.9L12 22L14.9 14.9L22 12L14.9 9.1L12 2Z" />
          </svg>
        </div>
        <div className="absolute top-[15%] left-[35%] w-5 h-5 animate-pulse-slower">
          <svg viewBox="0 0 24 24" className="w-full h-full fill-[#ffb366]/40 drop-shadow-[0_0_12px_rgba(255,179,102,0.2)]">
            <path d="M12 2L9.1 9.1L2 12L9.1 14.9L12 22L14.9 14.9L22 12L14.9 9.1L12 2Z" />
          </svg>
        </div>
        <div className="absolute top-[45%] left-[15%] w-4 h-4 animate-pulse-slower hidden sm:block">
          <svg viewBox="0 0 24 24" className="w-full h-full fill-[#ffb366]/40 drop-shadow-[0_0_12px_rgba(255,179,102,0.2)]">
            <path d="M12 2L9.1 9.1L2 12L9.1 14.9L12 22L14.9 14.9L22 12L14.9 9.1L12 2Z" />
          </svg>
        </div>
        <div className="absolute top-[30%] right-[25%] w-5 h-5 animate-pulse-slow hidden sm:block">
          <svg viewBox="0 0 24 24" className="w-full h-full fill-[#ffb366]/40 drop-shadow-[0_0_12px_rgba(255,179,102,0.2)]">
            <path d="M12 2L9.1 9.1L2 12L9.1 14.9L12 22L14.9 14.9L22 12L14.9 9.1L12 2Z" />
          </svg>
        </div>
        <div className="absolute top-[60%] right-[20%] w-4 h-4 animate-pulse-slower hidden sm:block">
          <svg viewBox="0 0 24 24" className="w-full h-full fill-[#ffb366]/40 drop-shadow-[0_0_12px_rgba(255,179,102,0.2)]">
            <path d="M12 2L9.1 9.1L2 12L9.1 14.9L12 22L14.9 14.9L22 12L14.9 9.1L12 2Z" />
          </svg>
        </div>
        <div className="absolute top-[75%] left-[30%] w-5 h-5 animate-pulse-slow hidden sm:block">
          <svg viewBox="0 0 24 24" className="w-full h-full fill-[#ffb366]/40 drop-shadow-[0_0_12px_rgba(255,179,102,0.2)]">
            <path d="M12 2L9.1 9.1L2 12L9.1 14.9L12 22L14.9 14.9L22 12L14.9 9.1L12 2Z" />
          </svg>
        </div>
        <div className="absolute top-[40%] right-[40%] w-4 h-4 animate-pulse-slow hidden sm:block">
          <svg viewBox="0 0 24 24" className="w-full h-full fill-[#ffb366]/40 drop-shadow-[0_0_12px_rgba(255,179,102,0.2)]">
            <path d="M12 2L9.1 9.1L2 12L9.1 14.9L12 22L14.9 14.9L22 12L14.9 9.1L12 2Z" />
          </svg>
        </div>
        
        {/* Stars - Second Layer */}
        <div className="absolute top-[20%] left-[45%] w-3 h-3 animate-pulse-slower hidden sm:block">
          <svg viewBox="0 0 24 24" className="w-full h-full fill-[#ffb366]/30 drop-shadow-[0_0_10px_rgba(255,179,102,0.15)]">
            <path d="M12 2L9.1 9.1L2 12L9.1 14.9L12 22L14.9 14.9L22 12L14.9 9.1L12 2Z" />
          </svg>
        </div>
        <div className="absolute top-[85%] left-[25%] w-3 h-3 animate-pulse-slow">
          <svg viewBox="0 0 24 24" className="w-full h-full fill-[#ffb366]/30 drop-shadow-[0_0_10px_rgba(255,179,102,0.15)]">
            <path d="M12 2L9.1 9.1L2 12L9.1 14.9L12 22L14.9 14.9L22 12L14.9 9.1L12 2Z" />
          </svg>
        </div>
        <div className="absolute top-[35%] right-[15%] w-3 h-3 animate-pulse-slower hidden sm:block">
          <svg viewBox="0 0 24 24" className="w-full h-full fill-[#ffb366]/30 drop-shadow-[0_0_10px_rgba(255,179,102,0.15)]">
            <path d="M12 2L9.1 9.1L2 12L9.1 14.9L12 22L14.9 14.9L22 12L14.9 9.1L12 2Z" />
          </svg>
        </div>
        <div className="absolute top-[80%] right-[35%] w-3 h-3 animate-pulse-slow">
          <svg viewBox="0 0 24 24" className="w-full h-full fill-[#ffb366]/30 drop-shadow-[0_0_10px_rgba(255,179,102,0.15)]">
            <path d="M12 2L9.1 9.1L2 12L9.1 14.9L12 22L14.9 14.9L22 12L14.9 9.1L12 2Z" />
          </svg>
        </div>
        <div className="absolute top-[50%] right-[30%] w-3 h-3 animate-pulse-slower hidden sm:block">
          <svg viewBox="0 0 24 24" className="w-full h-full fill-[#ffb366]/30 drop-shadow-[0_0_10px_rgba(255,179,102,0.15)]">
            <path d="M12 2L9.1 9.1L2 12L9.1 14.9L12 22L14.9 14.9L22 12L14.9 9.1L12 2Z" />
          </svg>
        </div>
      </div>
      
      {/* Logo Header with subtle animation */}
      <div className="absolute -top-6 sm:-top-8 left-0 right-0 mb-8 sm:mb-0 animate-fade-in" style={{ zIndex: 2 }}>
        <div className="max-w-4xl mx-auto flex items-center justify-center">
          <div className="relative w-[500px] h-[166px] sm:w-[600px] sm:h-[200px] transition-transform duration-300 hover:scale-105">
            <Image
              src="/logo1.png?v=4"
              alt="RM:DN Logo"
              fill
              priority
              sizes="(max-width: 640px) 500px, 600px"
              className="object-contain"
              quality={100}
            />
          </div>
        </div>
      </div>

      {/* Main Content with enhanced layout and animations */}
      <div className="max-w-lg mx-auto px-6 relative z-10 flex flex-col items-center min-h-[100dvh]" style={{ zIndex: 2 }}>
        <div className="flex-[1]" />
        <div className="text-center mb-auto space-y-12 animate-fade-in-up">
          <div className="space-y-3">
            <h1 className="text-[2rem] sm:text-[2.25rem] text-foreground/90 text-shadow font-medium leading-tight">
              Ramadan Prayer Times
            </h1>
            <p className="text-foreground/70 text-lg sm:text-xl max-w-sm mx-auto leading-relaxed">
              One minute left for suhoor?
              <br />
              <span className="text-primary/90 font-medium">Don't spend it watching ads.</span>
            </p>
          </div>

          {/* City Selection Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center bg-primary/90 backdrop-blur-lg rounded-[1.125rem] border border-primary/10 shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:bg-primary hover:scale-[1.02] transition-all duration-300 px-7 py-3 group"
            >
              <span className="text-white text-[0.9375rem] font-medium mr-2">Choose Your City</span>
              <svg 
                className={`w-3.5 h-3.5 text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 animate-fade-in">
                <div className="bg-[#fff8f5]/95 backdrop-blur-lg rounded-[1.125rem] border border-primary/10 shadow-[0_8px_24px_rgba(0,0,0,0.08)] overflow-hidden">
                  <Link 
                    href="/times/los-angeles"
                    className="block px-7 py-3 text-[0.9375rem] text-foreground/90 hover:bg-primary/10 transition-colors"
                  >
                    Los Angeles
                  </Link>
      <Link 
                    href="/times/new-york"
                    className="block px-7 py-3 text-[0.9375rem] text-foreground/90 hover:bg-primary/10 transition-colors"
      >
                    New York City
      </Link>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex-1" />
        
        {/* Footer text */}
        <div className="text-center pb-6 text-sm text-foreground/40 animate-fade-in">
          Ramadan 2025 • 1446 Hijri
        </div>
      </div>

      {/* Additional Mobile Stars */}
      <div className="absolute bottom-[35%] left-[12%] w-4 h-4 animate-[pulse_4s_ease-in-out_infinite] motion-safe:animate-float-slow sm:hidden">
        <svg viewBox="0 0 24 24" className="w-full h-full fill-[#ffb366]/[0.45] drop-shadow-[0_0_18px_rgba(255,179,102,0.35)] transition-all duration-300">
          <path d="M12 2L9.1 9.1L2 12L9.1 14.9L12 22L14.9 14.9L22 12L14.9 9.1L12 2Z" />
        </svg>
      </div>
      <div className="absolute bottom-[45%] right-[15%] w-3.5 h-3.5 animate-[pulse_5s_ease-in-out_infinite] motion-safe:animate-float-slower sm:hidden">
        <svg viewBox="0 0 24 24" className="w-full h-full fill-[#ffb366]/[0.4] drop-shadow-[0_0_15px_rgba(255,179,102,0.3)] transition-all duration-300">
          <path d="M12 2L9.1 9.1L2 12L9.1 14.9L12 22L14.9 14.9L22 12L14.9 9.1L12 2Z" />
        </svg>
      </div>
      <div className="absolute bottom-[20%] left-[25%] w-3 h-3 animate-[pulse_6s_ease-in-out_infinite] motion-safe:animate-float-slowest sm:hidden">
        <svg viewBox="0 0 24 24" className="w-full h-full fill-[#ffb366]/[0.35] drop-shadow-[0_0_12px_rgba(255,179,102,0.25)] transition-all duration-300">
          <path d="M12 2L9.1 9.1L2 12L9.1 14.9L12 22L14.9 14.9L22 12L14.9 9.1L12 2Z" />
        </svg>
      </div>
      <div className="absolute bottom-[25%] right-[28%] w-3.5 h-3.5 animate-[pulse_4.5s_ease-in-out_infinite] motion-safe:animate-float-medium sm:hidden">
        <svg viewBox="0 0 24 24" className="w-full h-full fill-[#ffb366]/[0.38] drop-shadow-[0_0_14px_rgba(255,179,102,0.28)] transition-all duration-300">
          <path d="M12 2L9.1 9.1L2 12L9.1 14.9L12 22L14.9 14.9L22 12L14.9 9.1L12 2Z" />
        </svg>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(3px, -3px); }
          50% { transform: translate(-2px, -5px); }
          75% { transform: translate(-4px, -2px); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(-3px, -4px); }
          66% { transform: translate(2px, -6px); }
        }
        @keyframes float-slowest {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-2px, -3px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(2px, -4px); }
          75% { transform: translate(-3px, -2px); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float-slower 12s ease-in-out infinite;
        }
        .animate-float-slowest {
          animation: float-slowest 10s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 9s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
} 