import type { Options } from "tsup";
import { defineConfig } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["src/index.ts", "src/styles.css"],
  external: ["next", "react"],
  format: ["esm"],
  clean: true,
  dts: true,
  minify: true,
  splitting: true,
  treeshake: true,
  ...options,
}));
