import { Reveal } from "./Reveal";
import { Download, FileText } from "lucide-react";
import cv from "@/assets/cv.pdf?url";

export function Resume() {
  return (
    <section id="resume" className="bg-card px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Resume</p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">My Resume</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Want to know more about my background, skills, and projects? Download my CV below.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass mx-auto mt-10 flex max-w-md items-center gap-4 rounded-2xl p-5 text-left">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
              <FileText className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <p className="font-display font-bold text-white">Emmanuel Chiboy</p>
              <p className="text-xs text-muted-foreground">Frontend Developer · UI Designer</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <a
            href={cv}
            download="Emmanuel_Chiboy_CV.pdf"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.62_0.21_286/0.7)] transition-transform hover:scale-[1.03]"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </Reveal>
      </div>
    </section>
  );
}
