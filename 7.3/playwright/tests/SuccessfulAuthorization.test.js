const { test, expect } = require("@playwright/test");
const { email, password } = require("../user.js");

test("SuccessfulAutorization", async ({ page }) => {
    await page.goto("https://netology.ru/?modal=sign_in");
  
    await page.fill('[placeholder="Email"]', email);
  
    await page.fill('[placeholder="Пароль"]', password);
  
    await page.click('[data-testid="login-submit-btn"]');
  
    await expect(page).toHaveURL("https://netology.ru/profile");
  });