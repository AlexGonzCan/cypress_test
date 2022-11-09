/// <reference types="cypress" />
//it.only
//it.skip
// NOTE: 1. Test Login valido
//Para crear grupos
describe("TESTS DE LOGIN", () => {
  // Para pasos que se repiten en cada test
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.get(":nth-child(21) > a").click();
  });

  it("A valid user can login", () => {
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get(".fa").click();
    cy.get("#flash").contains("You logged into a secure area!");
  });

  // NOTE: 2. Test Login invalido (contraseña)
  it.only("A invalid password can not login", () => {
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("asdfasdfasdf");
    cy.get(".fa").click();
    cy.get("#flash").contains("Your password is invalid!");
  });
});

// NOTE: 3. Test Login Invalido (usuario)
it("A invalid user can not login", () => {
  cy.get(":nth-child(21) > a").click();
  cy.get("#username").type("tomsmith567563563");
  cy.get("#password").type("SuperSecretPassword!");
  cy.get(".fa").click();
  cy.get("#flash").contains("Your username is invalid!");
});

// NOTE: 4. Test Login Invalido (campos vacios)
it("A user leaves the fiends void", () => {
  cy.get(":nth-child(21) > a").click();
  cy.get("#username").clear();
  cy.get("#password").clear();
  cy.get(".fa").click();
  cy.get("#flash").contains("Your username is invalid!");
});

// NOTE: 5. Test Shifting Content -> Example 1: Menu Element
it("Shifting Content: Menu Element", () => {
  cy.get(":nth-child(39) > a").click();
  cy.get('[href="/shifting_content/menu"]').click();
  cy.get("li").should("have.length", 5);
});
