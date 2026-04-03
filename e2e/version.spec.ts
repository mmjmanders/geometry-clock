import { test, expect } from '@playwright/test'

test('should display version', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('.version')).toHaveText(/[A-Fa-f0-9]{7}/)
})
