# Vurbl


# Install playwright:
* npm i -D @playwright/test
* npx playwright install


# Install AllureReports:
npm i -D allure-playwright


# Run all the tests:
npx playwright test


# Run tests in headed browsers:
npx playwright test --headed


# Run tests in a particular browser:
npx playwright test --browser=firefox


# Run in debug mode with Playwright Inspector:
npx playwright test --debug


# Scripts:
* "test:all": Run all the tests
* "test:prod:regression": Run all the tests in the RegressionSuite folder in production,
* "test:prod:functional": Run all the tests in the FunctionalSuite folder in production,
* "test:prod:smoke": Run all the tests in the SmokeSuite folder in production,
* "test:stg:regression": Run all the tests in the RegressionSuite folder in staging,
* "test:stg:functional": Run all the tests in the FunctionalSuite folder in staging,
* "test:stg:smoke": Run all the tests in the SmokeSuite folder in staging,
* "test:prod:anonymous": "Run all the tests in the AnonymousUser folder in production",
* "test:prod:logged": "Run all the tests in the LoggedUser folder in production


# Run only one test:
npx playwright test test path and test name --headed --project=prod or --project=stg


# Info:
https://playwright.dev/docs/test-cli
