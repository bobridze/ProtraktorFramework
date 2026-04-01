# DemoQA Protractor Automation Test

End-to-end test suite for [https://demoqa.com](https://demoqa.com) built with **Protractor** + **Jasmine** + **TypeScript**, following the **Page Object Model** pattern.

## Framework Structure

```
├── protractor.conf.ts          # Protractor config (directConnect, Jasmine, ChromeDriver)
├── protractor.d.ts             # Type augmentations for Protractor + Jasmine
├── tsconfig.json               # TypeScript compiler configuration
├── conf/
│   └── testData.ts             # Centralized test data and URL constants
├── helpers/
│   ├── logger.ts               # File + console logger with colour output
│   └── waitHelper.ts           # Reusable explicit-wait utilities
├── pages/
│   ├── basePage.ts             # Base page class (shared methods)
│   ├── demoqa.mainPage.ts      # Page object for the DemoQA Main page
│   ├── demoqa.elementsPage.ts  # Page object for the Elements page
│   ├── demoqa.formsPage.ts     # Page object for the Forms page
│   └── demoqa.textBoxPage.ts   # Page object for the Text Box page
├── specs/
│   ├── main.spec.ts            # Tests for the Main page
│   ├── elements.spec.ts        # Tests for the Elements page
│   ├── forms.spec.ts           # Tests for the Forms page
│   └── textBoxForm.spec.ts     # Tests for the Text Box form
├── dist/                       # Compiled JS output (auto-generated)
├── screenshots/                # Auto-captured screenshots on test failure
└── logs/
    └── test.log                # Runtime log output
```

- **Language**: TypeScript — compiled to `dist/` before test execution.
- **Runner**: Protractor with `directConnect: true` — no standalone WebDriver server required.
- **Framework**: Jasmine (assertion library + test runner).
- **Browser**: Chrome (via local `chromedriver`).
- **Pattern**: Page Object Model — locators and actions are encapsulated in `pages/`, keeping specs clean.
- **Base Page**: Common methods (`open`, `getTitle`, `scrollAndClick`, etc.) are inherited from `basePage.ts`.
- **Screenshots**: Automatically captured on test failure into `screenshots/`.

## Covered Tests

### `main.spec.ts` — Home Page (TC-013 to TC-021)
- Page title check
- "Join Now" button navigates to Selenium Training page
- Clicking each category card navigates to the correct URL:
  Elements, Forms, Alerts/Frame/Windows, Widgets, Interactions, Book Store Application
- Footer text verification

### `elements.spec.ts` — Elements Section (TC-001 to TC-012)
- Page title check
- Left-panel menu contains 9 items
- Clicking each menu item navigates to the correct sub-page:
  Text Box, Check Box, Radio Button, Web Tables, Buttons, Links,
  Broken Links – Images, Upload and Download, Dynamic Properties
- Footer text verification

### `forms.spec.ts` — Forms Section (TC-023 to TC-026)
- Page title check
- Left-panel menu item count
- Practice Form navigation
- Footer text verification

### `textBoxForm.spec.ts` — Text Box Form (TC-027 to TC-039)
- Page title and header check
- **Positive**: Submit with all fields, individual fields, special characters
- **Negative**: Empty form submit, invalid email formats (missing @, missing domain, spaces)
- Footer text verification

## Setup

1. Install dependencies:
   ```
   npm install
   ```

## Running the Tests

```
npm test
```

This will compile TypeScript (`tsc`) and then run Protractor against the compiled output.

## Requirements

- Node.js (v16+)
- Google Chrome browser
