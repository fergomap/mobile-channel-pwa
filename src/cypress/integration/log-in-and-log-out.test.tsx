import { APP_CONSTANTS } from 'config/app.config';

export {};

it('should work', () => {
    cy.visit('/');
    cy.get('form').submit();
    cy.url().should('contain', APP_CONSTANTS.ROUTES.LOG_IN);

    cy.get('input').eq(0).type('test@gmail.com');
    cy.get('input').eq(1).type('password');
    cy.get('form').submit();
    cy.url().should('contain', APP_CONSTANTS.ROUTES.HOME);

    cy.get('button').click();
    cy.url().should('contain', APP_CONSTANTS.ROUTES.LOG_IN);
});
