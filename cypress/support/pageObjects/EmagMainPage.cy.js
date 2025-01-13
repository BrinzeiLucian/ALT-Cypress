class EmagMainPage{
    searchProduct(input){
        cy.get('#searchboxTrigger').click().type(input).should('have.value', input)
        cy.get('button.btn-default:nth-child(2)').click()
        cy.wait(2000)
        cy.url().should('include', '/search')
    }
}
module.exports = EmagMainPage