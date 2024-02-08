import accountAddList from "./elements";

class AddListAccount {
    static accessAddAcount() {
        cy.visit("/addConta")
    }
    static insertNameAccout(nome) {

        cy.get(accountAddList.inputName).clear({ force: true }).type(nome)
    }
    static clickButtonSave() {
        cy.get(accountAddList.buttonSave).click()
    }
    static validationMessageSuccessAddAcount() {
        cy.get(accountAddList.divMessageSuccessAddAccount).should('have.text', 'Conta adicionada com sucesso!')
    }
    static validationUrlSaceAccount() {
        cy.url().should('include', '/salvarConta')
    }
    static accessListAccount() {
        cy.visit("/contas")
    }
    static accessEditAccount() {
        cy.get(accountAddList.spanEditAccount).first().click()
    }
     static validationUrl(){
       cy.url().should('include','/editarConta')
    }
    static clickButtonSave() {
        cy.get(accountAddList.buttonSave).click()
    }
    static messageValidationChangedAccount() {
        cy.get(accountAddList.divMessageDeleteSuccess).should('have.text', 'Conta alterada com sucesso!')
    }
    static deleteAccountList() {
        cy.get(accountAddList.spanDeleteAccount).eq(4).click()
    }
    static deleteLastAccountList() {
        cy.get(accountAddList.spanDeleteAccount).last().click()
    }
    static messageValidationDeleteAccount() {
        cy.get(accountAddList.divMessageDeleteSuccess).should('have.text', 'Conta removida com sucesso!')
    }

    static messageValidationErrorDelete() {
        cy.get(accountAddList.divMessageErrorDeleteAccount).should('have.text', 'Conta em uso na movimentações')
    }

}
export default AddListAccount