/// <reference types="cypress" />
import { MainPage } from "../page-objects/main";
import { LoginPage } from "../page-objects/login";
import { WelcomePage } from "../page-objects/welcome";
import { ShiftingContent } from "../page-objects-Shifting/shiftingContent";
import { MenuElement } from "../page-objects-Shifting/menuElement";
//it.only
//it.skip
// NOTE: 1. Test Login valido
//Para crear grupos
describe("TESTS DE LOGIN", () => {
  const loginPage = new LoginPage();
  const mainPage = new MainPage();
  const welcomePage = new WelcomePage();

  // Para pasos que se repiten en cada test
  beforeEach(() => {
    mainPage.navigate();
    mainPage.clickLoginOption();
  });

  it("A valid user can login", () => {
    loginPage.fillUser("tomsmith");
    loginPage.fillPass("SuperSecretPassword!");
    loginPage.clickButton();
    welcomePage.checkMessage("You logged into a secure area!");
  });

  // NOTE: 2. Test Login invalido (contraseña)
  it("A invalid password can not login", () => {
    loginPage.fillUser("tomsmith");
    loginPage.fillPass("asdfasdfasdf");
    loginPage.clickButton();
    welcomePage.checkMessage("Your password is invalid!");
  });

  // NOTE: 3. Test Login Invalido (usuario)
  it("A invalid user can not login", () => {
    loginPage.fillUser("tomsmith567563563");
    loginPage.fillPass("SuperSecretPassword!");
    loginPage.clickButton();
    welcomePage.checkMessage("Your username is invalid!");
  });

  // NOTE: 4. Test Login Invalido (campos vacios)
  it("A user leaves the fiends void", () => {
    loginPage.emptyUser();
    loginPage.emptyPass();
    loginPage.clickButton();
    welcomePage.checkMessage("Your username is invalid!");

    /*  cy.get(":nth-child(21) > a").click();
    cy.get("#username").clear();
    cy.get("#password").clear();
    cy.get(".fa").click();
    cy.get("#flash").contains("Your username is invalid!"); */
  });
});

// NOTE: 5. Test Shifting Content -> Example 1: Menu Element
describe("TEST SHIFTING CONTENT", () => {
  const mainPage = new MainPage();
  const shiftingContent = new ShiftingContent();
  const menuElement = new MenuElement();

  beforeEach(() => {
    mainPage.navigate();
    mainPage.clickShiftingContent();
  });

  it.only("Shifting Content: Menu Element", () => {
    shiftingContent.clickMenuElement();
    menuElement.countMenuElement(5);

    /* cy.get(":nth-child(39) > a").click();
    cy.get('[href="/shifting_content/menu"]').click();
    cy.get("li").should("have.length", 5); */
  });
});
