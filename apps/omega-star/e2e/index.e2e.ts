import { expect, test } from "@playwright/test";

const basePath = "/omega-star";

test("has title", async ({ page }) => {
  await page.goto(basePath);

  await expect(page).toHaveTitle("Myopic Design — Omega Star");
});

test("has heading", async ({ page }) => {
  await page.goto(basePath);

  const heading = await page.getByRole("heading", { level: 1 });
  await expect(heading).toContainText("Omega Star");
});
