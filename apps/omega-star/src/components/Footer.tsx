import type { FunctionComponent } from "react";
import { Footer } from "ui";

const links = [
  { children: "Features", href: "#features", variant: "text" },
  { children: "Testimonials", href: "#testimonials", variant: "text" },
  { children: "Pricing", href: "#pricing", variant: "text" },
] as const;

const PageFooter: FunctionComponent = () => {
  return <Footer links={links} />;
};

export { PageFooter as Footer };
