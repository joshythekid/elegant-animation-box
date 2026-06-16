import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import portrait from "@/assets/portrait.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aurelius — Designer & Creative Director" },
      { name: "description", content: "Portfolio of Aurelius Vance — independent designer crafting noir, gold, and quiet luxury for ambitious brands." },
      { property: "og:title", content: "Aurelius — Designer & Creative Director" },
      { property: "og:description", content: "Portfolio of Aurelius Vance — independent designer crafting noir, gold, and quiet luxury for ambitious brands." },
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
      { threshold: 0.15 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

function Index() {
  const ref = useReveal();

  const works = [
    { src: work1, w: 1024, h: 1280 },
    { src: work2, w: 1024, h: 1280 },
    { src: work3, w: 1024, h: 1280 },
  ];

  const marquee = ["Brand Identity", "Art Direction", "Editorial", "Web Design", "Motion", "Typography"];

  return (
    <div ref={ref} className="relative min-h-screen bg-background text-foreground">
      <div className="noise" />

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/40 border-b border-border">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#top" className="font-display text-xl tracking-wide">
            <span className="text-shimmer">Aurelius</span>
          </a>
          <ul className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <li><a href="#work" className="hover:text-foreground transition-colors">Work</a></li>
            <li><a href="#about" className="hover:text-foreground transition-colors">Studio</a></li>
            <li><a href="#process" className="hover:text-foreground transition-colors">Process</a></li>
            <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
          </ul>
          <a href="#contact" className="btn-gold !py-2 !px-4 !text-[0.65rem]">Book a call</a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
        <img
          src={heroBg}
          alt=""
          aria-hidden
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 animate-rise">
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-muted-foreground mb-8">
              <span className="h-px w-10 bg-gold" /> Est. 2014 — Lisbon × New York
            </p>
            <h1 className="font-display text-[clamp(3rem,9vw,8rem)] leading-[0.95] tracking-tight">
              Quiet luxury,<br />
              <span className="text-shimmer italic">loud impact.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              I'm Aurelius Vance — an independent designer and creative director
              shaping considered brand worlds for founders who refuse to look like everyone else.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#work" className="btn-gold">View Selected Work →</a>
              <a href="#contact" className="btn-ghost">Start a Project</a>
            </div>
          </div>

          <div className="lg:col-span-5 animate-float-slow">
            <div className="frame-gold rounded-2xl overflow-hidden">
              <img
                src={portrait}
                alt=""
                width={1024}
                height={1280}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[0.65rem] uppercase tracking-[0.4em] text-muted-foreground z-10">
          Scroll
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border py-8 overflow-hidden">
        <div className="flex w-max animate-marquee gap-16 whitespace-nowrap">
          {[...marquee, ...marquee, ...marquee].map((m, i) => (
            <span key={i} className="font-display text-3xl md:text-5xl italic">
              {m} <span className="text-gold mx-6">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-32 px-6">
        <div className="mx-auto max-w-6xl grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4 reveal">
            <p className="text-xs uppercase tracking-[0.35em] text-gold mb-6">— Studio</p>
            <h2 className="font-display text-5xl md:text-6xl leading-tight">A small studio<br />with a long memory.</h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 reveal space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              For a decade I've built brand systems for hospitality groups, fashion houses,
              and the occasional rebellious tech founder. The work is always the same: strip away
              the noise until only the essential remains — then make that essential thing impossible to forget.
            </p>
            <p>
              No decks. No discovery sprints. No buzzwords. Just deeply considered design,
              delivered on time, in formats your developer will thank me for.
            </p>
            <div className="gold-line my-10" />
            <div className="grid grid-cols-3 gap-8">
              <div><div className="font-display text-4xl text-shimmer">120+</div><div className="text-xs uppercase tracking-widest mt-2">Brands shaped</div></div>
              <div><div className="font-display text-4xl text-shimmer">11</div><div className="text-xs uppercase tracking-widest mt-2">Years independent</div></div>
              <div><div className="font-display text-4xl text-shimmer">3</div><div className="text-xs uppercase tracking-widest mt-2">Continents served</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="relative py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between mb-16 reveal">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-gold mb-6">— Selected Work</p>
              <h2 className="font-display text-5xl md:text-7xl">Recent obsessions.</h2>
            </div>
            <a href="#contact" className="hidden md:inline text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-gold transition-colors">
              Full archive →
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {works.map((w, i) => (
              <div
                key={i}
                className="work-card reveal aspect-[4/5]"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <img
                  src={w.src}
                  alt=""
                  loading="lazy"
                  width={w.w}
                  height={w.h}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="relative py-32 px-6 bg-card/30">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.35em] text-gold mb-6 reveal">— Process</p>
          <h2 className="font-display text-5xl md:text-7xl mb-20 reveal">Four movements.</h2>

          <div className="space-y-px">
            {[
              { n: "01", t: "Listen", d: "A long conversation. No brief template. We map what you sell, who you are, and what you'd never compromise on." },
              { n: "02", t: "Define", d: "A single page document. One sentence of strategy. One palette. One voice. The whole world fits on a postcard." },
              { n: "03", t: "Craft", d: "Identity, type system, motion principles, and every touchpoint your customer will ever see — built in production-ready files." },
              { n: "04", t: "Hand off", d: "Documentation a junior designer could ship from. Plus three months of on-call support, because launches are messy." },
            ].map((s, i) => (
              <div
                key={s.n}
                className="reveal group grid grid-cols-[auto_1fr_auto] gap-6 md:gap-12 items-baseline py-8 border-t border-border hover:border-gold transition-colors"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="font-display text-2xl text-gold">{s.n}</span>
                <div>
                  <h3 className="font-display text-3xl md:text-5xl group-hover:translate-x-2 transition-transform">{s.t}</h3>
                  <p className="mt-3 text-muted-foreground max-w-xl">{s.d}</p>
                </div>
                <span className="hidden md:block text-gold opacity-0 group-hover:opacity-100 transition-opacity text-2xl">→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.78_0.13_80/0.15),transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-gold mb-6 reveal">— Let's build</p>
          <h2 className="font-display text-5xl md:text-8xl leading-none reveal">
            Have a project<br />worth <span className="text-shimmer italic">obsessing</span> over?
          </h2>
          <p className="mt-10 text-lg text-muted-foreground reveal">
            Currently booking engagements for Q3 2026. Two slots remaining.
          </p>
          <div className="mt-12 flex flex-wrap gap-4 justify-center reveal">
            <a href="mailto:hello@aurelius.studio" className="btn-gold">hello@aurelius.studio</a>
            <a href="#" className="btn-ghost">Schedule intro call</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10 px-6">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row gap-4 items-center justify-between text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span>© 2026 Aurelius Studio</span>
          <span>Designed in the dark. Finished in gold.</span>
        </div>
      </footer>
    </div>
  );
}
