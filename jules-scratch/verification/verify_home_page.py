from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:3000/")

    # Check for the main heading
    expect(page.locator("h1")).to_have_text("Welcome to the AI E-commerce Marketplace")

    # Check for the navigation links
    expect(page.get_by_role("link", name="Home")).to_be_visible()
    expect(page.get_by_role("link", name="Login")).to_be_visible()
    expect(page.get_by_role("link", name="Register")).to_be_visible()

    # The cart link should not be visible when logged out
    expect(page.get_by_role("link", name="Cart (0)")).not_to_be_visible()

    page.screenshot(path="jules-scratch/verification/home-page.png")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
