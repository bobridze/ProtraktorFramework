# DemoQA Protractor Automation Test

End-to-end test suite for [https://demoqa.com] built with **Protractor** + **Jasmine**, following the **Page Object Model** pattern.

## Framework Structure

```
├── protractor.conf.js       # Protractor config (directConnect, Jasmine, ChromeDriver)
├── pages/
│   ├── demoqa.mainPage.js   # Page object for the DemoQA Main page
│   └── demoqa.elementsPage.js # Page object for the Elements page
└── specs/
    ├── main.spec.js         # Tests for the Main page
    └── elements.spec.js     # Tests for the Elements page
```

- **Runner**: Protractor with `directConnect: true` — no standalone WebDriver server required.
- **Framework**: Jasmine (assertion library + test runner).
- **Browser**: Chrome (via local `chromedriver`).
- **Pattern**: Page Object Model — locators and actions are encapsulated in `pages/`, keeping specs clean.

## Covered Tests

### `main.spec.js` — Home Page
- Page title check
- "Join Now" button navigates to Selenium Training page
- Clicking each category card navigates to the correct URL:
  Elements, Forms, Alerts/Frame/Windows, Widgets, Interactions, Book Store Application

### `elements.spec.js` — Elements Section
- Page title check
- Left-panel menu contains 9 items
- Clicking each menu item navigates to the correct sub-page:
  Text Box, Check Box, Radio Button, Web Tables, Buttons, Links,
  Broken Links – Images, Upload and Download, Dynamic Properties

## Setup

1. Install dependencies:
   ```
   npm install
   ```

## Running the Tests

```
npm test
```

Or directly:
```
npx protractor protractor.conf.js
```

## Requirements

- Node.js
- Google Chrome browser
