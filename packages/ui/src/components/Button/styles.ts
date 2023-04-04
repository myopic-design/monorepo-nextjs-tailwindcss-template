import type { Variant } from "./types";

export const commonStyles =
  "group inline-flex items-center justify-center rounded-md px-4 py-2 font-semibold";

export const variantStyles = {
  primary: "bg-blue-600 text-white hocus:bg-blue-700 dark:hocus:bg-blue-500",
  default:
    "bg-neutral-50 text-neutral-900 ring-1 ring-inset ring-neutral-300 hocus:bg-neutral-200 dark:bg-neutral-700 dark:text-white dark:ring-0 dark:hocus:bg-neutral-600",
  text: "text-neutral-900 hocus:bg-neutral-200 dark:text-white dark:hocus:bg-neutral-700",
} satisfies Record<Variant, string>;
