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
        let actual = $(selectorCnt.sub1Btn).isDisplayed();
        expect(actual).toEqual(true);
        actual = $(selectorCnt.sub2Btn).isDisplayed();
        expect(actual).toEqual(true);
        actual = $(selectorCnt.sub3Btn).isDisplayed()
        expect(actual).toEqual(true);
    });

    it('TC 14 should check that -1, -2, -3 Sub buttons are displayed by default to the left of the LLF in the asс order',function () {
        let actual1 = $(selectorCnt.sub1Btn).getLocation().x;
        let actual2 = $(selectorCnt.sub2Btn).getLocation().x;
        let actual3 = $(selectorCnt.sub3Btn).getLocation().x;
        let actual4 = $(selectorCnt.lowerLimitField).getLocation().x;
        expect(actual1).toBeLessThan(actual2);
        expect(actual2).toBeLessThan(actual3);
        expect(actual3).toBeLessThan(actual4);
    });

    it('TC 17 should check Add Buttons present',function () {
        let actual = $(selectorCnt.add1Btn).isDisplayed();
        expect(actual).toEqual(true);
        actual = $(selectorCnt.add2Btn).isDisplayed();
        expect(actual).toEqual(true);
        actual= $(selectorCnt.add3Btn).isDisplayed();
        expect(actual).toEqual(true);
    });

    it('TC 18 should check that 1, 2, 3 Add buttons are displayed by default to the right of the ULF in the asс order',function () {
        let actual1 = $(selectorCnt.upperLimitField).getLocation().x
        let actual2 = $(selectorCnt.add1Btn).getLocation().x;
        let actual3 = $(selectorCnt.add2Btn).getLocation().x;
        let actual4 = $(selectorCnt.add3Btn).getLocation().x;
        expect(actual1).toBeLessThan(actual2);
        expect(actual2).toBeLessThan(actual3);
        expect(actual3).toBeLessThan(actual4);

    });

    it('TC 28 should check that the "Add Name Field"  has lable "Enter Counter Title:"',function () {
        const fieldPos = $(selectorGen.addNameField).getLocation();
        const fieldSz = $(selectorGen.addNameField).getSize();
        const labelPos = $$(selectorGen.addNameFieldLabel)[1].getLocation();
        const labelSz = $$(selectorGen.addNameFieldLabel)[1].getSize();
        expect(labelPos.x + labelSz.width).toBeLessThanOrEqual(fieldPos.x);
        expect(labelPos.x + labelSz.width).toBeGreaterThanOrEqual(fieldPos.x - 25);
        const midLabel = labelPos.y + labelSz.height / 2;
        const midElement = fieldPos.y + fieldSz.height / 2;
        expect(midLabel).toEqual(midElement);

    });
    it('TC 29 should check that the "Add Name Field"  has placeholder "Counter Name"',function () {
        const element = $(selectorGen.addNameField);
        expect(element).toHaveAttribute("value", "Counter Name");
    });

    it('TC 36 should check that a new counter can not be added when the name of the counter in "Add Name Field" is less than 7 characters',function () {
        const nameField = $(selectorGen.addNameField);
        nameField.clearValue();
        nameField.addValue("Abcdef");
        const errorMsg = $(selectorGen.errorMsg).getText();
        expect(errorMsg).toEqual(expectedGen.errorNameShort);
        const addCountBtn = $(selectorGen.addCounterBtn).isEnabled();
        expect(addCountBtn).toEqual(false);
    });

    it('TC 37 should check that a new counter can not be added when "Add Name Field" is empty',function () {
        const nameField = $(selectorGen.addNameField);
        nameField.clearValue();
        nameField.click();
        const errorMsg = $(selectorGen.errorMsg).getText();
        expect(errorMsg).toEqual(expectedGen.errorNameShort);
        const addCountBtn = $(selectorGen.addCounterBtn).isEnabled();
        expect(addCountBtn).toEqual(false);
    });

//     //Verify that  lower case letter can't be pasted into "Default value field".
//     it('TC 49 should check that  lower case letter can not be pasted into "Default value field"',function () {
//         const errorMsg = $("//div[@class='container']//span[1]");
//         const defaultValueField = $("//input[@name='value']");
//         const addCountBtn = $("//button[text()=\"Add Counter\"]");
//        navigator.clipboard.set("a");
// //        driver.setClipboard("a");
//         defaultValueField.click(); // to set the focus on the field
//         defaultValueField.selectByIndex(100);
//         browser.keys(['Delete']);
//         expect(defaultValueField.getText()).toEqual("");
//         //browser.pause(1000);
//     });

    it('TC 160 should check that when click to ULF appears 3',function () {
        const ULF_button = $(selectorCnt.upperLimitField);
        ULF_button.click();
        const ULF_input = $(selectorCnt.upperInputField).getValue();
        expect(ULF_input).toEqual(expectedCnt.upperInputField);

    });
    it('TC 161 should check that when click to ULF appears spinner',function () {
        browser.refresh();
        const ULF_button = $(selectorCnt.upperLimitField);
        ULF_button.click();
        const ULF_input = $(selectorCnt.upperInputField);
        expect(ULF_input).toHaveAttribute("type", "number");
    });

});


