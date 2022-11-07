/// <reference types="cypress" />
// NOTE: 1. Test Login valido
it("A valid user can login", () => {
  cy.visit("https://the-internet.herokuapp.com/");
  cy.get(":nth-child(21) > a").click();
  cy.get("#username").type("tomsmith");
  cy.get("#password").type("SuperSecretPassword!");
  cy.get(".fa").click();
  cy.get("#flash").contains("You logged into a secure area!");
});

// NOTE: 2. Test Login invalido (contraseña)
it("A invalid password can not login", () => {
  cy.visit("https://the-internet.herokuapp.com/");
  cy.get(":nth-child(21) > a").click();
  cy.get("#username").type("tomsmith");
  cy.get("#password").type("asdfasdfasdf");
  cy.get(".fa").click();
  cy.get("#flash").contains("Your password is invalid!");
});

// NOTE: 3. Test Login Invalido (usuario)
it("A invalid user can not login", () => {
  cy.visit("https://the-internet.herokuapp.com/");
  cy.get(":nth-child(21) > a").click();
  cy.get("#username").type("tomsmith567563563");
  cy.get("#password").type("SuperSecretPassword!");
  cy.get(".fa").click();
  cy.get("#flash").contains("Your username is invalid!");
});

// NOTE: 4. Test Login Invalido (campos vacios)
it("A user leaves the fiends void", () => {
  cy.visit("https://the-internet.herokuapp.com/");
  cy.get(":nth-child(21) > a").click();
  cy.get("#username").should("contain", "");
  cy.get("#password").should("contain", "");
  cy.get(".fa").click();
  cy.get("#flash").contains("Your username is invalid!");
});

// NOTE: 5. Test Shifting Content -> Example 1: Menu Element
it("Shifting Content: Menu Element", () => {
  cy.visit("https://the-internet.herokuapp.com/");
  cy.get(":nth-child(39) > a").click();
  cy.get('[href="/shifting_content/menu"]').click();
  cy.get("ul > li").should("have.length", 5);
});

// NOTE: Test Shifting Content: Menu Element 2 extra (Tracticando)
it("Shifting Content: Menu Element", () => {
  cy.visit("https://the-internet.herokuapp.com/");
  cy.get(":nth-child(39) > a").click();
  cy.get('[href="/shifting_content/menu"]').click();
  cy.get(":nth-child(1) > a");
  cy.get(":nth-child(7) > :nth-child(2) > a");
  cy.get(":nth-child(7) > :nth-child(3) > a");
  cy.get(":nth-child(7) > :nth-child(4) > a");
  cy.get(".shift");
});
