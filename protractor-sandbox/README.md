# Protractor Sandbox

This project can be used as a template/seed project for the UI Automation E2E Testing purpose

## Development server

Run `npm run server` to start the selenium webdriver-manager. Navigate to `http://localhost:4444/`. You should be able to see the selenium standlone server homepage.

If you have ECONNRESET ERROR, change your proxy settings or connecting to another network.

## Code scaffolding
```
protractor-sandbox
    /reports
        /allpage
            /chrome-test-report.html
        /page1
            /chrome-test-report.html
        /page2
            /chrome-test-report.html
    /tests
        /e2e
            /page1
                /page1-spec.js
            /page2
                /page2-spec.js
    .gitignore
    conf.js
    package.json
    README.md
```

## Running end-to-end tests

Run `npm run test $Parameter` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
For example: `$Parameter` can be: allpage, page1, page2.
To add more available parameters, you can modify the [suites array] inside `conf.js`
Before running the tests make sure you already started webdriver-manager via `npm run server`.

## Further help

To get more help on the Protractor, check out the [Protractor Table of Contents](http://www.protractortest.org/#/toc).
