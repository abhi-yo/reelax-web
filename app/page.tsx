import NavbarClient from "@/components/blocks/navbar-client";
import FAQSectionClient from "@/components/blocks/faq-section-client";
import Testimonials from "@/components/ui/testimonials-columns-1";
import { FadeInUp, FadeIn } from "@/components/ui/scroll-animations";

export default function Home() {
  return (
    <div className="min-h-dvh grid grid-rows-[auto_1fr_auto]">
      {/* Header (fixed) */}
      <NavbarClient />

      {/* Main */}
      <main className="pt-14">
        {/* Hero */}
        <section className="bg-white relative overflow-hidden">
          {/* Subtle dithered background */}
          <div className="absolute inset-0 opacity-[0.015]" 
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3Ccircle cx='17' cy='37' r='1'/%3E%3Ccircle cx='37' cy='17' r='1'/%3E%3Ccircle cx='3' cy='23' r='1'/%3E%3Ccircle cx='23' cy='43' r='1'/%3E%3Ccircle cx='43' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3Ccircle cx='33' cy='33' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               }}></div>
          
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-2 h-2 bg-black/5 rounded-full"></div>
            <div className="absolute top-32 right-20 w-1 h-1 bg-black/10 rounded-full"></div>
            <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-black/5 rounded-full"></div>
            <div className="absolute top-40 left-1/3 w-1 h-1 bg-black/10 rounded-full"></div>
            <div className="absolute bottom-20 right-10 w-2 h-2 bg-black/5 rounded-full"></div>
          </div>
          
          <div className="mx-auto max-w-[1040px] px-4 sm:px-6 min-h-[calc(100dvh-56px)] flex flex-col items-center justify-center text-center relative z-10">
            <FadeInUp delay={0.1}>
              <div className="flex items-center gap-3 mb-3">
                <p className="text-[13px] inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-2.5 py-1 text-black/70">
                  Take back your time
                </p>
                <span className="text-[11px] bg-red-500 text-white px-2 py-0.5 rounded-full font-medium">
                  Free Forever
                </span>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={0.2}>
              {/* Social proof badges */}
              <div className="flex items-center justify-center gap-4 mb-4 text-[12px] text-black/60">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">★★★★★</span>
                  <span>5.0 on Chrome Store</span>
                </div>
                <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-[11px] font-medium">
                  #8 Peerlist
                </span>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={0.3}>
              <h1 className="font-serif-display mt-4 text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-[-0.02em]">
                The Chrome extension that <br />helps you stop                 <span className="text-red-500">doomscrolling</span>
              </h1>
            </FadeInUp>
            
            <FadeInUp delay={0.4}>
              <p className="mx-auto mt-6 max-w-[62ch] text-[17px] leading-[1.65] text-black/80 font-medium">
                Set gentle limits, add intentional friction, and focus on what matters. 
                <span className="font-semibold text-black/90 bg-yellow-100/50 px-1 rounded"> No accounts. No tracking.</span> Just better habits.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.5}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  id="cta"
                  href="#"
                  className="group px-6 py-3 text-[15px] font-semibold border border-black bg-[var(--accent)] text-white hover:bg-white hover:text-black transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transform relative overflow-hidden"
                >
                  <span className="relative z-10">Add to Chrome — Free</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                </a>
                <a
                  href="#how"
                  className="group px-6 py-3 text-[15px] font-semibold border border-black bg-white hover:bg-black hover:text-white transition-all duration-300 rounded-lg shadow-sm hover:shadow-lg hover:scale-[1.02] transform relative overflow-hidden"
                >
                  <span className="relative z-10">How it works</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                </a>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={0.6}>
              <div className="mt-4 text-[13px] text-black/60 font-medium">Free • No account • Private</div>
            </FadeInUp>
            
            {/* Floating testimonial */}
            <FadeIn delay={0.8}>
              <div className="absolute top-16 right-4 hidden lg:block max-w-[200px] bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-sm border border-black/5 text-left hover:shadow-md transition-all duration-300 hover:scale-105">
                <p className="text-[12px] text-black/80 leading-relaxed font-medium">"Finally broke my Twitter addiction!"</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full"></div>
                  <span className="text-[11px] font-semibold text-black/70">Sarah, Designer</span>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={1.0}>
              <div className="absolute bottom-32 left-4 hidden lg:block max-w-[180px] bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-sm border border-black/5 text-left hover:shadow-md transition-all duration-300 hover:scale-105">
                <p className="text-[12px] text-black/80 leading-relaxed font-medium">"Love the gentle approach"</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full"></div>
                  <span className="text-[11px] font-semibold text-black/70">Mike, Developer</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="border-t border-black/10 bg-white scroll-mt-24">
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
                {/* Overlay mock simplified */}
                <div className="border border-black bg-white p-6 shadow-[8px_8px_0_0_#000] max-w-[520px] rounded-xl">
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
                  <li className="border border-black/10 bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                    <div className="inline-flex items-center justify-center size-7 rounded-full border border-black bg-[var(--accent)] text-white text-[12px] font-semibold">
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
        <section id="faq" className="border-t border-black/10 bg-white scroll-mt-24">
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
              <a href="#cta" className="inline-flex px-3 py-1.5 text-[13px] font-medium border border-black bg-[var(--accent)] text-white hover:bg-white hover:text-black transition-all duration-200 rounded-md">Add to Chrome</a>
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
