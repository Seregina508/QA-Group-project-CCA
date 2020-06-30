const selectorGen = require ('./../../data/selectors.json').general;
const expectedGen = require ('./../../data/expected.json').general;
const selectorCnt = require ('./../../data/selectors.json').counter;
const expectedCnt = require('./../../data/expected.json').counter;
describe('Test Complex Counter', () => {
    it('should have the right title', () => {
        browser.url('https://likejean.github.io/homework-5/');
        const actualTitle = browser.getTitle();
        const expectedTitle = 'Complex Counter App';
        expect(actualTitle).toEqual(expectedTitle);
    });
    it('TC 13 should check Sub Buttons present',function () {
        const sub1button = $("//button[contains(text(),'-1')]");
        const sub2button = $("//button[contains(text(),'-2')]");
        const sub3button = $("//button[contains(text(),'-3')]");
        expect(sub1button).toBePresent();
        expect(sub2button).toBePresent();
        expect(sub3button).toBePresent();
        expect(sub1button.getLocation().x).toBeLessThan(sub2button.getLocation().x);
        //browser.pause(1000);
    });
    // Verify that -1, -2, -3 Sub buttons are displayed by default to the left of the LLF in the asс order
    it('TC 14 should check that -1, -2, -3 Sub buttons are displayed by default to the left of the LLF in the asс order',function () {
        const sub1button = $("//button[contains(text(),'-1')]");
        const sub2button = $("//button[contains(text(),'-2')]");
        const sub3button = $("//button[contains(text(),'-3')]");
        const LLF = $("//button[@name='negative']");
        expect(sub1button.getLocation().x).toBeLessThan(sub2button.getLocation().x);
        expect(sub2button.getLocation().x).toBeLessThan(sub3button.getLocation().x);
        expect(sub3button.getLocation().x).toBeLessThan(LLF.getLocation().x);
       // browser.pause(1000);
    });
    //Verify that on the right side Limit Fields has Add Buttons
    it('TC 17 should check Add Buttons present',function () {
        const add1button = $("//body//button[6]");
        const add2button = $("//body//button[7]");
        const add3button = $("//body//button[8]");
        expect(add1button).toBePresent();
        expect(add2button).toBePresent();
        expect(add3button).toBePresent();
        expect(add1button.getLocation().x).toBeLessThan(add2button.getLocation().x);
        //browser.pause(1000);
    });
    //Verify that 1, 2, 3 Add buttons are displayed by default to the right of the ULF in the asс order
    it('TC 18 should check that 1, 2, 3 Add buttons are displayed by default to the right of the ULF in the asс order',function () {
        const add1button = $("//body//button[6]");
        const add2button = $("//body//button[7]");
        const add3button = $("//body//button[8]");
        const ULF = $("//button[@name='positive']");
        expect(ULF.getLocation().x).toBeLessThan(add1button.getLocation().x);
        expect(add1button.getLocation().x).toBeLessThan(add2button.getLocation().x);
        expect(add2button.getLocation().x).toBeLessThan(add3button.getLocation().x);
        browser.pause(1000);
    });
    //Verify that the "Add Name Field"  has lable "Enter Counter Title:"
    it('TC 28 should check that the "Add Name Field"  has lable "Enter Counter Title:"',function () {
        const element = $("//input[@name='name']");
        const label = $("//label[text()='Enter Counter Title: ']");
        expect(label.getLocation().x + label.getSize().width).toBeLessThanOrEqual(element.getLocation().x);
        expect(label.getLocation().x + label.getSize().width).toBeGreaterThanOrEqual(element.getLocation().x - 25);
        const midLabel = label.getLocation().y + label.getSize().height / 2;
        const midElement = element.getLocation().y + element.getSize().height / 2;
        expect(midLabel).toEqual(midElement);
       // browser.pause(1000);
    });
    //Verify that the "Add Name Field"  has placeholder "Counter Name"
    it('TC 29 should check that the "Add Name Field"  has placeholder "Counter Name"',function () {
        const element = $("//input[@name='name']");
        expect(element).toHaveAttribute("value","Counter Name");
    });
    //Verify that a new counter can't be added when the name of the counter in "Add Name Field" is less than 7 characters.
    it('TC 36 should check that a new counter can not be added when the name of the counter in "Add Name Field" is less than 7 characters',function () {
        const nameField = $("//input[@name='name']");
        nameField.clearValue();
        nameField.addValue("Abcdef");
        const errorMsg = $("//div[@class='container']//span[1]");
        expect(errorMsg.getText()).toEqual("ERROR: Counter name should be longer than 6 characters");
        const addCountBtn = $("//button[text()=\"Add Counter\"]");
        expect(addCountBtn).toBeDisabled();
        //browser.pause(1000);
    });
    //Verify that a new counter can't be added when "Add Name Field" is empty.
    it('TC 37 should check that a new counter can not be added when "Add Name Field" is empty',function () {
        //browser.refresh()
        const nameField = $("//input[@name='name']");
        const addCountBtn = $("//button[text()=\"Add Counter\"]");
        nameField.clearValue();
        nameField.click();
        const errorMsg = $("//div[@class='container']//span[1]");
        expect(errorMsg.getText()).toEqual("ERROR: Counter name should be longer than 6 characters");
        expect(addCountBtn).toBeDisabled();
        //browser.pause(1000);
    });
    //Verify that  lower case letter can't be pasted into "Default value field".
    it('TC 49 should check that  lower case letter can not be pasted into "Default value field"',function () {
        const errorMsg = $("//div[@class='container']//span[1]");
        const defaultValueField = $("//input[@name='value']");
        const addCountBtn = $("//button[text()=\"Add Counter\"]");
//        navigator.clipboard.set("a");
//        driver.setClipboard("a");
        defaultValueField.click(); // to set the focus on the field
        defaultValueField.selectByIndex(100);
        browser.keys(['Delete']);
        expect(defaultValueField.getText()).toEqual("");
        //browser.pause(1000);
    });
    //Verify that when click to ULF appears 3
    it('TC 160 should check that when click to ULF appears 3',function () {
        const ULF_button = $("//button[@name='positive']");
        ULF_button.click();
        const ULF_input = $("//input[@name='upper']");
        expect(ULF_input.getValue()).toEqual("3");
        //browser.pause(1000);
    });
    //Verify that when click to ULF appears spinner
    it('TC 161 should check that when click to ULF appears spinner',function () {
        browser.refresh();
        const ULF_button = $("//button[@name='positive']");
        ULF_button.click();
        //browser.pause(500);
        const ULF_input = $("//input[@name='upper']");
        expect(ULF_input).toHaveAttribute("type", "number");
        //browser.pause(3000);
    });

});


describe('Register Page',function () {


})