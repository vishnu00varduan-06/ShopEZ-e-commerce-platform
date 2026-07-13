export function SiteFooter() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-6 sm:flex sm:flex-wrap sm:justify-between">
        <p className="font-display text-xl font-bold text-brand">SHOPEZ.</p>
        <div className="hidden gap-8 text-xs font-bold uppercase tracking-widest text-muted-foreground md:flex lg:gap-12">
          <a href="#" className="transition-colors hover:text-foreground">Terms</a>
          <a href="#" className="transition-colors hover:text-foreground">Privacy</a>
          <a href="#" className="transition-colors hover:text-foreground">API Docs</a>
        </div>
        <p className="text-right text-[10px] text-muted-foreground/60 sm:text-xs">
          © 2026 SHOPEZ INTRA-NETWORK
        </p>
      </div>
    </footer>
  );
}
