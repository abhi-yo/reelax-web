"use client";

import { useEffect, useState } from "react";

export default function NavbarClient() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["features", "how", "faq"];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0.1 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const linkBase =
    "relative transition-colors text-[14px] sm:text-[15px] text-slate-700 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10 focus-visible:ring-offset-2 focus-visible:ring-offset-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-slate-900 after:transition-opacity";

  return (
    <header className="fixed top-[env(safe-area-inset-top)] inset-x-0 z-40 pointer-events-none" aria-label="Primary">
      <div
        className={
          `pointer-events-auto flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? "mx-auto mt-4 sm:mt-5 w-fit gap-10 rounded-full border border-slate-200/80 bg-white/80 px-6 sm:px-7 py-2.5 shadow-lg backdrop-blur-xl ring-1 ring-black/5 supports-[backdrop-filter]:bg-white/60"
              : "mx-auto max-w-[1120px] px-6 sm:px-8 h-16 w-full"
          }`
        }
      >
        <a href="/" className="flex items-center gap-2 select-none">
          <span className="text-[15px] sm:text-[16px] font-medium tracking-[-0.01em] text-slate-900">Reelax</span>
        </a>

        <nav className={`flex items-center ${scrolled ? "gap-9" : "gap-9"}`}>
          <a
            href="#features"
            className={`${linkBase} ${active === "features" ? "text-slate-900 after:opacity-100" : "after:opacity-0"}`}
            aria-current={active === "features" ? "page" : undefined}
          >
            Features
          </a>
          <a
            href="#how"
            className={`${linkBase} ${active === "how" ? "text-slate-900 after:opacity-100" : "after:opacity-0"}`}
            aria-current={active === "how" ? "page" : undefined}
          >
            How it works
          </a>
          <a
            href="#faq"
            className={`${linkBase} ${active === "faq" ? "text-slate-900 after:opacity-100" : "after:opacity-0"}`}
            aria-current={active === "faq" ? "page" : undefined}
          >
            FAQ
          </a>
        </nav>
      </div>
    </header>
  );
}
