# STYLZ Saloon

Welcome to the STYLZ Saloon project! This project contains automated tests for login page of  [Website: https://staging.stylz.me/].


## Prerequisites

Before running the tests, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (recommended latest version)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

## Getting Started

To get started with the project, follow these steps:

1. **Clone the Repository:**
`git clone https://github.com/Nimra786/stylz-saloon.git`

2. **Navigate to the Project Directory:**
`cd stylz-saloon`

3. **Install Dependencies:**
`npm install`

4. **Setup Env:**
copy example envs from `cypress.env.example.json` to `cypress.env.json` file make sure to replace values with actual values.

## Running Tests
Once the dependencies are installed, you can run the tests. There are two ways to run tests:

### 1. Using the Cypress Test Runner (Interactive Mode):
To run tests interactively in the Cypress Test Runner, use the following command:
`npx cypress open`

This command will open the Cypress Test Runner GUI, where you can select and run individual test files.

### 2. Using Headless Mode:
To run tests in headless mode (without the GUI), use the following command:
`npx cypress run`

### 3. Test Scenarios:
I have use POM technique to structure my test cases.

### i. User Authentication:
Automate the login functionality ensuring successful authentication with valid credentials.
Test invalid login scenarios, such as incorrect username or password, and verify appropriate error messages.

For all these test cases related to login I created two file loginPage.js for objects and loginSpec.cy.js for test cases

  
## 🚀 About Me
- [@Nimra786](https://github.com/Nimra786)