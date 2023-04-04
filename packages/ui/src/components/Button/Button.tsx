import clsx from "clsx";
import { type ButtonHTMLAttributes, forwardRef, type ForwardRefRenderFunction } from "react";

import { commonStyles, variantStyles } from "./styles";
import type { Variant } from "./types";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const ButtonComponent: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (props, ref) => {
  const { className, variant = "default", ...rest } = props;
  const finalClassName = clsx(commonStyles, variantStyles[variant], className);
  return <button className={finalClassName} ref={ref} {...rest} />;
};

export const Button = forwardRef(ButtonComponent);
