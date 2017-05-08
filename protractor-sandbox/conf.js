exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'browserName': 'chrome'
    },
    //specs: ['demo-spec.js'],
    suites: {
        page1: 'tests/e2e/page1/*-spec.js',
        page2: 'tests/e2e/page2/*-spec.js',
        allpage: 'tests/e2e/page*/*-spec.js'
    },
    framework: 'jasmine2',
    onPrepare: function() {
        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: './',
            filePrefix: 'xmlresults'
        }));
    },
    onComplete: function() {
        var browserName, browserVersion;
        var capsPromise = browser.getCapabilities();
     
        capsPromise.then(function (caps) {
            browserName = caps.get('browserName');
            browserVersion = caps.get('version');
     
            var HTMLReport = require('protractor-html-reporter');
            
            var scriptArray = process.env.npm_lifecycle_script.split(' ');

            var folderName = scriptArray[scriptArray.length-1].replace(/"/g, '');

            var outputPath = './reports/' + folderName + '/';

            testConfig = {
                reportTitle: 'Test Execution Report',
                outputPath: outputPath,
                screenshotPath: './screenshots',
                testBrowser: browserName,
                browserVersion: browserVersion,
                modifiedSuiteName: false,
                screenshotsOnlyOnFailure: true
            };
            new HTMLReport().from('xmlresults.xml', testConfig);
        });
    }
};