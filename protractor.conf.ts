import * as path from 'path';
import * as fs from 'fs';
import { Config, browser } from 'protractor';

const SCREENSHOT_DIR = path.join(__dirname, '..', 'screenshots');

export const config: Config = {
  framework: 'jasmine',
  directConnect: true,
  baseUrl: 'https://demoqa.com',
  specs: ['specs/main.spec.js', 'specs/elements.spec.js', 'specs/forms.spec.js', 'specs/textBoxForm.spec.js'],
  chromeDriver: path.join(__dirname, '..', 'node_modules', 'chromedriver', 'lib', 'chromedriver', 'chromedriver.exe'),
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--no-sandbox', '--disable-dev-shm-usage']
    }
  },
  onPrepare() {
    browser.waitForAngularEnabled(false);

    if (!fs.existsSync(SCREENSHOT_DIR)) {
      fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
    }

    jasmine.getEnv().addReporter({
      specDone(result: any) {
        const status = result.status === 'passed' ? '\x1b[32m✔ Passed\x1b[0m' : '\x1b[31m✖ Failed\x1b[0m';
        const suite = '\x1b[90m' + result.fullName.replace(result.description, '').trim() + '\x1b[0m';
        console.log(`${status} - ${suite} ${result.description}`);
        if (result.status === 'failed') {
          result.failedExpectations.forEach((failure: any) => {
            console.log(`  \x1b[31m${failure.message}\x1b[0m`);
          });

          const filename = result.fullName.replace(/[^a-zA-Z0-9_-]/g, '_') + '.png';
          browser.takeScreenshot().then((png: string) => {
            const filePath = path.join(SCREENSHOT_DIR, filename);
            fs.writeFileSync(filePath, png, { encoding: 'base64' });
            console.log(`  \x1b[33mScreenshot saved: ${filePath}\x1b[0m`);
          });
        }
      }
    });
  },
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print() {}
  }
};
