import clsx from "clsx";
import type { FunctionComponent } from "react";

export interface MobileNavigationIconProps {
  open: boolean;
}

export const MobileNavigationIcon: FunctionComponent<MobileNavigationIconProps> = (props) => {
  const { open } = props;

  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-neutral-900 dark:stroke-white"
      fill="none"
      strokeLinecap="round"
      strokeWidth={2}
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx("origin-center transition", open && "scale-90 opacity-0")}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx("origin-center transition", !open && "scale-90 opacity-0")}
      />
    </svg>
  );
};
