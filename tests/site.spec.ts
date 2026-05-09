import { test, expect } from '@playwright/test'

// ─── Homepage ──────────────────────────────────────────────────────────────

test.describe('Homepage /', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('city search input is visible', async ({ page }) => {
    const input = page.locator('input[placeholder="Is noshtio available in your city?"]')
    await expect(input).toBeVisible()
  })

  test('city search filters results — typing "Delhi" shows dropdown with Available badge', async ({ page }) => {
    const input = page.locator('input[placeholder="Is noshtio available in your city?"]')
    await input.fill('Delhi')
    // Dropdown ul appears with Delhi button and Available/Coming Soon label
    await expect(page.locator('ul').filter({ hasText: 'Delhi' }).first()).toBeVisible()
    await expect(page.locator('ul').filter({ hasText: 'Available' }).first()).toBeVisible()
  })

  test('city search shows "Coming Soon" for unlaunched cities', async ({ page }) => {
    const input = page.locator('input[placeholder="Is noshtio available in your city?"]')
    await input.fill('Mumbai')
    await expect(page.locator('ul').filter({ hasText: 'Coming Soon' }).first()).toBeVisible()
  })

  test('chatbot button exists', async ({ page }) => {
    await expect(page.locator('button[aria-label="Open AI chat"]')).toBeVisible()
  })
})

// ─── For Vendors ───────────────────────────────────────────────────────────

test.describe('For Vendors /for-vendors', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/for-vendors')
  })

  test('fullName field exists', async ({ page }) => {
    await expect(page.locator('#fullName')).toBeVisible()
  })

  test('phone field exists', async ({ page }) => {
    await expect(page.locator('#phone')).toBeVisible()
  })

  test('city select exists', async ({ page }) => {
    await expect(page.locator('#city')).toBeVisible()
  })

  test('category select exists', async ({ page }) => {
    await expect(page.locator('#category')).toBeVisible()
  })

  test('monthlyOrders select exists', async ({ page }) => {
    await expect(page.locator('#monthlyOrders')).toBeVisible()
  })
})

// ─── Cities ────────────────────────────────────────────────────────────────

test.describe('Cities /cities', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/cities')
  })

  test('shows 16 city cards', async ({ page }) => {
    // Each CityCard renders an <h3> with the city name
    await expect(page.locator('h3')).toHaveCount(16)
  })

  test('shows exactly 4 Available badges', async ({ page }) => {
    // Available cities: Delhi, Noida, Ghaziabad, Gurugram
    const available = page.locator('text=✅ Available')
    await expect(available).toHaveCount(4)
  })

  test('city search input exists and filters cards', async ({ page }) => {
    const input = page.locator('input[placeholder="Search city or state…"]')
    await expect(input).toBeVisible()
    await input.fill('Delhi')
    // Only Delhi card should remain
    await expect(page.locator('h3')).toHaveCount(1)
    await expect(page.getByRole('heading', { name: 'Delhi', level: 3 })).toBeVisible()
  })
})

// ─── Vendors ───────────────────────────────────────────────────────────────

test.describe('Vendors /vendors', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/vendors')
  })

  test('shows 12 vendor cards by default', async ({ page }) => {
    // VendorsDirectory renders each vendor as <article>
    await expect(page.locator('article')).toHaveCount(12)
  })

  test('city filter — Delhi shows 3 vendors', async ({ page }) => {
    await page.getByRole('button', { name: 'Delhi' }).click()
    await expect(page.locator('article')).toHaveCount(3)
  })

  test('city filter — reset to All Cities restores 12 vendors', async ({ page }) => {
    await page.getByRole('button', { name: 'Delhi' }).click()
    await expect(page.locator('article')).toHaveCount(3)
    await page.getByRole('button', { name: 'All Cities' }).click()
    await expect(page.locator('article')).toHaveCount(12)
  })

  test('category filter — Restaurant shows 3 vendors', async ({ page }) => {
    await page.getByRole('button', { name: 'Restaurant' }).click()
    await expect(page.locator('article')).toHaveCount(3)
  })

  test('search by vendor name filters results', async ({ page }) => {
    await page.locator('input[placeholder="Search vendors or cuisine..."]').fill('Biryani')
    await expect(page.locator('article')).toHaveCount(1)
    await expect(page.locator('article').first()).toContainText('Biryani Bros')
  })

  test('View Menu button exists on each card', async ({ page }) => {
    const buttons = page.getByRole('link', { name: 'View Menu' })
    await expect(buttons).toHaveCount(12)
  })
})

