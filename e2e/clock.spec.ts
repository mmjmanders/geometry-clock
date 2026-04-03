import { test, expect } from '@playwright/test'

test('should display progress indicator', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('#clock-progress > circle')).toHaveCount(2)
})

/* Parameterized tests */
;[
  {
    timestamp: new Date('2026-04-02T11:11:11+02:00'),
    hourLeftExpected: true,
    hourRightExpected: true,
    minuteLeftExpected: true,
    minuteRightExpected: true,
    secondLeftExpected: true,
    secondRightExpected: true,
  },
  {
    timestamp: new Date('2026-04-02T10:11:11+02:00'),
    hourLeftExpected: true,
    hourRightExpected: false,
    minuteLeftExpected: true,
    minuteRightExpected: true,
    secondLeftExpected: true,
    secondRightExpected: true,
  },
  {
    timestamp: new Date('2026-04-02T09:11:11+02:00'),
    hourLeftExpected: false,
    hourRightExpected: true,
    minuteLeftExpected: true,
    minuteRightExpected: true,
    secondLeftExpected: true,
    secondRightExpected: true,
  },
  {
    timestamp: new Date('2026-04-02T11:10:11+02:00'),
    hourLeftExpected: true,
    hourRightExpected: true,
    minuteLeftExpected: true,
    minuteRightExpected: false,
    secondLeftExpected: true,
    secondRightExpected: true,
  },
  {
    timestamp: new Date('2026-04-02T11:00:11+02:00'),
    hourLeftExpected: true,
    hourRightExpected: true,
    minuteLeftExpected: false,
    minuteRightExpected: false,
    secondLeftExpected: true,
    secondRightExpected: true,
  },
  {
    timestamp: new Date('2026-04-02T11:01:11+02:00'),
    hourLeftExpected: true,
    hourRightExpected: true,
    minuteLeftExpected: false,
    minuteRightExpected: true,
    secondLeftExpected: true,
    secondRightExpected: true,
  },
  {
    timestamp: new Date('2026-04-02T11:11:10+02:00'),
    hourLeftExpected: true,
    hourRightExpected: true,
    minuteLeftExpected: true,
    minuteRightExpected: true,
    secondLeftExpected: true,
    secondRightExpected: false,
  },
  {
    timestamp: new Date('2026-04-02T11:11:00+02:00'),
    hourLeftExpected: true,
    hourRightExpected: true,
    minuteLeftExpected: true,
    minuteRightExpected: true,
    secondLeftExpected: false,
    secondRightExpected: false,
  },
  {
    timestamp: new Date('2026-04-02T11:11:01+02:00'),
    hourLeftExpected: true,
    hourRightExpected: true,
    minuteLeftExpected: true,
    minuteRightExpected: true,
    secondLeftExpected: false,
    secondRightExpected: true,
  },
].forEach(
  ({
    timestamp,
    hourLeftExpected,
    hourRightExpected,
    minuteLeftExpected,
    minuteRightExpected,
    secondLeftExpected,
    secondRightExpected,
  }) => {
    test(`testing with ${timestamp.toISOString()}`, async ({ page }) => {
      await page.clock.setFixedTime(timestamp)
      await page.goto('/')
      await expect(page.locator('#clock-hours-left .hours')).toHaveCount(Number(hourLeftExpected))
      await expect(page.locator('#clock-hours-right .hours')).toHaveCount(Number(hourRightExpected))
      await expect(page.locator('#clock-minutes-left .minutes')).toHaveCount(
        Number(minuteLeftExpected),
      )
      await expect(page.locator('#clock-minutes-right .minutes')).toHaveCount(
        Number(minuteRightExpected),
      )
      await expect(page.locator('#clock-seconds-left .seconds')).toHaveCount(
        Number(secondLeftExpected),
      )
      await expect(page.locator('#clock-seconds-right .seconds')).toHaveCount(
        Number(secondRightExpected),
      )
    })
  },
)
