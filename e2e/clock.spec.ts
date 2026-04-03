import { test, expect } from '@playwright/test'

test('should display progress indicator', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('#clock-progress > circle')).toHaveCount(2)
})

/* Test for elements visible in SVG */
;[
  ...Array(24)
    .fill(0)
    .map((_, i) => ({
      timestamp: new Date(`2026-04-03T${String(i).padStart(2, '0')}:00:00+02:00`),
      hourLeftCircles: (i % 12 || 12) >= 10 ? 1 : 0,
      hourRightCircles: (i % 12 || 12) % 10 === 0 ? 0 : (i % 12 || 12) % 10,
      minuteLeftCircles: 0,
      minuteRightCircles: 0,
      secondLeftCircles: 0,
      secondRightCircles: 0,
    })),
  ...Array(60)
    .fill(0)
    .map((_, i) => ({
      timestamp: new Date(`2026-04-03T00:${String(i).padStart(2, '0')}:00+02:00`),
      hourLeftCircles: 1,
      hourRightCircles: 2,
      minuteLeftCircles:
        Math.floor(i / 10) === 0 ? 0 : Math.floor(i / 10) === 1 ? 1 : Math.floor(i / 10),
      minuteRightCircles: i % 10 === 0 ? 0 : i % 10 === 1 ? 1 : i % 10,
      secondLeftCircles: 0,
      secondRightCircles: 0,
    })),
  ...Array(60)
    .fill(0)
    .map((_, i) => ({
      timestamp: new Date(`2026-04-03T00:00:${String(i).padStart(2, '0')}+02:00`),
      hourLeftCircles: 1,
      hourRightCircles: 2,
      minuteLeftCircles: 0,
      minuteRightCircles: 0,
      secondLeftCircles:
        Math.floor(i / 10) === 0 ? 0 : Math.floor(i / 10) === 1 ? 1 : Math.floor(i / 10),
      secondRightCircles: i % 10 === 0 ? 0 : i % 10 === 1 ? 1 : i % 10,
    })),
].forEach(
  (
    {
      timestamp,
      hourLeftCircles,
      hourRightCircles,
      minuteLeftCircles,
      minuteRightCircles,
      secondLeftCircles,
      secondRightCircles,
    },
    i,
  ) => {
    test(`testing visibility of SVG elements with ${timestamp.toISOString()} with index ${i}`, async ({
      page,
    }) => {
      await page.clock.setFixedTime(timestamp)
      await page.goto('/')
      await expect(page.locator('#clock-hours-left circle')).toHaveCount(hourLeftCircles)
      await expect(page.locator('#clock-hours-right circle')).toHaveCount(hourRightCircles)
      await expect(page.locator('#clock-minutes-left circle')).toHaveCount(minuteLeftCircles)
      await expect(page.locator('#clock-minutes-right circle')).toHaveCount(minuteRightCircles)
      await expect(page.locator('#clock-seconds-left circle')).toHaveCount(secondLeftCircles)
      await expect(page.locator('#clock-seconds-right circle')).toHaveCount(secondRightCircles)
    })
  },
)
