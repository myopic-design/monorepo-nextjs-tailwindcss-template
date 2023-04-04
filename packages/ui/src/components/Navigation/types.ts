import type { ButtonLinkProps } from "../Button";

export interface NavigationLink extends ButtonLinkProps {
  classNameMobile?: ButtonLinkProps["className"];
}
