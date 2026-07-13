import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { products } from "@/lib/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — ShopEZ Live Catalog" },
      {
        name: "description",
        content:
          "Browse the ShopEZ live catalog. Prices drop as more shoppers browse — see the demand matrix in action.",
      },
      { property: "og:title", content: "Shop — ShopEZ Live Catalog" },
      {
        property: "og:description",
        content: "Live-priced curated goods. Watch the numbers move.",
      },
    ],
  }),
  component: ShopPage,
});

const categories = ["All", "Audio", "Home", "Desk", "Wear", "Kitchen", "Furniture"];

function ShopPage() {
  return (
    <div className="min-h-screen bg-surface">
      <SiteNav />
      <main className="px-6 pb-20 pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6 sm:flex sm:justify-between">
            <div className="min-w-0">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-brand">
                Live catalog · 6 items streaming
              </p>
              <h1 className="font-display text-4xl font-bold tracking-tighter sm:text-6xl">
                Everything, discounted in real time.
              </h1>
            </div>
            <div className="hidden shrink-0 items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-3 py-1.5 sm:flex">
              <span className="size-1.5 animate-pulse rounded-full bg-brand" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand">
                Prices updating
              </span>
            </div>
          </div>

          {/* Category chips */}
          <div className="mb-12 flex flex-wrap gap-2">
            {categories.map((c, i) => (
              <button
                key={c}
                className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors ${
                  i === 0
                    ? "border-brand bg-brand text-brand-foreground"
                    : "border-border bg-white/5 text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => {
              const discount = Math.round(((p.basePrice - p.livePrice) / p.basePrice) * 100);
              return (
                <Link
                  key={p.id}
                  to="/product/$id"
                  params={{ id: p.id }}
                  className="group"
                >
                  <div className="relative mb-4 overflow-hidden rounded-2xl border border-border bg-card">
                    <img
                      src={p.image}
                      alt={p.name}
                      width={800}
                      height={1000}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute right-4 top-4 rounded-md bg-white/10 px-2 py-1 text-[10px] font-bold backdrop-blur-md">
                      ECO {p.eco}%
                    </div>
                    <div className="absolute left-4 top-4 rounded-md bg-brand/90 px-2 py-1 text-[10px] font-bold text-brand-foreground">
                      -{discount}%
                    </div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 backdrop-blur-md">
                      <span className="size-1.5 animate-pulse rounded-full bg-brand" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                        {p.browsers} browsing
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                        {p.category}
                      </p>
                      <h3 className="truncate font-display text-lg font-bold">{p.name}</h3>
                      <p className="truncate text-sm text-muted-foreground">{p.tagline}</p>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="font-display text-lg font-bold text-brand">${p.livePrice}</p>
                      <p className="text-xs text-muted-foreground line-through">${p.basePrice}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
