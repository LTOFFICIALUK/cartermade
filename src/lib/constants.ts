export const SITE_URL = "https://cartermade.co.uk";

export const BUSINESS = {
  name: "CarterMade",
  tagline: "Websites for local businesses that look like they mean it.",
  supporting:
    "Built by hand for owners who want clarity, trust, and enquiries — not another template.",
  location: "UK-wide",
  email: "luke@cartermade.co.uk",
  phone: "+447375388796",
  phoneDisplay: "+44 7375 388796",
  whatsapp: "https://wa.me/447375388796",
  founder: "Luke Carter",
} as const;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/approach", label: "Approach" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export type ProjectCategory = "local" | "trade" | "education";

export type Project = {
  slug: string;
  name: string;
  industry: string;
  category: ProjectCategory;
  url: string;
  summary: string;
  image: string;
  accent: string;
};

export const PROJECT_CATEGORIES: {
  id: ProjectCategory | "all";
  label: string;
}[] = [
  { id: "all", label: "All work" },
  { id: "local", label: "Local business" },
  { id: "trade", label: "Trade" },
  { id: "education", label: "Education" },
];

export const SERVICES = [
  {
    title: "Design & build",
    body: "Brand-first sites on Next.js — fast, responsive, and built to feel like yours.",
  },
  {
    title: "Local SEO & GEO",
    body: "Foundations so nearby customers find you — metadata, schema, and area pages when they matter.",
  },
  {
    title: "Content & CTAs",
    body: "Copy structure, enquiry paths, and WhatsApp or booking flows that actually get used.",
  },
  {
    title: "Launch & handoff",
    body: "Analytics, sitemap, and a site you can point at with confidence on day one.",
  },
] as const;

export const STUDIO_NOTES = [
  { label: "Based", value: "North West, UK" },
  { label: "Serving", value: "Businesses UK-wide" },
  { label: "Stack", value: "Next.js · TypeScript · Tailwind" },
  { label: "Enquiries", value: "WhatsApp-first" },
] as const;

export const PROJECTS: Project[] = [
  {
    slug: "cassia-accountancy",
    name: "Cassia Accountancy",
    industry: "Accountancy · Wirral",
    category: "local",
    url: "https://www.cassiaaccountancy.co.uk/",
    summary:
      "Clear, calm site for a small-business accountant — tax, MTD, and discovery calls without the jargon.",
    image: "/work/cassia.jpg",
    accent: "#5d6b5d",
  },
  {
    slug: "benza-autos",
    name: "Benza Autos",
    industry: "Mercedes specialist · Birkenhead",
    category: "local",
    url: "https://www.benza-autos-wirral.co.uk/",
    summary:
      "Dealer-level presence for an independent Mercedes workshop — servicing, STAR diagnostics, and bookings.",
    image: "/work/benza.jpg",
    accent: "#004094",
  },
  {
    slug: "big-dragons-gym",
    name: "Big Dragons Gym",
    industry: "24/7 gym · Blaenau Ffestiniog",
    category: "local",
    url: "https://www.bigdragonsgym.co.uk/",
    summary:
      "Bilingual community gym site — membership, PT, and nutrition with a crest-led brand.",
    image: "/work/big-dragons.jpg",
    accent: "#7a1f2b",
  },
  {
    slug: "polyblock",
    name: "Polyblock",
    industry: "Trade · Building materials",
    category: "trade",
    url: "https://polyblock.trade/",
    summary:
      "Trade-facing web presence built for clarity and credibility in a competitive materials market.",
    image: "/work/polyblock.jpg",
    accent: "#1a3a4a",
  },
  {
    slug: "successful-streamer",
    name: "Successful Streamer",
    industry: "Education · Streaming",
    category: "education",
    url: "https://successfulstreamer.com/",
    summary:
      "Research-backed streaming guides — structured content that positions authority and converts curiosity.",
    image: "/work/successful-streamer.jpg",
    accent: "#5b21b6",
  },
] as const;

export const APPROACH_STEPS = [
  {
    step: "01",
    title: "Brief",
    body: "We pin down who you serve, what you sell, and what a good enquiry looks like — before a pixel moves.",
  },
  {
    step: "02",
    title: "Design",
    body: "Brand-first layouts. One job per section. Imagery that shows the real business, not stock filler.",
  },
  {
    step: "03",
    title: "Build",
    body: "Fast, accessible Next.js sites with motion that feels inevitable — never noisy.",
  },
  {
    step: "04",
    title: "Launch",
    body: "SEO foundations, analytics, and a handoff you can actually use. Then we keep improving.",
  },
] as const;
