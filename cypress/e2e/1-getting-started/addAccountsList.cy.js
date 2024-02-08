import AddListAccount from "../../../suport/addAccountsList/addAccountsList";
var faker = require('faker-br');

describe("Adcionando uma conta nova", () => {
  it("Acessar página Adicionar e inserir uma nova conta", () => {
    cy.login()
    AddListAccount.accessAddAcount()
    AddListAccount.insertNameAccout(`${faker.name.firstName()} ${faker.random.number()}`)
    AddListAccount.clickButtonSave()
    AddListAccount.validationMessageSuccessAddAcount()
    AddListAccount.validationUrlSaceAccount()
  })
  it("Acessar página de listagem de conta e alterar o nome da conta", () => {
    cy.login()
    AddListAccount.accessListAccount()
    AddListAccount.accessEditAccount()
    AddListAccount.validationUrl()
    AddListAccount.insertNameAccout(`${faker.name.firstName()} ${faker.random.number()}`)
    AddListAccount.clickButtonSave()
    AddListAccount.messageValidationChangedAccount()
    AddListAccount.deleteAccountList()
    AddListAccount.messageValidationDeleteAccount()
  
  })
  it("Acessar página de listagem e tentar exlcuir uma conta em movimento ", () => {
    cy.login()
    AddListAccount.accessListAccount()
    AddListAccount.accessEditAccount()
    AddListAccount.insertNameAccout(`${faker.name.firstName()} ${faker.random.number()}`)
    AddListAccount.clickButtonSave()
    AddListAccount.messageValidationChangedAccount()
    AddListAccount.deleteLastAccountList()
    AddListAccount.messageValidationErrorDelete()
 
  })
})

