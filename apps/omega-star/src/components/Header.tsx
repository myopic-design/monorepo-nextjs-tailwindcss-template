import type { FunctionComponent } from "react";
import { Header } from "ui";

const links = {
  leftLinks: [
    { children: "Features", href: "#features", variant: "text" },
    { children: "Testimonials", href: "#testimonials", variant: "text" },
    { children: "Pricing", href: "#pricing", variant: "text" },
  ],
  rightLinks: [
    {
      children: "Sign\u00a0in",
      className: "hidden xs:block",
      classNameMobile: "block xs:hidden",
      href: "/signin",
      variant: "text",
    },
    {
      children: (
        <span>
          Get{"\u00a0"}started<span className="hidden lg:inline">{"\u00a0"}today</span>
        </span>
      ),
      classNameMobile: "hidden",
      href: "/signup",
      variant: "primary",
    },
  ],
} as const;

const PageHeader: FunctionComponent = () => {
  return <Header {...links} />;
};

export { PageHeader as Header };
