let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  });

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual("GitHub for teams · Build like the best teams on the planet · GitHub", {timeout: 60000});
  });

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content", {timeout: 60000});
  });

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team", {timeout: 60000})
  });
});

describe("Task2", () => {

  test("The Entreprise h1 header content'", async () => {
    await page.goto("https://github.com/enterprise");
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const titleEntr = await page.title();
    expect(titleEntr).toEqual("The AI Powered Developer Platform. · GitHub", {
      timeout: 60000,
    });
  });

  test("The Security h1 header content'", async () => {
    await page.goto("https://github.com/security");
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const titleSec = await page.title();
    expect(titleSec).toEqual("GitHub Security · GitHub", {
      timeout: 60000,
    });
  });

  test("The Pricing h1 header content'", async () => {
    await page.goto("https://github.com/pricing");
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const titlePric = await page.title();
    expect(titlePric).toEqual("Pricing · Plans for every developer · GitHub", {
      timeout: 60000,
    });
  });
});
