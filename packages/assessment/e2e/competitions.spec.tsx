import { type Route, expect, test } from "@playwright/test";
import routes from "~/constants/routes";
import { MockCompetitions } from "@fareeds-remix-app/common/models/static/competitions";
import { myTest } from "@fareeds-remix-app/common/fixtures/competitions";

const baseURL = process.env.URL || "http://localhost:3000";

myTest("competitions page", async ({ myPage }) => {
  await myPage.route(baseURL + routes.competitions, async (route: Route) => {
    const json = MockCompetitions;
    await route.fulfill({ json });
  });
  await myPage.goto(baseURL + routes.competitions);
});

test("competitions page -  Rules Model", async ({ page }) => {
  await page.route("*/**/api/v1/mock", async (route: Route) => {
    const json = MockCompetitions;
    await route.fulfill({ json });
  });
  await page.goto(baseURL + routes.competitions);

  const rulesButton = await page.getByText("Rules").first();
  await expect(rulesButton).toBeVisible();
  await expect(rulesButton).not.toBeDisabled();
  await rulesButton.click();

  await expect(
    await page.getByText("November Demo Competition").nth(1)
  ).toBeVisible();
  await expect(page.getByText("First Place")).toBeVisible();
  await expect(page.getByText("$300k Royal Challenge")).toBeVisible();
  await expect(page.getByText("Second Place")).toBeVisible();
  await expect(page.getByText("$200k Royal Challenge")).toBeVisible();
  await expect(page.getByText("Third Place")).toBeVisible();
  await expect(page.getByText("$100k Royal Challenge")).toBeVisible();

  // Other positions
  await expect(page.getByText("4th Place")).toBeVisible();
  await expect(page.getByText("5th Place")).toBeVisible();

  await expect(page.getByText(MockCompetitions[0]?.rule)).toBeVisible();
  await expect(page.locator('[name="full-faq"]')).toBeVisible();

  await page.locator('[name="close-rules-modal"]').click();
  await expect(page.locator('[name="full-faq"]')).not.toBeVisible();
});
