import firstRegister from "./elements";

class FirstRegister{
static accessNewRegister(){
    cy.visit("/cadastro")
}
static insertName (name){
    cy.get(firstRegister.inputInsertName).type(name)
}
static insertEmail(email){
    cy.get(firstRegister.inputInsertEmail).type(email)
}
static insertPassword(password){
    cy.get(firstRegister.inputInsertPassword).type(password)
}
static clickButtonRegister (){
    cy.get(firstRegister.inputClickRegister).click()
}
static validationSuccessMessage(){
    cy.get(firstRegister.divMessageSuccesRegister).should('have.text','Usuário inserido com sucesso')
}
}
export default FirstRegister