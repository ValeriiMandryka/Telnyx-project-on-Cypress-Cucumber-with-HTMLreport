# Telnyx_cypress_cucumber_HTMLreport


## 1. Install 
in terminal enter
```
npm init
npm install cypress

```
## 2. Install plugin Cucumber:
```
npm install @badeball/cypress-cucumber-preprocesso

```

## 3. Install cypress-browserify-preprocessor<br>
```
npm install --save-dev @cypress/browserify-preprocessor
```
Whhen dependences was 
## 4. Install HTML reporter
```
npm install multiple-cucumber-html-reporter --save-dev

```
## 4. Install xpath plugin
```
npm i cypress-xpath
```
## 5. Run tests
```
npx cypress open   (it will open cypress GUI where you can run tests)  
npm run test:      (run test in headless mode )
   

```


## 6 Generate report
```
npm run allure-generate
node cucumber-html-report.js
```
