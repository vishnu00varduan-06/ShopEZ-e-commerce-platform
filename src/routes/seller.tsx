import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/seller")({
  head: () => ({
    meta: [
      { title: "Seller Hub — ShopEZ" },
      {
        name: "description",
        content:
          "The ShopEZ Seller Hub gives you 48-hour demand forecasting, adaptive pricing, and predictive inventory alerts in one console.",
      },
      { property: "og:title", content: "Seller Hub — ShopEZ" },
      {
        property: "og:description",
        content: "Predictive commerce intelligence for independent sellers.",
      },
    ],
  }),
  component: SellerPage,
});

const kpis = [
  { label: "Weekly velocity", value: "+242%", accent: true },
  { label: "Live buyers", value: "1.2k" },
  { label: "Avg. payout", value: "24h" },
  { label: "Forecast accuracy", value: "94%" },
];

const events = [
  { t: "14:22:01", msg: "ORDER_8829 confirmed — 1× Acoustics X1", tone: "default" },
  { t: "14:18:55", msg: "Demand spike detected — Lumina Orb (+38% in 12min)", tone: "brand" },
  { t: "14:05:12", msg: "Payout released — $2,481.20 to Merchant_A2", tone: "muted" },
  { t: "13:52:44", msg: "Inventory sync complete — Singapore Node 03", tone: "muted" },
  { t: "13:41:09", msg: "Smart pricing lowered Chrono Ti by $4 (247 browsers)", tone: "brand" },
];

function SellerPage() {
  return (
    <div className="min-h-screen bg-surface">
      <SiteNav />
      <main className="px-6 pb-20 pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-brand">
              Merchant Console · Session 012
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tighter sm:text-6xl">
              Predict demand before it happens.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              The Seller Hub combines 48-hour forecasting, adaptive pricing, and payout velocity in
              a single view. No spreadsheets, no guesswork.
            </p>
          </div>

          {/* KPI grid */}
          <div className="mb-8 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-border md:grid-cols-4">
            {kpis.map((k) => (
              <div key={k.label} className="bg-card p-6">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  {k.label}
                </p>
                <p
                  className={`mt-3 font-display text-3xl font-bold sm:text-4xl ${
                    k.accent ? "text-brand" : ""
                  }`}
                >
                  {k.value}
                </p>
              </div>
            ))}
          </div>

          {/* Main dashboard row */}
          <div className="mb-8 grid gap-8 lg:grid-cols-3">
            {/* Chart */}
            <div className="rounded-3xl border border-border bg-card p-8 lg:col-span-2">
              <div className="mb-8 flex items-end justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    Demand curve · 7 days
                  </p>
                  <p className="mt-1 font-display text-3xl font-bold">2,481 units</p>
                </div>
                <div className="rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand">
                  Forecast: +18%
                </div>
              </div>
              <div className="flex h-40 items-end gap-2">
                {[40, 55, 45, 70, 62, 88, 95, 78, 105, 92, 118, 130, 125, 148].map((h, i, arr) => (
                  <div
                    key={i}
                    style={{ height: `${(h / Math.max(...arr)) * 100}%` }}
                    className={`flex-1 rounded-t-sm ${
                      i >= arr.length - 3 ? "bg-brand" : "bg-white/20"
                    }`}
                  />
                ))}
              </div>
              <div className="mt-4 flex justify-between text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                <span>Mon</span>
                <span>Thu</span>
                <span className="text-brand">Forecast</span>
              </div>
            </div>

            {/* Controls */}
            <div className="rounded-3xl border border-border bg-card p-8">
              <p className="mb-6 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Automations
              </p>
              <div className="space-y-6">
                {[
                  { label: "Fluid pricing", on: true },
                  { label: "Auto-restock alerts", on: true },
                  { label: "Predictive ads", on: false },
                  { label: "Weekly digest", on: true },
                ].map((s) => (
                  <div key={s.label} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{s.label}</span>
                    <div
                      className={`relative h-5 w-10 rounded-full transition-colors ${
                        s.on ? "bg-brand" : "bg-white/10"
                      }`}
                    >
                      <div
                        className={`absolute top-1 size-3 rounded-full bg-black transition-all ${
                          s.on ? "right-1" : "left-1"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-8 w-full rounded-full bg-brand px-6 py-3 text-sm font-bold text-brand-foreground">
                Open full console
              </button>
            </div>
          </div>

          {/* Event log */}
          <div className="rounded-3xl border border-border bg-card p-8">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Live event log
              </p>
              <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand">
                <span className="size-1.5 animate-pulse rounded-full bg-brand" />
                Streaming
              </span>
            </div>
            <div className="space-y-3 font-mono text-xs sm:text-sm">
              {events.map((e, i) => (
                <div key={i} className="grid grid-cols-[auto_1fr] gap-4">
                  <span className="text-muted-foreground/60">[{e.t}]</span>
                  <span
                    className={
                      e.tone === "brand"
                        ? "text-brand"
                        : e.tone === "muted"
                          ? "text-muted-foreground"
                          : ""
                    }
                  >
                    {e.msg}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
