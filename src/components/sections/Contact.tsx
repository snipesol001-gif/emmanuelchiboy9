import { Reveal } from "./Reveal";
import { Facebook, Mail, MessageCircle } from "lucide-react";

const WHATSAPP = "https://wa.me/message/N4TYXMFOSNGOC1";

const cards = [
  {
    icon: MessageCircle,
    label: "Chat on WhatsApp",
    detail: "Fast replies, usually within hours",
    href: WHATSAPP,
    external: true,
    color: "oklch(0.72 0.19 150)",
  },
  {
    icon: Facebook,
    label: "Find me on Facebook",
    detail: "@emmanuelchiboy001",
    href: "https://www.facebook.com/emmanuelchiboy001",
    external: true,
    color: "oklch(0.55 0.18 255)",
  },
  {
    icon: Mail,
    label: "Send an Email",
    detail: "ignatiusemmanuel1122@gmail.com",
    href: "mailto:ignatiusemmanuel1122@gmail.com",
    external: false,
    color: "oklch(0.62 0.21 286)",
  },
];

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contact</p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Get In Touch</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Have a project in mind? I would love to hear about it. Reach out through any
            of the options below and let us talk.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08}>
              <a
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noreferrer noopener" : undefined}
                className="glass group flex h-full flex-col items-center rounded-2xl p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_12px_40px_-12px_oklch(0.62_0.21_286/0.5)]"
              >
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `color-mix(in oklab, ${c.color} 18%, transparent)`, color: c.color }}
                >
                  <c.icon className="h-6 w-6" />
                </div>
                <p className="font-display font-bold text-white">{c.label}</p>
                <p className="mt-2 break-all text-xs text-muted-foreground">{c.detail}</p>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mx-auto mt-12 flex w-fit items-center gap-3 rounded-full border border-white/10 bg-card px-5 py-2.5">
            <span className="pulse-dot h-2.5 w-2.5 rounded-full bg-[oklch(0.72_0.19_150)]" />
            <span className="text-sm font-medium text-foreground">
              Currently Available for Projects
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
