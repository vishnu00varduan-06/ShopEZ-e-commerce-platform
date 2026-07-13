import headphones from "@/assets/product-headphones.jpg";
import lamp from "@/assets/product-lamp.jpg";
import slate from "@/assets/product-slate.jpg";
import watch from "@/assets/product-watch.jpg";
import coffee from "@/assets/product-coffee.jpg";
import chair from "@/assets/hero-chair.jpg";

export type Product = {
  id: string;
  name: string;
  tagline: string;
  category: string;
  basePrice: number;
  livePrice: number;
  browsers: number;
  eco: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
};

export const products: Product[] = [
  {
    id: "acoustics-x1",
    name: "Acoustics X1",
    tagline: "Spatial Audio Core",
    category: "Audio",
    basePrice: 349,
    livePrice: 299,
    browsers: 482,
    eco: 94,
    rating: 4.8,
    reviews: 1240,
    image: headphones,
    description:
      "Studio-grade wireless headphones with adaptive spatial audio and 40-hour battery. Machined from recycled aluminum.",
  },
  {
    id: "lumina-orb",
    name: "Lumina Orb",
    tagline: "Reactive Ambient Light",
    category: "Home",
    basePrice: 220,
    livePrice: 185,
    browsers: 312,
    eco: 88,
    rating: 4.6,
    reviews: 512,
    image: lamp,
    description:
      "Hand-blown frosted glass smart lamp that syncs to your circadian rhythm. Warm amber to cool daylight.",
  },
  {
    id: "solid-slate",
    name: "Solid Slate",
    tagline: "Modular Concrete Station",
    category: "Desk",
    basePrice: 95,
    livePrice: 75,
    browsers: 201,
    eco: 99,
    rating: 4.9,
    reviews: 340,
    image: slate,
    description:
      "Hand-cast concrete desk organizer. Modular geometry, four configurations, brutalist by design.",
  },
  {
    id: "chrono-ti",
    name: "Chrono Ti",
    tagline: "Titanium Field Watch",
    category: "Wear",
    basePrice: 520,
    livePrice: 429,
    browsers: 640,
    eco: 82,
    rating: 4.7,
    reviews: 890,
    image: watch,
    description:
      "Grade-5 titanium chronograph with sapphire crystal and 200m water resistance. Built for the analog rebellion.",
  },
  {
    id: "dark-pour",
    name: "Dark Pour Set",
    tagline: "Precision Extraction",
    category: "Kitchen",
    basePrice: 110,
    livePrice: 89,
    browsers: 174,
    eco: 96,
    rating: 4.8,
    reviews: 421,
    image: coffee,
    description:
      "Matte ceramic dripper and borosilicate carafe. Engineered for third-wave pour-over precision.",
  },
  {
    id: "fluid-chair",
    name: "Fluid Chair 01",
    tagline: "Iridescent Ergonomics",
    category: "Furniture",
    basePrice: 890,
    livePrice: 749,
    browsers: 921,
    eco: 91,
    rating: 4.9,
    reviews: 187,
    image: chair,
    description:
      "Molded composite shell with iridescent finish. Pneumatic lift, dynamic lumbar, ten-year warranty.",
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
