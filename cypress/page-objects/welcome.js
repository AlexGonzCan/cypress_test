export class WelcomePage {
  checkMessage(text) {
    cy.get("#flash").contains(text);
  }
}
