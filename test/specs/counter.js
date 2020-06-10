describe('Test Progress Monitor first page', () => {
    it('should have the right title', () => {
        browser.url('https://app.pasv.us');
        const actualTitle = browser.getTitle();
        const expectedTitle = 'Progress Monitor';
        expect(actualTitle).toEqual(expectedTitle);
    })
})
