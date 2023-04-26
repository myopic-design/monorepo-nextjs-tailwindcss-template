import * as crypto from "node:crypto";

type CspDirective =
  // Fetch directives:
  | "child-src"
  | "connect-src"
  | "default-src"
  | "font-src"
  | "frame-src"
  | "img-src"
  | "manifest-src"
  | "media-src"
  | "object-src"
  | "prefetch-src" // deprecated
  | "script-src"
  | "script-src-elem"
  | "script-src-attr"
  | "style-src"
  | "style-src-elem"
  | "style-src-attr"
  | "worker-src"
  // Document directives:
  | "base-uri"
  | "sandbox"
  // Navigation directives:
  | "form-action"
  | "frame-ancestors"
  | "navigate-to" // experimental
  // Reporting directives:
  | "report-uri" // deprecated
  | "report-to"
  // Other directives:
  | "require-trusted-types-for" // experimental
  | "trusted-types" // experimental
  | "upgrade-insecure-requests"
  // Deprecated directives:
  | "block-all-mixed-content" // deprecated
  | "plugin-types" // deprecated
  | "referrer"; // deprecated

type CspDirectives = Partial<Record<CspDirective, string[] | null>>;

const cspHashOf = (text: string) => {
  const hash = crypto.createHash("sha256");
  hash.update(text);
  return `'sha256-${hash.digest("base64")}'`;
};

const flattenDirectives = (directives: CspDirectives): string =>
  Object.entries(directives)
    .reduce<string[]>((acc, directive) => {
      const [key, values] = directive;
      if (values === null) {
        acc.push(key);
      } else {
        acc.push(directive.flat().join(" "));
      }
      return acc;
    }, [])
    .join("; ");

const cspDev = {
  "default-src": ["'none'"],
  "connect-src": ["'self'"],
  "font-src": ["'self'"],
  "frame-src": ["'self'"],
  "img-src": ["'self'"],
  "script-src": ["'self'", "'unsafe-eval'"],
  "style-src": ["'self'", "'unsafe-inline'"],
} satisfies CspDirectives;

const cspProd = {
  "upgrade-insecure-requests": null,
  "default-src": ["'none'"],
  "connect-src": ["'self'"],
  "font-src": ["'self'"],
  "frame-src": ["'self'"],
  "img-src": ["'self'"],
  "script-src": ["'self'"],
  "style-src": ["'self'"],
} satisfies CspDirectives;

export const getCspContent = (inlineScript: string): string => {
  const csp = process.env["NODE_ENV"] === "production" ? cspProd : cspDev;
  const cspWithInlineScriptHash = {
    ...csp,
    "script-src": [...csp["script-src"], cspHashOf(inlineScript)],
  };
  return flattenDirectives(cspWithInlineScriptHash);
};
