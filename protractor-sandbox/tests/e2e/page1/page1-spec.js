// test spec definition
describe('TranZform EngageMember Page 1 E2E Test', function() {

    // declare test page objects
    var Page1ABC = function() {
        // local variables and properties

        // setter and getters
        this.getName = function() {
            return 'This is Page1ABC Domain Object'
        };


    };

    // local variables
    // var input = element(by.id()).sendKeys();
    // var input = browser.driver.findElement(by.id('username'))
    var page1abc = new Page1ABC();
    console.log(page1abc.getName());

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