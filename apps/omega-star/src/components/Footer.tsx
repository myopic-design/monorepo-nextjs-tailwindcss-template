import { Footer } from "ui";

const links = [
  { children: "Features", href: "#features", variant: "text" },
  { children: "Testimonials", href: "#testimonials", variant: "text" },
  { children: "Pricing", href: "#pricing", variant: "text" },
] as const;

const PageFooter = () => {
  return <Footer links={links} />;
};

export { PageFooter as Footer };
