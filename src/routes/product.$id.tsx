import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { getProduct, products } from "@/lib/products";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Product not found — ShopEZ" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { product } = loaderData;
    return {
      meta: [
        { title: `${product.name} — ShopEZ` },
        { name: "description", content: product.description },
        { property: "og:title", content: `${product.name} — ShopEZ` },
        { property: "og:description", content: product.description },
        { property: "og:image", content: product.image },
        { name: "twitter:image", content: product.image },
      ],
    };
  },
  component: ProductPage,
  notFoundComponent: () => (
    <div className="min-h-screen bg-surface">
      <SiteNav />
      <div className="flex min-h-[60vh] items-center justify-center px-6 pt-32">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold">Product not found</h1>
          <Link to="/shop" className="mt-6 inline-block text-brand underline">
            Back to shop
          </Link>
        </div>
      </div>
      <SiteFooter />
    </div>
  ),
});

const reviews = [
  { name: "Maya K.", role: "Designer", stars: 5, text: "The demand pricing actually works. Watched three friends open the tab and my cart dropped $12. Wild." },
  { name: "Devon R.", role: "Verified buyer", stars: 5, text: "Build quality is outrageous for the price. Feels like something you'd find in a museum shop." },
  { name: "Ari L.", role: "Verified buyer", stars: 4, text: "Shipping was fast, packaging was thoughtful. Only knocking one star because I want more colorways." },
];

function ProductPage() {
  const { product } = Route.useLoaderData();
  const related = products.filter((p) => p.id !== product.id).slice(0, 3);
  const discount = Math.round(((product.basePrice - product.livePrice) / product.basePrice) * 100);

  return (
    <div className="min-h-screen bg-surface">
      <SiteNav />
      <main className="px-6 pb-20 pt-32">
        <div className="mx-auto max-w-7xl">
          <Link to="/shop" className="mb-8 inline-block text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-brand">
            ← Back to catalog
          </Link>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
              <img
                src={product.image}
                alt={product.name}
                width={1200}
                height={1500}
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute left-4 top-4 rounded-md bg-brand/90 px-3 py-1.5 text-xs font-bold text-brand-foreground">
                -{discount}% live
              </div>
            </div>

            <div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-brand">
                {product.category}
              </p>
              <h1 className="mb-3 font-display text-4xl font-bold tracking-tighter sm:text-5xl">
                {product.name}
              </h1>
              <p className="mb-6 text-lg text-muted-foreground">{product.tagline}</p>

              <div className="mb-8 flex items-end gap-4">
                <p className="font-display text-5xl font-bold text-brand">${product.livePrice}</p>
                <p className="mb-1 text-xl text-muted-foreground line-through">${product.basePrice}</p>
              </div>

              <div className="mb-8 grid grid-cols-3 gap-px overflow-hidden rounded-2xl bg-border">
                <div className="bg-card p-4">
                  <p className="text-[10px] font-bold uppercase text-muted-foreground">Browsing</p>
                  <p className="mt-1 font-display text-xl font-bold text-brand">{product.browsers}</p>
                </div>
                <div className="bg-card p-4">
                  <p className="text-[10px] font-bold uppercase text-muted-foreground">Rating</p>
                  <p className="mt-1 font-display text-xl font-bold">{product.rating}★</p>
                </div>
                <div className="bg-card p-4">
                  <p className="text-[10px] font-bold uppercase text-muted-foreground">Eco score</p>
                  <p className="mt-1 font-display text-xl font-bold">{product.eco}%</p>
                </div>
              </div>

              <p className="mb-8 leading-relaxed text-muted-foreground">{product.description}</p>

              <div className="flex flex-wrap gap-3">
                <button className="rounded-full bg-brand px-8 py-4 font-bold text-brand-foreground transition-transform hover:scale-105">
                  Add to cart · ${product.livePrice}
                </button>
                <button className="rounded-full border border-border bg-white/5 px-8 py-4 font-medium hover:bg-white/10">
                  Save for later
                </button>
              </div>

              <div className="mt-8 rounded-2xl border border-brand/20 bg-brand/5 p-4 text-xs text-muted-foreground">
                <span className="font-bold text-brand">Fluid pricing active.</span> This price will
                drop $1 for every 10 new browsers in the next hour.
              </div>
            </div>
          </div>

          {/* Reviews */}
          <section className="mt-24">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-brand">
                  {product.reviews} verified reviews
                </p>
                <h2 className="font-display text-3xl font-bold sm:text-4xl">What buyers say</h2>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {reviews.map((r) => (
                <div key={r.name} className="rounded-2xl border border-border bg-card p-6">
                  <p className="mb-3 text-brand">{"★".repeat(r.stars)}<span className="text-muted-foreground/40">{"★".repeat(5 - r.stars)}</span></p>
                  <p className="mb-6 text-sm leading-relaxed">{r.text}</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-display font-bold">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Related */}
          <section className="mt-24">
            <h2 className="mb-8 font-display text-3xl font-bold sm:text-4xl">You might also want</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {related.map((p) => (
                <Link key={p.id} to="/product/$id" params={{ id: p.id }} className="group">
                  <div className="mb-4 overflow-hidden rounded-2xl border border-border bg-card">
                    <img
                      src={p.image}
                      alt={p.name}
                      width={800}
                      height={1000}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex justify-between">
                    <div className="min-w-0">
                      <h3 className="font-display font-bold">{p.name}</h3>
                      <p className="truncate text-sm text-muted-foreground">{p.tagline}</p>
                    </div>
                    <p className="font-display font-bold text-brand">${p.livePrice}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
