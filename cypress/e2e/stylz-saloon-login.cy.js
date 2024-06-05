describe('STYLZ Saloon Login', () => {
    it('should load the login page', () => {
      cy.visit('https://staging.stylz.me/login/')
      cy.contains('Sign in')
    })
  })
  