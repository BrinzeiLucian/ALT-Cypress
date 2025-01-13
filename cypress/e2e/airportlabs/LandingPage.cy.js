import selectors from '../../support/selectors.js';
const testdata = require("../../fixtures/AlLandingPageTestData.json")

describe('Landing Page Tests', () => {
    beforeEach(() => {
        cy.goTo('https://www.airportlabs.com/', 'AirportLabs');
    })

    context('CSS Validations', () =>{
        it('Validate "Our customers" section header CSS properties', () => {
            cy.getText(selectors.customersTitle, "Trusted by 60+ Airports worldwide")
            .should('have.css', 'font-size', testdata.customersTitleFontSize)
            .and('have.css', 'font-family', testdata.customersTitleFontFamily) 
            .and('have.css', 'color', testdata.customersTitleColor)
        });
    
        it('Validate "Our Activity" section statistics CSS properties', () => {
            //Check statistic value
            cy.getText(selectors.activityStat, "300k")
            .should('have.css', 'font-size', testdata.activityStatTextFontSize)
            .and('have.css', 'font-family', testdata.activityStatTextFontFamily)
            .and('have.css', 'color', testdata.activityStatTextColor)
            
            //Check statistic description
            cy.getText(selectors.activityStatDesc, "Users Worldwide")
            .should('have.css', 'font-size', testdata.activityStatDescFontSize)
            .and('have.css', 'font-family', testdata.activityStatDescFontFamily) 
            .and('have.css', 'color', testdata.activityStatDescColor)
        });

        it('Validate logo CSS properties in page footer', () => {
            cy.get('.image-103')
            .should('have.attr', 'src', 'https://cdn.prod.website-files.com/621780e23ce4730dbde38ef2/654c971b692cc2544a40527c_aeroportosportugal.png')
            .and((el => expect(el.width()).eq(110)))
            .and((el => expect(el.height()).eq(62.8)))
        });
    })
    
    context('User Flow', () =>{
        it('User can successfully use "Get in Touch" section', () => {
            cy.clickButton('.button-row > .button', 'href', '/other/get-in-touch')
            cy.title().should('contain', 'Contact')

        });
    
        it('User is succesfully redirected to media pages', () => {
            
        });
    })
});