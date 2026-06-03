import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import emmanuel from "@/assets/emmanuel.png.asset.json";
import cv from "@/assets/cv.pdf.asset.json";

const phrases = ["Frontend Web Developer", "UI Designer", "I Build Websites That Work"];

function Typing() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[i];
    const speed = deleting ? 40 : 70;
    const timeout = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1400);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setI((i + 1) % phrases.length);
        return;
      }
      setText(current.slice(0, deleting ? text.length - 1 : text.length + 1));
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, i]);

  return (
    <span className="text-primary">
      {text}
      <span className="ml-1 inline-block h-[1em] w-[2px] -mb-1 animate-pulse bg-primary" />
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24"
    >
      <div className="absolute inset-0 dot-grid opacity-60" />
      <div
        className="absolute left-1/2 top-1/3 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.62 0.21 286 / 0.6), transparent 70%)" }}
      />

      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
        }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          className="glow-ring mb-8 rounded-full"
        >
          <img
            src={emmanuel.url}
            alt="Emmanuel Chiboy headshot"
            className="h-32 w-32 rounded-full object-cover ring-4 ring-background md:h-40 md:w-40"
          />
        </motion.div>

        <motion.h1
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          className="font-display font-bold text-white"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          Emmanuel Chiboy
        </motion.h1>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          className="mt-3 h-7 font-display text-lg font-medium md:text-xl"
        >
          <Typing />
        </motion.div>

        <motion.p
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg"
        >
          Clean. Fast. Professional. I turn your ideas into websites that represent
          your business the right way.
        </motion.p>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_8px_30px_-8px_oklch(0.62_0.21_286/0.6)] transition-transform hover:scale-[1.03]"
          >
            See My Services
          </a>
          <a
            href={cv.url}
            download="Emmanuel_Chiboy_CV.pdf"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
          >
            <Download className="h-4 w-4" /> Download CV
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </motion.a>
    </section>
  );
}
