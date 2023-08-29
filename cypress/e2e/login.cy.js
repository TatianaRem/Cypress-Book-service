/// <reference types="cypress" />

describe("Book creation and storage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Page display check", () => {
    cy.contains("Books list");
  });

  it("Should successfully login", () => {
    cy.login("bropet@mail.ru", "123");
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
  });

  it("Should not login with empty login", () => {
    cy.login(" ", "123");
    cy.get("#mail")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });

  it("Should not login with wrong password", () => {
    cy.login("bropet@mail.ru", "12");
    cy.contains("Неправильая почта или пароль").should("be.visible");
  });

  it("Should add the book to favorites", () => {
    cy.login("test@test.com", "test");
    cy.contains("Добро пожаловать test@test.com").should("be.visible");
    cy.addBook("Преступление и наказание");
    cy.contains("Add to favorite").click();
    cy.contains("Favorites").click();
    cy.contains("Преступление и наказание").should("be.visible");
  });

  it("Should delete the book from favorites", () => {
    cy.login("test@test.com", "test");
    cy.contains("Favorites").click();
    cy.contains("Преступление и наказание").should("be.visible");
    cy.contains("Delete from favorite").click();
    cy.contains("Преступление и наказание").should("not.exist");
  });

  it("Should display proper message when do not have favorite books after all deleting", () => {
    cy.login("test@test.com", "test");
    // Добавление двух новых книг в избранное
    cy.addBook("Война и мир");
    cy.contains("Add to favorite").click();
    cy.addBook("Гранатовый браслет");
    cy.contains("Add to favorite").click();
    cy.contains("Favorites").click();
    // Удаление всех книг из избранного
    cy.contains("Delete from favorite").each(($button) => {
      cy.wrap($button).click();
      cy.contains("Please add some book to favorit on home page!").should(
        "be.visible"
      );
    });
  });
});
