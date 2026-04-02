import { test, expect } from '@playwright/test'

test('should display progress indicator', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('#clock-progress > circle')).toHaveCount(2)
})
