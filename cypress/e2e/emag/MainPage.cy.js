const testdata = require("../../fixtures/EmagTestData.json")
import EmagMainPage from '../../support/pageObjects/EmagMainPage.cy.js';
import EmagCartPage from '../../support/pageObjects/EmagCartPage.cy.js'

describe('Main Page Tests', () => {
    const emagMainPage = new EmagMainPage();
    const emagCartPage = new EmagCartPage();

    context('User Flow', ()=>{
        it('User can successfully filter and add specific products to cart', () => {
         cy.goTo('https://www.emag.ro/','emag')
         emagMainPage.searchProduct(testdata.tvInput)
        });
    })
});

/*
Scenario: Add to the cart the following items: a TV and an accessory for the TV (your choice).

Both the TV and accessory should have: the same manufacturer, and a rating of a minimum of 3 stars. 

The TV should be the most expensive one from the category you selected (LED, OLED, LCD, etc). 

The accessory should have the minimum price from the category you selected.*/