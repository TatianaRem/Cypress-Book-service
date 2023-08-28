/// <reference types="cypress" />

describe('Book creation and storage', () => {
    beforeEach(() => {
      
      cy.visit('/');
    })
  
    it('Page display check', () => {
      cy.contains('Books list');
    });

    it('Should successfully login', () => {
        cy.login('bropet@mail.ru', '123');
        cy.contains('Добро пожаловать bropet@mail.ru').should('be.visible');
    });

    it('Should not login with empty login', () => {
       cy.login(' ', '123');
        cy.get('#mail').then($el => $el[0].checkValidity()).should('be.false');
    })

    it('Should not login with wrong password', () => {
        cy.login('bropet@mail.ru', '12');
        cy.contains('Неправильая почта или пароль').should('be.visible');
    })
});