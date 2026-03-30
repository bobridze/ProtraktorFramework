exports.config = {
  framework: 'jasmine',
  directConnect: true,
  specs: ['specs/main.spec.js', 'specs/elements.spec.js', 'specs/forms.spec.js'],
  chromeDriver: './node_modules/chromedriver/lib/chromedriver/chromedriver.exe',
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--no-sandbox', '--disable-dev-shm-usage']
    }
  },
  onPrepare: function() {
    browser.waitForAngularEnabled(false);

    jasmine.getEnv().addReporter({
      specDone: function(result) {
        var status = result.status === 'passed' ? '\x1b[32m✔ Passed\x1b[0m' : '\x1b[31m✖ Failed\x1b[0m';
        var suite = '\x1b[90m' + result.fullName.replace(result.description, '').trim() + '\x1b[0m';
        console.log(status + ' - ' + suite + ' ' + result.description);
        if (result.status === 'failed' && result.failedExpectations.length > 0) {
          result.failedExpectations.forEach(function(failure) {
            console.log('  \x1b[31m' + failure.message + '\x1b[0m');
          });
        }
      }
    });
  },
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  }
};
