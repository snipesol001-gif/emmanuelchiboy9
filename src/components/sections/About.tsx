import { Reveal } from "./Reveal";
import emmanuel from "@/assets/emmanuel.png";

const skills = ["HTML5", "CSS3", "JavaScript", "React", "Canva", "Responsive Design", "Git", "Vercel"];
const stats = [
  { num: "3+", label: "Projects Delivered" },
  { num: "100%", label: "Client Focused" },
  { num: "On Time", label: "Always" },
];

export function About() {
  return (
    <section id="about" className="bg-card px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[320px_1fr] md:gap-16">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border-2 border-primary/40">
            <img src={emmanuel} alt="Emmanuel Chiboy portrait" className="aspect-[4/5] w-full object-cover" />
          </div>
          <div className="mt-4">
            <p className="font-display text-xl font-bold text-white">Emmanuel Chiboy</p>
            <p className="text-sm text-muted-foreground">Frontend Developer · UI Designer</p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">About Me</p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Building digital experiences that actually work.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-muted-foreground">
              I am Emmanuel Chiboy, a self-taught frontend web developer and UI designer
              who builds clean, fast, and responsive websites for businesses and individuals.
              I take pride in building digital experiences that look great, load fast, and
              actually work for the people using them. Whether it is a brand new website
              from scratch or a complete redesign of an existing one, I bring the same
              level of care and attention to every project I take on.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-primary/40 bg-primary/15 px-3 py-1 text-xs font-medium text-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="glass-subtle rounded-xl p-4 text-center">
                  <p className="font-display text-2xl font-bold text-primary">{s.num}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
