process.env.TS_NODE_PROJECT = './spec/e2e/tsconfig.json';
require('ts-node/register');
require('tsconfig-paths/register');

const { setHeadlessWhen } = require('@codeceptjs/configure');
const { bootstrapFn } = require('./spec/e2e/support/bootstrap.ts');
const { teardownFn } = require('./spec/e2e/support/teardown.ts');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

const browser = (process.env.PLAYWRIGHT_BROWSER)
  ? process.env.PLAYWRIGHT_BROWSER : 'chromium';
const runHeadless = (process.env.PLAYWRIGHT_RUN_HEADLESS === 'true') 
  ? true : false;

exports.config = {
  tests: './spec/e2e/**/*.spec.ts',
  output: './spec-output',
  helpers: {
    Playwright: {
      url: 'https://www.google.com/',
      show: (!runHeadless),
      browser: browser
    },
    PlaywrightHelper: {
      require: './spec/e2e/helpers/playwright.helper.ts'
    }
  },
  include: {
    I: './spec/e2e/steps_file.ts'
  },
  bootstrap: bootstrapFn,
  teardown: teardownFn,
  mocha: {
    reporterOptions: {
        reportDir: "spec-report-output"
    }
  },
  name: 'my-element',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    autoDelay: {
      enabled: true,
      delayBefore: 10,
      delayAfter: 350,
      methods: [
        "click",
        "fillField",
        "checkOption",
        "pressKey",
        "doubleClick",
        "rightClick"
      ]
    }
  },
  require: ["ts-node/register", "tsconfig-paths/register"],
  rerun: {
    minSuccess: 1,
    maxReruns: 3
  }
};