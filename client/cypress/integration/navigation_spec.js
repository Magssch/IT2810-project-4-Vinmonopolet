/// <reference types="Cypress" />

describe('Navigate', () => {
    it('navigates the page, testing Modal-component and dynamic loading by scrolling to bottom', () => {

        // visit 'baseUrl'
        cy.visit('/');

        // check if at correct page
        cy.title().should('contain', 'Vinmonopolet');

        // searches page for first item in database (using preset sorting)
        cy.contains('Thomas Henry Ginger Beer');

        // scrolls to bottom of page, loading 10 more items.
        cy.window().scrollTo('bottom');

        // wait for data to load
        cy.wait(2000);

        // check that correct amount of items are loaded (should be 20 as it loads in clusters of 10).
        cy.get('.db-result').find('tr').should('have.length', 20)

        // click on an item, triggering Modal-component
        cy.get('.db-item').contains('BrewDog Nanny State').click();

        // check if correct item information is displayed
        cy.contains('Kremet og saftig. preg av blomst og urter. tydelig humlebitter ettersmak.');
    });
});