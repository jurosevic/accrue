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

        cy.contains('Personal information', {timeout: 60000}).should('be.visible');

        cy.get(Locators.firstNameInput).type("Test Name");
        cy.get(Locators.lastNameInput).type("Test LastName");
        cy.get(Locators.phoneInput).type(Cypress.env("phone"));
        cy.contains('Continue').click();

        cy.get(Locators.setUpNowButton, {timeout: 20000}).click();

        cy.contains('By amount').click();
        cy.get(Locators.savingsAmountInput).type('40');
        cy.contains('Bi-weekly').click();
        cy.get(Locators.continueBtn).click();

        cy.get(Locators.firstNameInput).should('have.value', 'Test Name');
        cy.get(Locators.lastNameInput).should('have.value', 'Test LastName');

        cy.get(Locators.stateInput).select("NY");
        cy.get(Locators.zipCodeInput).type( '10017');
        cy.get(Locators.cityInput).type('New York');
        cy.get(Locators.dobInput).type(Cypress.env("dob"));
        cy.get(Locators.ssnInput).type(Cypress.env("ssn"));

        cy.get(Locators.addressInput).type(Cypress.env("address"));

        cy.get(Locators.checkbox).eq(1).click({force: true});
        cy.get(Locators.submitButton).click();

        cy.contains('Connect account').click();

        cy.get(Locators.searchInstitutionInput, {timeout: 20000}).type('Discovery Bank');
        cy.contains('Discover Card').click();
        cy.contains('Continue', {timeout: 20000}).click();
        cy.contains('Discover').click();

        cy.get(Locators.userId).type(Cypress.env("userId"));
        cy.get(Locators.userPass).type(Cypress.env("userPass"));
        cy.contains('Submit').click();

        cy.contains('Plaid Saving').click();
        cy.contains('Continue').click();
        cy.contains('Continue', {timeout: 30000}).click();


        // cy.get(Locators.setSavingsAmountInput).should('have.value', '200');
        // cy.contains('Confirm savings goal').click();
        //
        // cy.get(Locators.dashboardBanner).should('have.text', 'Set up your wallet');
    })
})
