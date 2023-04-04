import Link from "next/link";
import type { FunctionComponent } from "react";

import { ButtonLink } from "../Button";
import { Logo } from "../Logo";
import { MobileNavigation } from "./MobileNavigation";
import type { NavigationLink } from "./types";

export interface NavigationProps {
  leftLinks?: readonly NavigationLink[];
  rightLinks?: readonly NavigationLink[];
}

export const Navigation: FunctionComponent<NavigationProps> = (props) => {
  const { leftLinks = [], rightLinks = [] } = props;

  return (
    <nav aria-label="main" className="relative flex justify-between">
      <div className="flex items-center gap-x-5 md:gap-x-10">
        <Link aria-label="Home" href="#">
          <Logo className="h-10 w-auto" />
        </Link>
        <div className="hidden gap-x-5 md:flex">
          {leftLinks.map(({ classNameMobile: _classNameMobile, ...link }) => (
            <ButtonLink {...link} key={link.href.toString()} />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-x-5 md:gap-x-10">
        {rightLinks.map(({ classNameMobile: _classNameMobile, ...link }) => (
          <ButtonLink {...link} key={link.href.toString()} />
        ))}
        <div className="-mr-1 md:hidden">
          <MobileNavigation {...props} />
        </div>
      </div>
    </nav>
  );
};
