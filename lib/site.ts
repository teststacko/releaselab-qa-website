// Single source of truth for site-wide constants. Change once, updates everywhere.
export const site = {
  name: "ReleaseLab QA",
  tagline: "Engineering Quality, Automation & AI Reliability",
  description:
    "A quality engineering partner for growing software teams: ship reliably, trust your AI, and eliminate repetitive work.",
  calendly: "https://calendly.com/releaselabqa/30min",
  email: "releaselabqa@gmail.com",
  linkedin: "https://www.linkedin.com/company/releaselabqa/",
  formspreeId: "mqpzelwr",
  // Paste the public GitHub repo URL here once it exists. Empty = "coming soon" is shown.
  githubRepo: "",

  // Brand images live in /public/images. width/height only reserve space and describe the
  // file's proportions: images are always drawn at their own aspect ratio, never stretched.
 logo: {
  src: "/images/logo.png",
  width: 151,
  height: 143,
},
  // Optional: a logo variant that reads well on the LIGHT theme. Leave "" and the main logo
  // is shown on a dark plate in light theme, so it stays readable either way.
  logoLight: "/images/logo4.png",
  hero: { src: "/images/dashboard.png", width: 1000, height: 500 },
  // Optional: a hero variant for the LIGHT theme. Leave "" to use the same image in both.
  heroLight: "",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/work" },
  { label: "Become a Partner", href: "/partners" },
  { label: "Our Products", href: "/tools" },
  { label: "About", href: "/about" },
];

export const primaryCta = { label: "Let's Talk", href: "/consultation" };

export const footerColumns = [
  {
    title: "What we do",
    links: [
      { label: "Ship Reliably", href: "/services#ship-reliably" },
      { label: "Trust Your AI", href: "/services#trust-your-ai" },
      { label: "Eliminate Repetitive Work", href: "/services#automate" },
      { label: "AI & LLM Testing", href: "" },
      { label: "Automation Testing", href: "" },
      { label: "Performance Testing", href: "" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "Our Work", href: "/work" },
      { label: "Become a Partner", href: "/partners" },
      { label: "Our Products", href: "/tools" },
      { label: "About", href: "/about" },
      { label: "Consultation", href: "/consultation" },
    ],
  },
];