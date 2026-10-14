import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

import logoAsset from "@/assets/lcbs/logo.jpg";
import vibercrete1 from "@/assets/lcbs/vibercrete-1.jpg";
import vibercrete2 from "@/assets/lcbs/vibercrete-2.jpg";
import vibercrete3 from "@/assets/lcbs/vibercrete-3.jpg";
import plaster1 from "@/assets/lcbs/plaster-1.jpg";
import blockWall from "@/assets/lcbs/block-wall.jpg";
import roofing from "@/assets/lcbs/roofing.jpg";
import paving from "@/assets/lcbs/paving.jpg";
import team1 from "@/assets/lcbs/team-1.jpg";
import team2 from "@/assets/lcbs/team-2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Last Chance Building Supply — Cape Town Builders" },
      {
        name: "description",
        content:
          "Last Chance Building Supply — paving, roofing, plastering, and vibercrete walls in Cape Town. Quality materials, solid results. Contact Mike today.",
      },
      { property: "og:title", content: "Last Chance Building Supply" },
      {
        property: "og:description",
        content:
          "Quality materials. Solid results. Paving, roofing, plastering & vibercrete walls in Cape Town.",
      },
      { property: "og:image", content: logoAsset },
    ],
  }),
  component: Index,
});

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const items = root.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

const services = [
  {
    title: "Paving",
    desc: "Durable, beautifully laid paving for driveways, walkways and yards.",
    img: paving,
    icon: PavingIcon,
  },
  {
    title: "Roofing",
    desc: "High-quality roofing that protects what matters — built to last.",
    img: roofing,
    icon: RoofIcon,
  },
  {
    title: "Plastering",
    desc: "Smooth finishes and solid craftsmanship for interior and exterior walls.",
    img: plaster1,
    icon: TrowelIcon,
  },
  {
    title: "Vibercrete Walls",
    desc: "Strong, reliable precast concrete walls — installed clean and straight.",
    img: vibercrete2,
    icon: WallIcon,
  },
];

const gallery = [vibercrete1, vibercrete3, blockWall, paving, plaster1, roofing];

