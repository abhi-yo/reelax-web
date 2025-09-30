import FAQSectionClient from "@/components/blocks/faq-section-client";
import Testimonials from "@/components/ui/testimonials-columns-1";
import { FadeInUp, FadeIn } from "@/components/ui/scroll-animations";
import NavbarClient from "@/components/blocks/navbar-client";

export default function Home() {
  return (
    <div className="min-h-dvh grid grid-rows-[1fr_auto]">
      <NavbarClient />

      {/* Main */}
      <main className="pt-0">
        {/* Hero */}
        <section className="relative overflow-hidden min-h-[100svh] bg-white" role="banner">
          

          {/* Content */}
          <div className="mx-auto max-w-[980px] px-4 sm:px-6 min-h-[100svh] flex flex-col items-center justify-center text-center relative z-10">
            <FadeInUp delay={0.1}>
              <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                <div className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-[12px] text-slate-700 bg-white/80 backdrop-blur border border-slate-200 shadow-[0_1px_0_rgba(16,24,40,.04)]">
                  <span className="text-amber-500">★★★★★</span>
                  <span>5.0 on Chrome Store</span>
                </div>
                <div className="rounded-full px-3 py-1.5 text-[12px] text-slate-700 bg-white/80 backdrop-blur border border-slate-200 shadow-[0_1px_0_rgba(16,24,40,.04)]">
                  #8 Peerlist
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl leading-[1.06] tracking-[-0.02em] text-slate-900 mb-4 font-normal [text-wrap:balance]">
                The Chrome extension that helps you stop
                <span className="ml-2 align-baseline whitespace-nowrap rounded-md bg-rose-100/80 px-2 py-0.5 border border-rose-200 text-slate-900 shadow-[0_1px_0_rgba(0,0,0,0.02)]">doomscrolling</span>
              </h1>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <p className="mx-auto max-w-[60ch] text-[16px] leading-[1.7] text-slate-700/90 font-normal mb-7">
                Set gentle limits, add intentional friction, and focus on what matters.
                <span className="inline-block align-baseline bg-yellow-100/70 px-1.5 py-0.5 rounded-md text-slate-900 ml-2 font-normal">
                  No accounts. No tracking.
                </span>
                Just better habits.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
                <a
                  id="cta"
                  href="#"
                  className="px-5 py-2.5 rounded-xl text-[14px] font-medium text-white bg-black hover:bg-black/90 shadow-sm ring-1 ring-black/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:translate-y-px"
                >
                  Add to Chrome — Free
                </a>
                <a
                  href="#how"
                  className="px-5 py-2.5 rounded-xl text-[14px] font-medium text-slate-800 bg-white/80 backdrop-blur border border-slate-200 hover:bg-white/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:translate-y-px"
                >
                  How it works
                </a>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.5}>
              <div className="text-[12px] text-slate-700/80">Free • No account • Private</div>
            </FadeInUp>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="border-t border-slate-200/80 bg-white scroll-mt-24">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <FadeInUp className="order-2 lg:order-1">
              <div>
                <h2 className="text-xl font-semibold tracking-[-0.01em]">Why Reelax</h2>
                <ul className="mt-6 grid gap-3 text-[14px] text-black/80">
                  <FadeInUp delay={0.1}>
                    <li className="flex items-start gap-3">
                      <CheckIcon /> Mindful breaks at the right time
                    </li>
                  </FadeInUp>
                  <FadeInUp delay={0.2}>
                    <li className="flex items-start gap-3">
                      <CheckIcon /> Minimalist overlay; no extra noise
                    </li>
                  </FadeInUp>
                  <FadeInUp delay={0.3}>
                    <li className="flex items-start gap-3">
                      <CheckIcon /> No complex setup—install and go
                    </li>
                  </FadeInUp>
                  <FadeInUp delay={0.4}>
                    <li className="flex items-start gap-3">
                      <CheckIcon /> Private by default; no accounts
                    </li>
                  </FadeInUp>
                </ul>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.2} className="order-1 lg:order-2">
              <div>
                {/* Overlay mock - modern soft card */}
                <div className="border border-slate-200 bg-white/90 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-shadow max-w-[560px] rounded-2xl">
                  <div className="text-[13px] text-black/60 mb-3">On a feed… (12m elapsed)</div>
                  <div className="border border-slate-200 bg-white p-5 text-left rounded-xl shadow-sm">
                    <div className="font-serif-display text-2xl leading-tight tracking-[-0.01em]">Time for a short break?</div>
                    <p className="mt-2 text-[14px] text-black/70">Stand up, breathe, grab water—then return with intention.</p>
                    <div className="mt-4 flex gap-3">
                      <button className="px-3 py-2 text-[14px] font-medium bg-[var(--accent)] text-white hover:opacity-90 transition-colors rounded-md">Take 2 minutes</button>
                      <button className="px-3 py-2 text-[14px] font-medium border border-slate-200 bg-white hover:bg-slate-50 transition-colors rounded-md">Remind me later</button>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="bg-white scroll-mt-24">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 py-16 sm:py-24">
            <FadeInUp>
              <h2 className="text-xl font-semibold mb-6 tracking-[-0.01em]">How it works</h2>
            </FadeInUp>
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { n: 1, t: "Install", d: "Add Reelax from the Chrome Web Store." },
                { n: 2, t: "Set threshold", d: "Use the default or pick when the overlay should appear." },
                { n: 3, t: "Take mindful breaks", d: "When prompted, step away briefly and return with intention." },
              ].map((s, index) => (
                <FadeInUp key={s.n} delay={index * 0.2}>
                  <li className="border border-slate-200 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="inline-flex items-center justify-center size-7 rounded-full bg-[var(--accent)] text-white text-[12px] font-semibold ring-1 ring-slate-200">
                      {s.n}
                    </div>
                    <h3 className="mt-3 text-[15px] font-semibold tracking-[-0.01em]">{s.t}</h3>
                    <p className="mt-1 text-[14px] leading-[1.6] text-black/80 font-medium">{s.d}</p>
                  </li>
                </FadeInUp>
              ))}
            </ol>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ */}
        <section id="faq" className="border-t border-slate-200/80 bg-white scroll-mt-24">
          <div className="mx-auto max-w-[900px] px-4 sm:px-6 py-16 sm:py-24">
            <FadeInUp>
              <h2 className="text-xl font-semibold mb-6 tracking-[-0.01em]">FAQ</h2>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <FAQSectionClient
                items={[
                  { q: "Will this block everything?", a: "No. Reelax adds friction and limits, but you stay in control. You can pause or allowlist when needed." },
                  { q: "Does it work on mobile?", a: "Reelax is a desktop Chrome extension. Mobile support is on the roadmap via iOS/Android browsers that support extensions." },
                  { q: "Is my data tracked?", a: "No. Settings are stored locally in your browser. We do not collect browsing data." },
                ]}
              />
            </FadeInUp>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/80 bg-white">
        <div className="mx-auto max-w-[1120px] px-4 sm:px-6 py-10">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 select-none">
                <div className="size-4 border border-slate-300 bg-white" aria-hidden />
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
              <a href="#cta" className="inline-flex px-3 py-1.5 text-[13px] font-medium rounded-md bg-[var(--accent)] text-white shadow-sm hover:opacity-90 transition-all duration-200">Add to Chrome</a>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-[12px] text-black/60">
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
    <div className="border border-slate-200 bg-white p-5 rounded-xl shadow-sm flex flex-col gap-2">
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
