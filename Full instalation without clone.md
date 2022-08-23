# Telnyx_cypress_cucumber_HTMLreport


## 1. Install 
in IDE enter
```
npm init
npm install cypress

```
## 1.1. Install plugin Cucumber:
```
npm install @badeball/cypress-cucumber-preprocesso

```
## 1.2. Install cypress-browserify-preprocessor<br>
```
npm install --save-dev @cypress/browserify-preprocessor
```
## 1.3. configure cypress.config.js as follows:
```
const { defineConfig } = require("cypress");
    const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
    const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

    async function setupNodeEvents(on, config) {
    await preprocessor.addCucumberPreprocessorPlugin(on, config);

    on("file:preprocessor", browserify.default(config));

    // Make sure to return the config object as it might have been modified by the plugin.
     return config;
    }

    module.exports = defineConfig({
    e2e: {
    specPattern: "**/*.feature",
    video: false,
    setupNodeEvents,
    },
    });
```
## 1.4. Add to package.json stepDefinition:
```
"stepDefinitions": [
    "cypress/e2e/**/*.{js,ts}",
    "cypress/e2e/.{js,ts}",
    "cypress/support/step_definitions/**/*.{js,ts}"
  ]

```
## 1.5. Install xpath plugin
```
npm i cypress-xpath
```
Then add path to plugin: 
```
import 'cypress-xpath'
```

into:  cypress/support/e2e.js


## 2. Install HTML reporter
```
npm install multiple-cucumber-html-reporter --save-dev

```

## 2.1. Create: cucumber-html-report.js in root of project configer as follows:

```
const report = require("multiple-cucumber-html-reporter");
  report.generate({
  jsonDir: "jsonlogs", // ** Path of .json file **//
  reportPath: "./reports/cucumber-htmlreport.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "XXX",
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "10",
    },
   },
  });
```
## 2.2 Download cucumber formater according to your system from:


https://github.com/cucumber/json-formatter/releases/tag/v19.0.0 

## 2.3 Pass it into root of project and rename on:
```
cucumber-json-formatter.exe
```
## 2.4 Add to pacjage.json path where to create results:

```
"cypress-cucumber-preprocessor": {
    "json": {
      "enabled": true,
      "output": "jsonlogs/log.json",
      "formater": "cucumber-json-formatter.exe"
    },
    "messages": {
      "enabled": true,
      "output": "jsonlogs/messages.ndjson"
    }
  
   }
```

## 3. Run tests
```
npx cypress open   (it will open cypress GUI where you can run tests)  
npm run test:      (run test in headless mode )
   

```


## 3.1. Generate report
```
node cucumber-html-report.js
```
## 4.    If some problem, delete node_moduls,  then: npm i

## 5. Package.json looks like:

```
{
  "name": "telnyx_cypress_cucumber_html_report",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "npx cypress run",
    "report": "node cucumber-html-report.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@badeball/cypress-cucumber-preprocessor": "^12.0.1",
    "cypress": "^10.6.0",
    "cypress-xpath": "^2.0.1"
  },
  "devDependencies": {
    "@cypress/browserify-preprocessor": "^3.0.2",
    "multiple-cucumber-html-reporter": "^1.21.6"
  },
  "cypress-cucumber-preprocessor": {
    "json": {
      "enabled": true,
      "output": "jsonlogs/log.json",
      "formater": "cucumber-json-formatter.exe"
    },
    "messages": {
      "enabled": true,
      "output": "jsonlogs/messages.ndjson"
    }
  },
  "stepDefinitions": [
    "cypress/e2e/**/*.{js,ts}",
    "cypress/e2e/.{js,ts}",
    "cypress/support/step_definitions/**/*.{js,ts}"
  ]
}
```
## 6. cypress.config.js looks like:
```
const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    video: false,
    setupNodeEvents,
  },
});
```
## 7. cucumber-html-reporter.js looks like:
```
const report = require("multiple-cucumber-html-reporter");
report.generate({
  jsonDir: "jsonlogs", // ** Path of .json file **//
  reportPath: "./reports/cucumber-htmlreport.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "XXX",
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "10",
    },
  },
});
```
