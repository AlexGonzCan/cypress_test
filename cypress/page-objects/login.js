export class LoginPage {
  fillUser(text) {
    cy.get("#username").type(text);
  }

  fillPass(text) {
    cy.get("#password").type(text);
  }
  clickButton() {
    cy.get(".fa").click();
  }

  emptyUser() {
    cy.get("#username").clear();
  }
  emptyPass() {
    cy.get("#password").clear();
  }
}
