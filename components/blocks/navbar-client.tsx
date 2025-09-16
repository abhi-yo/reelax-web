"use client";

import { useEffect, useState } from "react";

export default function NavbarClient() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 backdrop-blur-md supports-[backdrop-filter]:bg-white/50 bg-white/70 transition-[border-color,box-shadow,background-color] duration-200 ${
        scrolled ? "border-b border-black/10 shadow-[0_1px_0_rgba(0,0,0,0.06)] supports-[backdrop-filter]:bg-white/70 bg-white/80" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2 select-none">
          <span className="text-[15px] tracking-[-0.01em] font-semibold">Reelax</span>
        </div>
        
        <div className="flex items-center gap-4">
          <nav className="hidden sm:flex items-center gap-6 text-[13px]">
            <a href="#features" className="hover:underline">Features</a>
            <a href="#how" className="hover:underline">How it works</a>
            <a href="#faq" className="hover:underline">FAQ</a>
          </nav>
          
          <div className="flex items-center gap-3">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 hover:bg-black/5 rounded-md transition-colors duration-200"
              aria-label="Follow us on Twitter"
            >
              <TwitterIcon />
            </a>
            <a
              href="#cta"
              className="px-3 py-1.5 text-[13px] font-medium border border-black bg-[var(--accent)] text-white hover:bg-white hover:text-black transition-all duration-200 rounded-md"
            >
              Add to Chrome
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="size-4">
      <path
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        fill="currentColor"
      />
    </svg>
  );
}
