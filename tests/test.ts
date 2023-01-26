import { expect, test } from "@playwright/test";

test("about page has expected h1", async ({ page }) => {
  await page.goto("/complete");
  await expect(page.locator("p")).toHaveText("支払いが完了しました！");
});
