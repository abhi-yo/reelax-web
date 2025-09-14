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
          <div className="size-6 rounded border border-black bg-white" aria-hidden />
          <span className="text-[15px] tracking-[-0.01em] font-semibold">Reelax</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-[13px]">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#how" className="hover:underline">How it works</a>
          <a href="#faq" className="hover:underline">FAQ</a>
        </nav>
        <a
          href="#cta"
          className="px-3 py-1.5 text-[13px] font-medium border border-black bg-[var(--accent)] text-white hover:bg-white hover:text-black transition-colors rounded-md"
        >
          Add to Chrome
        </a>
      </div>
    </header>
  );
}
