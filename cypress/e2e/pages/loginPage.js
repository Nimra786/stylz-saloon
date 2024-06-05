class LoginPage {
    visit() {
      cy.visit('/')
    }
  
    getUsernameInput() {
      return cy.get('input[name=username]')
    }
  
    getPasswordInput() {
      return cy.get('input[name=password]')
    }
  
    getSubmitButton() {
      return cy.get('button[type=submit]')
    }
  
    getForgotPasswordLink() {
      return cy.get('a:contains("I forgot my password")')
    }
  
    getDashboardHeader() {
      return cy.get('h1:contains("Dashboard")')
    }
  
    login(username, password) {
      this.getUsernameInput().type(username)
      this.getPasswordInput().type(password)
      this.getSubmitButton().click()
    }
  }
  
  export default LoginPage;
  