function Index() {
  const ref = useReveal();

  return (
    <div ref={ref} className="relative min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
          <a href="#top" className="flex items-center gap-3 min-w-0">
            <img
              src={logoAsset}
              alt="Last Chance Building Supply"
              width={48}
              height={48}
              className="h-10 w-10 rounded-full object-cover shrink-0"
            />
            <span className="font-display text-base sm:text-lg uppercase tracking-wide leading-none truncate">
              Last Chance <span className="text-brand">Building Supply</span>
            </span>
          </a>
          <ul className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <li><a href="#services" className="hover:text-brand transition-colors">Services</a></li>
            <li><a href="#work" className="hover:text-brand transition-colors">Work</a></li>
            <li><a href="#about" className="hover:text-brand transition-colors">About</a></li>
            <li><a href="#contact" className="hover:text-brand transition-colors">Contact</a></li>
          </ul>
          <a href="tel:+27676206610" className="btn-primary !py-2 !px-4 !text-[0.65rem]">
            <PhoneIcon className="w-3.5 h-3.5" /> Call Mike
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-brand-light/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full bg-brand/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 animate-rise">
            <span className="section-eyebrow mb-6">Cape Town · Est. 2018</span>
            <h1 className="font-display text-[clamp(2.6rem,8vw,5.5rem)] uppercase leading-[0.95] mt-5">
              Building today.<br />
              <span className="text-shimmer">Improving tomorrow.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Quality materials. Reliable service. Lasting results. Last Chance
              Building Supply delivers paving, roofing, plastering and vibercrete
              wall solutions across the Western Cape.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary">
                Get a Free Quote <ArrowIcon className="w-3.5 h-3.5" />
              </a>
              <a href="#work" className="btn-outline">View Our Work</a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
              {["Quality Products", "Reliable Service", "Lasting Results"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-muted-foreground">
                  <CheckIcon className="w-4 h-4 text-brand" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Photo collage */}
          <div className="lg:col-span-5 relative animate-fade-in">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="tile aspect-[3/4] animate-blueprint" style={{ animationDelay: "0s" }}>
                <img src={vibercrete2} alt="" loading="eager" />
              </div>
              <div className="tile aspect-[3/4] mt-8 animate-blueprint" style={{ animationDelay: "-2s" }}>
                <img src={paving} alt="" loading="eager" />
              </div>
              <div className="tile aspect-square animate-blueprint" style={{ animationDelay: "-4s" }}>
                <img src={roofing} alt="" loading="eager" />
              </div>
              <div className="tile aspect-square mt-8 animate-blueprint" style={{ animationDelay: "-6s" }}>
                <img src={plaster1} alt="" loading="eager" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border bg-ink text-white py-5 overflow-hidden">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap font-display uppercase tracking-wider text-xl sm:text-2xl">
          {Array.from({ length: 3 }).flatMap((_, i) =>
            ["Paving", "Roofing", "Plastering", "Vibercrete Walls", "Quality Materials", "Solid Results"].map((t, j) => (
              <span key={`${i}-${j}`} className="flex items-center gap-12">
                {t}
                <span className="text-brand-light">✦</span>
              </span>
            ))
          )}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative py-24 px-5">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl mb-14 reveal">
            <span className="section-eyebrow mb-5">Our Services</span>
            <h2 className="font-display text-4xl sm:text-6xl uppercase mt-4">
              What we <span className="text-brand">build.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Four core services. One standard of craftsmanship. Every job done
              with quality materials and a finish you can be proud of.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="service-card reveal"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="photo">
                  <img src={s.img} alt="" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="icon-chip">
                      <s.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-2xl uppercase">{s.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY (no captions on pictures) */}
      <section id="work" className="relative py-24 px-5 bg-secondary">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 reveal">
            <div>
              <span className="section-eyebrow mb-5">Recent Work</span>
              <h2 className="font-display text-4xl sm:text-6xl uppercase mt-4">
                Site <span className="text-brand">portfolio.</span>
              </h2>
            </div>
            <a href="#contact" className="text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-brand transition-colors self-start md:self-auto">
              Start your project →
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
            {gallery.map((g, i) => (
              <div
                key={i}
                className={`tile reveal ${i % 5 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <img src={g} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-24 px-5 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 reveal">
            <div className="grid grid-cols-2 gap-4">
              <div className="tile aspect-[3/4]">
                <img src={team2} alt="" loading="lazy" />
              </div>
              <div className="tile aspect-[3/4] mt-10">
                <img src={team1} alt="" loading="lazy" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 reveal">
            <span className="section-eyebrow mb-5">About Us</span>
            <h2 className="font-display text-4xl sm:text-6xl uppercase mt-4">
              Your project.<br />
              <span className="text-brand">Our commitment.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We're a Cape Town–based building supply and services company built on
              one promise — give every client quality materials, honest pricing,
              and workmanship that lasts. From a single wall to a full roof,
              we show up, deliver, and leave it spotless.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { n: "500+", l: "Projects" },
                { n: "8", l: "Years on site" },
                { n: "100%", l: "Local team" },
              ].map((s) => (
                <div key={s.l} className="border-l-2 border-brand pl-4">
                  <div className="font-display text-3xl sm:text-4xl text-shimmer">{s.n}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative py-24 px-5 overflow-hidden"
        style={{ background: "var(--gradient-brand)" }}
      >
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="relative mx-auto max-w-5xl text-center text-white">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/80 mb-4 reveal">
            <span className="w-7 h-px bg-white/80" /> Let's Build Stronger Together
          </span>
          <h2 className="font-display text-4xl sm:text-7xl uppercase leading-[0.95] reveal">
            Contact Mike<br />today.
          </h2>
          <p className="mt-6 text-lg text-white/90 max-w-xl mx-auto reveal">
            Free quotes. Honest timelines. A finish that lasts. Call now and let's
            talk about your next build.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto reveal">
            <a
              href="tel:+27676206610"
              className="group relative flex items-center gap-4 rounded-2xl bg-white text-ink p-5 hover:scale-[1.03] transition-transform"
            >
              <span className="relative grid place-items-center w-14 h-14 rounded-full bg-brand text-white shrink-0 animate-pulse-ring">
                <PhoneIcon className="w-6 h-6" />
              </span>
              <div className="text-left min-w-0">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Mike — Primary</div>
                <div className="font-display text-2xl truncate">067 620 6610</div>
              </div>
            </a>
            <a
              href="tel:+27681828333"
              className="group relative flex items-center gap-4 rounded-2xl bg-white text-ink p-5 hover:scale-[1.03] transition-transform"
            >
              <span className="relative grid place-items-center w-14 h-14 rounded-full bg-brand-deep text-white shrink-0">
                <PhoneIcon className="w-6 h-6" />
              </span>
              <div className="text-left min-w-0">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Office</div>
                <div className="font-display text-2xl truncate">068 182 8333</div>
              </div>
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-2 text-white/80 text-sm reveal">
            <PinIcon className="w-4 h-4" />
            3 Norman Street, City of Cape Town, Western Cape
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10 px-5 bg-ink text-white/70">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row gap-4 items-center justify-between text-xs uppercase tracking-[0.25em]">
          <div className="flex items-center gap-3">
            <img src={logoAsset} alt="" width={32} height={32} className="h-8 w-8 rounded-full object-cover" />
            <span>© {new Date().getFullYear()} Last Chance Building Supply</span>
          </div>
          <span>Building Today. Improving Tomorrow.</span>
        </div>
      </footer>
    </div>
  );
}

/* ============ Icons ============ */
function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
function PinIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function PavingIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}
function RoofIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11l9-7 9 7" /><path d="M5 10v10h14V10" /><path d="M9 20v-6h6v6" />
    </svg>
  );
}
function TrowelIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21l5-5" /><path d="M14 3l7 7-8 4-3-3 4-8z" />
    </svg>
  );
}
function WallIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="4" /><rect x="3" y="10" width="10" height="4" /><rect x="14" y="10" width="7" height="4" />
      <rect x="3" y="16" width="7" height="4" /><rect x="11" y="16" width="10" height="4" />
    </svg>
  );
}
