    describe.only('test suite', () => {
    it('test', () => {
        cy.visit('https://www.airportlabs.com/');
        cy.title().should('include', 'AirportLabs');
    })
});