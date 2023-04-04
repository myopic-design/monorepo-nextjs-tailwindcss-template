import { Popover } from "@headlessui/react";
import { forwardRef, type ForwardRefRenderFunction, type Ref } from "react";

import { ButtonLink, type ButtonLinkProps } from "../Button";

const MobileNavigationButtonLinkComponent: ForwardRefRenderFunction<
  HTMLAnchorElement,
  ButtonLinkProps
> = (props, ref) => {
  return <ButtonLink {...props} variant="text" ref={ref} />;
};

const MobileNavigationButtonLink = forwardRef(MobileNavigationButtonLinkComponent);

const MobileNavigationButtonComponent: ForwardRefRenderFunction<
  HTMLAnchorElement,
  ButtonLinkProps
> = (props, ref) => {
  return (
    <Popover.Button
      {...props}
      as={MobileNavigationButtonLink}
      ref={ref as Ref<HTMLButtonElement>}
    />
  );
};

export const MobileNavigationButton = forwardRef(MobileNavigationButtonComponent);
