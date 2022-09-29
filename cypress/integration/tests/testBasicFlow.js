import {Locators} from "../pages/Locators";
import {generateEmail} from "../pages/helpers";

describe('Test Accrue App', () => {
    before(() => {
        cy.visit('partners');
    });

    it('Should Test Basic FLow', () => {
        cy.get(Locators.searchForMearchantInput).type('JetBlue');
        cy.get(Locators.jetBlueCard).click();

        cy.contains('Get started').click();

        cy.get(Locators.setAmountInput, {timeout: 5000}).clear();
        cy.get(Locators.setAmountInput).type('20');

        cy.get(Locators.emailInput).type(generateEmail());
        cy.get(Locators.passwordInput).type(Cypress.env('password'));
        cy.get(Locators.signUpButton).click();

        cy.get(Locators.setSavingsAmountInput).should('have.value', '200');
        cy.contains('Confirm savings goal').click();

        cy.get(Locators.dashboardBanner).should('have.text', 'Set up your wallet');
    })
})
