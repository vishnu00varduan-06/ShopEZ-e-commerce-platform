import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import heroChair from "@/assets/hero-chair.jpg";
import { products } from "@/lib/products";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const featured = products.slice(0, 3);

  return (
    <div className="min-h-screen bg-surface text-foreground">
      <SiteNav />

      <main className="px-6 pb-20 pt-32">
        {/* Hero */}
        <section className="mx-auto mb-32 max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-3 py-1">
                <span className="size-1.5 rounded-full bg-brand" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand">
                  Fluid pricing engine v3
                </span>
              </div>
              <h1 className="mb-8 font-display text-6xl font-bold leading-[0.9] tracking-tighter md:text-7xl lg:text-8xl">
                THE FUTURE IS{" "}
                <span className="italic text-brand">FLUID.</span>
              </h1>
              <p className="mb-10 max-w-md text-lg leading-relaxed text-muted-foreground md:text-xl">
                ShopEZ uses live demand analytics to lower prices in real time as more people browse.
                Shop together, save instantly, sell smarter.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/shop"
                  className="rounded-full bg-brand px-8 py-4 font-bold text-brand-foreground transition-transform hover:scale-105"
                >
                  Enter the Matrix
                </Link>
                <Link
                  to="/shop"
                  className="rounded-full border border-border bg-white/5 px-8 py-4 font-medium transition-colors hover:bg-white/10"
                >
                  Watch Live Drops
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-3xl bg-card outline outline-1 -outline-offset-1 outline-border">
                <img
                  src={heroChair}
                  alt="Fluid Chair 01 — iridescent ergonomic chair"
                  width={1200}
                  height={1200}
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 z-20 rounded-2xl bg-brand p-6 text-brand-foreground shadow-2xl sm:-left-6">
                <p className="mb-1 text-[10px] font-bold uppercase">Current Demand Price</p>
                <p className="font-display text-4xl font-bold">$749.00</p>
                <p className="text-[10px] font-medium opacity-70">
                  Drops $1 per 10 new browsers
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Live Catalog */}
        <section className="mx-auto mb-32 max-w-7xl">
          <div className="mb-12 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 sm:flex sm:justify-between">
            <div className="min-w-0">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-brand">
                Streaming now
              </p>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">Live Catalog</h2>
            </div>
            <Link
              to="/shop"
              className="shrink-0 border-b border-brand pb-1 text-sm font-bold text-brand"
            >
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {featured.map((p) => (
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
                    -{Math.round(((p.basePrice - p.livePrice) / p.basePrice) * 100)}%
                  </div>
                </div>
                <div className="flex items-start justify-between">
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-bold">{p.name}</h3>
                    <p className="text-sm text-muted-foreground">{p.tagline}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-lg font-bold text-brand">${p.livePrice}</p>
                    <p className="text-xs text-muted-foreground line-through">${p.basePrice}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="mx-auto mb-32 max-w-7xl">
          <div className="mb-12">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-brand">
              How ShopEZ works
            </p>
            <h2 className="max-w-2xl font-display text-3xl font-bold sm:text-4xl">
              Three mechanisms nobody else runs at the same time.
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-3xl bg-border md:grid-cols-3">
            {[
              {
                n: "01",
                title: "Demand Matrix Pricing",
                body: "Every product has a live price that drops as concurrent browsers rise. You save more when you shop together.",
              },
              {
                n: "02",
                title: "Impact Scoring",
                body: "Every listing is graded on eco, ethics, and repairability. Not marketing — verified data at checkout.",
              },
              {
                n: "03",
                title: "Predictive Seller Hub",
                body: "Sellers get 48h demand forecasting so inventory is ready before the trend hits your feed.",
              },
            ].map((f) => (
              <div key={f.n} className="bg-surface p-8">
                <p className="mb-6 font-display text-3xl font-bold text-brand">{f.n}</p>
                <h3 className="mb-3 font-display text-xl font-bold">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Seller Dashboard Tease */}
        <section className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-12 rounded-[2.5rem] bg-brand p-8 text-brand-foreground md:flex-row md:p-12">
            <div className="w-full md:w-1/2">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-widest opacity-60">
                For sellers
              </p>
              <h2 className="mb-6 font-display text-4xl font-bold tracking-tighter sm:text-5xl">
                Seller Intelligence.
              </h2>
              <p className="mb-8 text-lg font-medium leading-snug opacity-80">
                Don't just sell — predict. 48-hour demand forecasting, adaptive pricing, and payout
                velocity in one console.
              </p>
              <Link
                to="/seller"
                className="inline-block rounded-full bg-black px-8 py-4 font-bold text-white transition-transform hover:scale-105"
              >
                Launch Storefront
              </Link>
            </div>
            <div className="w-full md:w-1/2">
              <div className="rounded-3xl border border-black/10 bg-black/5 p-8">
                <div className="mb-8 flex items-end justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase opacity-50">Weekly Velocity</p>
                    <p className="font-display text-3xl font-bold">+242%</p>
                  </div>
                  <div className="flex items-end gap-1">
                    {[8, 12, 16, 24, 20].map((h, i) => (
                      <div
                        key={i}
                        style={{ height: `${h * 4}px` }}
                        className={`w-3 rounded-t-sm ${
                          i === 3 ? "bg-black" : i === 4 ? "bg-black/80" : "bg-black/20"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-black/5 pb-4">
                    <span className="text-sm font-bold">Smart Pricing Active</span>
                    <div className="relative h-5 w-10 rounded-full bg-black">
                      <div className="absolute right-1 top-1 size-3 rounded-full bg-brand" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold">Predictive Analytics</span>
                    <span className="rounded bg-black px-2 py-1 text-xs text-white">ENHANCED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
