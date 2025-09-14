import NavbarClient from "@/components/blocks/navbar-client";
import FAQSectionClient from "@/components/blocks/faq-section-client";
export default function Home() {
  return (
    <div className="min-h-dvh grid grid-rows-[auto_1fr_auto]">
  {/* Header (fixed) */}
  <NavbarClient />

      {/* Main */}
  <main className="pt-14">
        {/* Hero */}
        <section className="bg-white">
          <div className="mx-auto max-w-[900px] px-4 sm:px-6 py-16 sm:py-24 text-center">
            <p className="mx-auto text-[13px] inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-2.5 py-1 text-black/70">
              Take back your time
            </p>
            <h1 className="font-serif-display mt-4 text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-[-0.02em]">
              The Chrome extension that <br/>helps you stop doomscrolling
            </h1>
            <p className="mx-auto mt-4 max-w-[62ch] text-[16px] leading-[1.7] text-black/70">
              Set gentle limits, add intentional friction, and focus on what matters. No accounts. No tracking. Just better habits.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a id="cta" href="#" className="px-4 py-2 text-[14px] font-medium border border-black bg-[var(--accent)] text-white hover:bg-white hover:text-black transition-colors rounded-md">
                Add to Chrome — Free
              </a>
              <a href="#how" className="px-4 py-2 text-[14px] font-medium border border-black bg-white hover:bg-black hover:text-white transition-colors rounded-md">
                How it works
              </a>
            </div>
            <div className="mt-3 text-[12px] text-black/60">Free • No account • Private</div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="border-y border-black/10 bg-white scroll-mt-24">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="order-2 lg:order-1">
              <h2 className="text-xl font-semibold tracking-[-0.01em]">Why Reelax</h2>
              <ul className="mt-6 grid gap-3 text-[14px] text-black/80">
                <li className="flex items-start gap-3">
                  <CheckIcon /> Mindful breaks at the right time
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon /> Minimalist overlay; no extra noise
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon /> No complex setup—install and go
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon /> Private by default; no accounts
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              {/* Overlay mock simplified */}
              <div className="border border-black bg-white p-6 shadow-[6px_6px_0_0_#000] max-w-[520px] rounded-xl">
                <div className="text-[13px] text-black/60 mb-3">On a feed… (12m elapsed)</div>
                <div className="border border-black bg-white p-5 text-left rounded-lg">
                  <div className="font-serif-display text-2xl leading-tight tracking-[-0.01em]">Time for a short break?</div>
                  <p className="mt-2 text-[14px] text-black/70">Stand up, breathe, grab water—then return with intention.</p>
                  <div className="mt-4 flex gap-3">
                    <button className="px-3 py-2 text-[14px] font-medium border border-black bg-[var(--accent)] text-white hover:bg-white hover:text-black transition-colors rounded-md">Take 2 minutes</button>
                    <button className="px-3 py-2 text-[14px] font-medium border border-black bg-white hover:bg-black hover:text-white transition-colors rounded-md">Remind me later</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="border-b border-black/10 bg-white scroll-mt-24">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 py-16 sm:py-24">
            <h2 className="text-xl font-semibold mb-6 tracking-[-0.01em]">How it works</h2>
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { n: 1, t: "Install", d: "Add Reelax from the Chrome Web Store." },
                { n: 2, t: "Set threshold", d: "Use the default or pick when the overlay should appear." },
                { n: 3, t: "Take mindful breaks", d: "When prompted, step away briefly and return with intention." },
              ].map((s) => (
                <li key={s.n} className="border border-black bg-white p-5 rounded-lg">
                  <div className="inline-flex items-center justify-center size-7 rounded-full border border-black bg-[var(--accent)] text-white text-[12px] font-semibold">
                    {s.n}
                  </div>
                  <h3 className="mt-3 text-[15px] font-semibold tracking-[-0.01em]">{s.t}</h3>
                  <p className="mt-1 text-[14px] leading-[1.6] text-black/70">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-white scroll-mt-24">
          <div className="mx-auto max-w-[900px] px-4 sm:px-6 py-16 sm:py-24">
            <h2 className="text-xl font-semibold mb-6 tracking-[-0.01em]">FAQ</h2>
            <FAQSectionClient
              items={[
                { q: "Will this block everything?", a: "No. Reelax adds friction and limits, but you stay in control. You can pause or allowlist when needed." },
                { q: "Does it work on mobile?", a: "Reelax is a desktop Chrome extension. Mobile support is on the roadmap via iOS/Android browsers that support extensions." },
                { q: "Is my data tracked?", a: "No. Settings are stored locally in your browser. We do not collect browsing data." },
              ]}
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/10 bg-white">
        <div className="mx-auto max-w-[1120px] px-4 sm:px-6 py-10">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 select-none">
                <div className="size-4 border border-black bg-white" aria-hidden />
                <span className="font-medium">Reelax</span>
              </div>
              <p className="text-[13px] text-black/60 max-w-[48ch]">Mindful breaks for endless feeds. Minimalist overlay. No complex setup.</p>
            </div>
            <div className="flex flex-col sm:items-end gap-3">
              <nav className="flex items-center gap-5 text-[13px]">
                <a href="#features" className="hover:underline">Features</a>
                <a href="#how" className="hover:underline">How it works</a>
                <a href="#faq" className="hover:underline">FAQ</a>
                <a href="#" className="hover:underline">Privacy</a>
              </nav>
              <a href="#cta" className="inline-flex px-3 py-1.5 text-[13px] font-medium border border-black bg-[var(--accent)] text-white hover:bg-white hover:text-black transition-colors rounded-md">Add to Chrome</a>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-black/10 flex items-center justify-between text-[12px] text-black/60">
            <span>© {new Date().getFullYear()} Reelax</span>
            <span>Built for mindful browsing</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="border border-black bg-white p-5 shadow-[6px_6px_0_0_#000] flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <BoxIcon />
        <h3 className="text-[15px] font-semibold tracking-[-0.01em]">{title}</h3>
      </div>
      <p className="text-[14px] leading-[1.6] text-black/70">{desc}</p>
    </div>
  );
}

// Faq details component replaced with animated client FAQSectionClient

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className="size-4">
      <path d="M16.667 5.833 8.333 14.167 5 10.833" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    </svg>
  );
}

function BoxIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="size-4">
      <rect x="3" y="3" width="18" height="18" stroke="currentColor" strokeWidth="2" />
      <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function PlusIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className={className}>
      <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function MinusIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className={className}>
      <path d="M4 10h12" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function ArrowRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className={className}>
      <path d="M4 10h10" stroke="currentColor" strokeWidth="2" />
      <path d="m10 6 4 4-4 4" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
