const { expect } = require('chai');
const { Builder, By, until } = require('selenium-webdriver');

describe('Калькулятор тесты', function () {
    let driver;

    before(async function () {
        this.timeout(10000);
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://www.globalsqa.com/angularJs-protractor/SimpleCalculator/');
    });

    after(async function () {
        this.timeout(10000);
        if (driver) {
            await driver.quit();
        }
    });

    it('Должен складывать два числа', async function () {
        await driver.wait(until.elementLocated(By.id('firstNumber')), 5000); // Ожидание появления элемента
        await driver.findElement(By.id('firstNumber')).sendKeys('5');

        await driver.wait(until.elementLocated(By.id('secondNumber')), 5000);
        await driver.findElement(By.id('secondNumber')).sendKeys('10');

        await driver.wait(until.elementLocated(By.id('operator')), 5000);
        await driver.findElement(By.id('operator')).sendKeys('+');

        await driver.wait(until.elementLocated(By.id('calculate')), 5000);
        await driver.findElement(By.id('calculate')).click();

        const resultElement = await driver.wait(until.elementLocated(By.id('result')), 5000);
        const result = await resultElement.getText();
        expect(result).to.equal('15');
    });

    // Добавьте другие тесты сюда
});