// ─── Contact ───────────────────────────────────────────────────────────────

test.describe('Contact /contact', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact')
  })

  test('fullName field exists', async ({ page }) => {
    await expect(page.locator('#fullName')).toBeVisible()
  })

  test('email field exists', async ({ page }) => {
    await expect(page.locator('#email')).toBeVisible()
  })

  test('subject select exists', async ({ page }) => {
    await expect(page.locator('#subject')).toBeVisible()
  })

  test('message textarea exists', async ({ page }) => {
    await expect(page.locator('#message')).toBeVisible()
  })
})

// ─── Download ──────────────────────────────────────────────────────────────

test.describe('Download /download', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/download')
  })

  test('App Store button exists', async ({ page }) => {
    await expect(
      page.locator('a[aria-label*="App Store"]').first()
    ).toBeVisible()
  })

  test('Google Play button exists', async ({ page }) => {
    await expect(
      page.locator('a[aria-label*="Google Play"]').first()
    ).toBeVisible()
  })

  test('hero headline is visible', async ({ page }) => {
    await expect(
      page.getByRole('heading', { level: 1 })
    ).toContainText('Download noshtio App')
  })

  test('4 feature cards are shown', async ({ page }) => {
    // Each feature card has an <h3> title
    const featureHeadings = ['Zero Commission', 'Hyperlocal Discovery', 'Real-time Tracking', 'Direct Vendor Chat']
    for (const title of featureHeadings) {
      await expect(page.getByRole('heading', { name: title, level: 3 })).toBeVisible()
    }
  })
})

// ─── Admin ─────────────────────────────────────────────────────────────────

test.describe('Admin /admin', () => {
  test('password login form is present', async ({ page }) => {
    await page.goto('/admin')
    await expect(page.locator('#admin-password')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible()
  })

  test('wrong password shows error', async ({ page }) => {
    await page.goto('/admin')
    await page.locator('#admin-password').fill('wrongpassword')
    await page.getByRole('button', { name: 'Sign In' }).click()
    await expect(page.getByText('Incorrect password')).toBeVisible()
  })

  test('correct password logs in and shows dashboard', async ({ page }) => {
    await page.goto('/admin')
    await page.locator('#admin-password').fill('noshtio_admin')
    await page.getByRole('button', { name: 'Sign In' }).click()
    // Dashboard header and tabs should appear
    await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible()
    await expect(page.getByRole('button', { name: /Overview/ })).toBeVisible()
    await expect(page.getByRole('button', { name: /Vendor Leads/ })).toBeVisible()
    await expect(page.getByRole('button', { name: /Enquiries/ })).toBeVisible()
    await expect(page.getByRole('button', { name: /App Downloads/ })).toBeVisible()
  })

  test('admin page is excluded from search engines', async ({ page }) => {
    await page.goto('/admin')
    const robots = page.locator('meta[name="robots"]')
    await expect(robots).toHaveAttribute('content', /noindex/)
  })
})

// ─── Navbar ────────────────────────────────────────────────────────────────

test.describe('Navbar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('Vendors link exists in desktop nav', async ({ page }) => {
    // Desktop nav is visible at 1280px (default Desktop Chrome viewport)
    await expect(page.locator('nav a[href="/vendors"]').first()).toBeVisible()
  })

  test('Cities link exists in desktop nav', async ({ page }) => {
    await expect(page.locator('nav a[href="/cities"]').first()).toBeVisible()
  })

  test('For Vendors link exists', async ({ page }) => {
    await expect(page.locator('nav a[href="/for-vendors"]').first()).toBeVisible()
  })

  test('logo links to homepage', async ({ page }) => {
    await expect(page.locator('header a[href="/"]').first()).toBeVisible()
  })
})

// ─── Footer ────────────────────────────────────────────────────────────────

test.describe('Footer', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
  })

  test('Vendor Directory link exists in footer', async ({ page }) => {
    await expect(page.locator('footer a[href="/vendors"]')).toBeVisible()
  })

  test('Cities link exists in footer Quick Links', async ({ page }) => {
    await expect(page.locator('footer a[href="/cities"]')).toBeVisible()
  })

  test('Privacy Policy link exists', async ({ page }) => {
    await expect(page.locator('footer a[href="/privacy-policy"]')).toBeVisible()
  })

  test('WhatsApp support link exists', async ({ page }) => {
    await expect(page.locator('footer a[href*="wa.me"]')).toBeVisible()
  })
})
