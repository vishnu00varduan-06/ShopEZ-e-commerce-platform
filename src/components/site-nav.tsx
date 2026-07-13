import { Link } from "@tanstack/react-router";

export function SiteNav() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-surface/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link to="/" className="font-display text-2xl font-bold tracking-tighter text-brand">
            SHOPEZ.
          </Link>
          <div className="hidden gap-6 text-sm font-medium text-muted-foreground md:flex">
            <Link to="/shop" className="transition-colors hover:text-brand" activeProps={{ className: "text-brand" }}>
              Curated Feed
            </Link>
            <Link to="/shop" className="transition-colors hover:text-brand">
              The Lab
            </Link>
            <Link to="/seller" className="transition-colors hover:text-brand" activeProps={{ className: "text-brand" }}>
              Seller Hub
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-3 py-1 sm:flex">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-brand" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand">
              1,284 Live Shoppers
            </span>
          </div>
          <button className="flex size-10 items-center justify-center rounded-full border border-border bg-white/5 text-xs font-medium">
            03
          </button>
        </div>
      </div>
    </nav>
  );
}
