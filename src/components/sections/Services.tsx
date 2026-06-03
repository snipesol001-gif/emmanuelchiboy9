import { Reveal } from "./Reveal";
import { Briefcase, Store, User, RefreshCw, LayoutGrid, Smartphone } from "lucide-react";

const services = [
  { icon: Briefcase, title: "Business Websites", desc: "Landing pages and full company websites that represent your brand professionally." },
  { icon: Store, title: "Restaurant & Store Sites", desc: "Food menus, product showcases, and booking pages for physical businesses." },
  { icon: User, title: "Portfolio Sites", desc: "Clean personal brand websites for creatives, freelancers, and professionals." },
  { icon: RefreshCw, title: "Website Redesign", desc: "Transform your outdated website into a modern, fast, and beautiful one." },
  { icon: LayoutGrid, title: "Web Applications", desc: "Single-page and multi-page apps with dynamic functionality." },
  { icon: Smartphone, title: "Mobile-First Design", desc: "Every website I build works perfectly on phones, tablets, and desktops." },
];

export function Services() {
  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Services</p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">What I Do</h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="group h-full rounded-2xl border border-white/8 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_12px_40px_-12px_oklch(0.62_0.21_286/0.5)]">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
