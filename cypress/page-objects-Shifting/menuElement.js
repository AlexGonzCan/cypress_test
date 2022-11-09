export class MenuElement {
  countMenuElement(num) {
    cy.get("li").should("have.length", num);
  }
}
