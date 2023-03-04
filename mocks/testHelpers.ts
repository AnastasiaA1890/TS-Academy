import { Route, Page } from '@playwright/test';

export default function setupMockData(page: Page, mockArr){
  mockArr.forEach(async (mock) => {
    await page.route(mock.url, async (route: Route) => {
      await route.fulfill( {
        body: JSON.stringify(mock.mock)
      })
    })
  });
}
