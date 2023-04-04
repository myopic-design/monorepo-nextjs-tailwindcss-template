import { Popover, Transition } from "@headlessui/react";
import { Fragment, type FunctionComponent } from "react";

import { MobileNavigationButton } from "./MobileNavigationButton";
import { MobileNavigationIcon } from "./MobileNavigationIcon";
import type { NavigationLink } from "./types";

export interface MogileNavigationProps {
  leftLinks?: readonly NavigationLink[];
  rightLinks?: readonly NavigationLink[];
}

export const MobileNavigation: FunctionComponent<MogileNavigationProps> = (props) => {
  const { leftLinks = [], rightLinks = [] } = props;

  return (
    <Popover>
      <Popover.Button
        aria-label="Toggle Navigation"
        className="relative z-10 flex h-8 w-8 items-center justify-center"
      >
        {({ open }) => <MobileNavigationIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-neutral-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-xl bg-neutral-50 p-4 text-neutral-900 shadow-xl dark:bg-neutral-900"
          >
            {leftLinks.map(({ classNameMobile, ...link }) => (
              <MobileNavigationButton
                {...link}
                className={classNameMobile}
                key={link.href.toString()}
              />
            ))}
            <hr className="xs:hidden m-2 border-neutral-200 dark:border-neutral-700" />
            {rightLinks.map(({ classNameMobile, ...link }) => (
              <MobileNavigationButton
                {...link}
                className={classNameMobile}
                key={link.href.toString()}
              />
            ))}
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
};
