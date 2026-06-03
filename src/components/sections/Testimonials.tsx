import { Reveal } from "./Reveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Whitfield",
    role: "Boutique Owner",
    location: "London, UK",
    rating: 5.0,
    quote:
      "Honestly the best web experience I've had with a freelancer. Emmanuel listened, asked the right questions and delivered a site that genuinely reflects my brand. Worth every penny.",
  },
  {
    name: "James Carter",
    role: "Startup Founder",
    location: "Austin, TX, USA",
    rating: 4.8,
    quote:
      "Clean code, fast turnaround, no fluff. He pushed back where it mattered and shipped something that performs. We'll be using him again on the next product.",
  },
  {
    name: "Priya Anand",
    role: "Marketing Lead",
    location: "Toronto, Canada",
    rating: 4.9,
    quote:
      "I had a vague idea and a bunch of references. Emmanuel turned it into a website I'm proud to send to investors. Mobile experience is buttery smooth.",
  },
  {
    name: "Michael O'Connor",
    role: "Restaurant Owner",
    location: "Manchester, UK",
    rating: 4.7,
    quote:
      "Needed a menu site up quickly before our reopening. Got daily updates, no excuses. Bookings have noticeably gone up since the redesign.",
  },
  {
    name: "Adaeze Okafor",
    role: "Fashion Brand Owner",
    location: "Lagos, Nigeria",
    rating: 4.6,
    quote:
      "Emmanuel understood what I wanted even when I couldn't explain it properly. The final result was better than what I had in my head. Will work with him again.",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < Math.round(rating) ? "fill-primary text-primary" : "text-muted-foreground/40"}`}
        />
      ))}
      <span className="ml-2 text-xs font-medium text-muted-foreground">{rating.toFixed(1)}</span>
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Testimonials</p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">What Clients Say</h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05}>
              <figure className="glass flex h-full flex-col rounded-2xl p-6">
                <Stars rating={t.rating} />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-display text-base font-bold text-white">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role} · {t.location}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
