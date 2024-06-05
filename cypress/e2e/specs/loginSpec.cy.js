// cypress/e2e/stylz-saloon-login.spec.js

const { faker } = require('@faker-js/faker');
import LoginPage from '../pages/loginPage';

describe('STYLZ Saloon Login Page', () => {
  const username = Cypress.env('username');
  const password = Cypress.env('password');
  let invalidUsername;
  let invalidPassword;
  const loginPage = new LoginPage();

  beforeEach(() => {
    invalidUsername = faker.internet.userName();
    invalidPassword = faker.internet.password();
    loginPage.visit()
  })

  it('should load the login page', () => {
    cy.contains('Sign in')
    loginPage.getUsernameInput().should('be.visible')
    loginPage.getPasswordInput().should('be.visible')
    loginPage.getSubmitButton().should('be.visible')
    loginPage.getForgotPasswordLink().should('be.visible')
  })

  it('should login with valid credentials', () => {
    loginPage.login(username, password)
    cy.url().should('not.include', '/login')
  })

  it('should display error for invalid username', () => {
    loginPage.login(invalidUsername, password)
    cy.contains('Invalid username or password').should('be.visible')
  })

  it('should display error for invalid password', () => {
    loginPage.login(username, invalidPassword)
    cy.contains('Invalid username or password').should('be.visible')
  })

  it('should display error for both invalid username and password', () => {
    loginPage.login(invalidUsername, invalidPassword)
    cy.contains('Invalid username or password').should('be.visible')
  })

  it('should display error for empty username', () => {
    loginPage.getPasswordInput().type(password)
    loginPage.getSubmitButton().click()
    cy.contains('Invalid username or password').should('be.visible')
  })

  it('should display error for empty password', () => {
    loginPage.getUsernameInput().type(username)
    loginPage.getSubmitButton().click()
    cy.contains('Invalid username or password').should('be.visible')
  })

  it('should display error for empty username and password', () => {
    loginPage.getSubmitButton().click()
    cy.contains('Invalid username or password').should('be.visible')
  })

  it('should navigate to forgot password page', () => {
    loginPage.getForgotPasswordLink().click()
    cy.url().should('include', '/login')
  })

  it('should mask the password field', () => {
    loginPage.getPasswordInput().type(password)
    loginPage.getPasswordInput().should('have.attr', 'type', 'password')
  })

  it('should verify page elements are present', () => {
    loginPage.getUsernameInput().should('be.visible')
    loginPage.getPasswordInput().should('be.visible')
    loginPage.getSubmitButton().should('be.visible')
    loginPage.getForgotPasswordLink().should('be.visible')
  })

  it('should not disable login button with empty fields', () => {
//  ToDo: to fix this spec after we have functionality
    loginPage.getUsernameInput().clear()
    loginPage.getPasswordInput().clear()
    loginPage.getSubmitButton().should('not.be.disabled')
  })

  it('should maintain session after successful login and page refresh', () => {
    loginPage.visit()
    loginPage.login(username, password)
    cy.url().should('include', '/dashboard')
    loginPage.getDashboardHeader().should('be.visible')
    cy.reload()
    cy.url().should('include', '/dashboard')
    loginPage.getDashboardHeader().should('be.visible')
  })
})
