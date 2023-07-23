import clsx from "clsx";
import Link from "next/link";
import { type ComponentProps, forwardRef, type ForwardRefRenderFunction } from "react";

import { commonStyles, variantStyles } from "./styles";
import type { Variant } from "./types";

export interface ButtonLinkProps extends ComponentProps<typeof Link> {
  variant?: Variant;
}

const ButtonLinkComponent: ForwardRefRenderFunction<HTMLAnchorElement, ButtonLinkProps> = (
  props,
  ref,
) => {
  const { className, variant = "default", ...rest } = props;
  const finalClassName = clsx(commonStyles, variantStyles[variant], className);
  return <Link className={finalClassName} ref={ref} {...rest} />;
};

export const ButtonLink = forwardRef(ButtonLinkComponent);
