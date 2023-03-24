import { expect, test } from "@playwright/test";

const basePath = "/monorepo-nextjs-tailwindcss-template";

test("has title", async ({ page }) => {
  await page.goto(basePath);

  await expect(page).toHaveTitle("Myopic Design — Next.js & Tailwind CSS Monorepo Template");
});

test("has heading", async ({ page }) => {
  await page.goto(basePath);

  const heading = await page.getByRole("heading", { level: 1 });
  await expect(heading).toContainText("Next.js & Tailwind CSS Monorepo Template");
});
