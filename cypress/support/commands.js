Cypress.Commands.add('login', (login, password) => {
    cy.contains('Log in').click();
    cy.get('#mail').type(login);
    cy.get('#pass').type(password);
    cy.contains('Submit').click();
});

Cypress.Commands.add('addBook', (title) => {
    cy.contains('Add new').click();
    cy.get('input[name="title"]').type(title);
    cy.contains('Submit').click();
});