describe('TranZform EngageMember Page 2 E2E Test', function() {

    // local variables
    // var input = element(by.id()).sendKeys();
    // var input = browser.driver.findElement(by.id('username'))

    // use beforeAll like initialization function before all specs func
    beforeAll(function() {

    });

    // beforeEach method which will be executed before every single spec func
    beforeEach(function() {
        browser.driver.get('https://jasmine.github.io/api/2.6/matchers.html');
    });

    it('the default input box should not be empty', function() {
        expect(browser.driver.getTitle()).toBeDefined();
    });

    // afterEach method which will be executed after every single spec func
    afterEach(function() {

    });

    // afterAll will be executed after all specs finished
    afterAll(function() {
        
    });
});