import firstAccess from "./elements"
class FirstAccessAccount {
    static accessAccount(){
        cy.visit("https://seubarriga.wcaquino.me/")
    }
    static insertEmail (email){
        cy.get(firstAccess.inputInsertEmail).type(email)
    }
    static insertPassword (password){
        cy.get(firstAccess.inputInsertPassword).type(password)
    }
    static clickToEnter (){
        cy.get(firstAccess.buttonToEnter).click()
    }
    static validationWelcome(){
        cy.get(firstAccess.divMessageSuccess).should('have.text','Bem vindo, Will!')
    }
}

export default FirstAccessAccount