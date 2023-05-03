const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: !!process.env.ANALYZE,
});

module.exports = ({ basePath }) => {
  /** @type {import('next').NextConfig} */
  const config = {
    basePath,
    images: { unoptimized: true },
    output: "export",
    pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
    reactStrictMode: true,
    transpilePackages: ["ui", "utils"],
  };

  return withBundleAnalyzer(config);
};
