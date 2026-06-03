export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-card px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary font-display text-xs font-bold text-primary-foreground">
            EC
          </span>
          <span>© {new Date().getFullYear()} Emmanuel Chiboy. All rights reserved.</span>
        </div>
        <p>Built with care. Designed in the dark.</p>
      </div>
    </footer>
  );
}
