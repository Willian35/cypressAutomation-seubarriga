import createMovement from "./elements";

class CreateTypeMovement{
    static visitCreatMoviment(){
        cy.visit("/movimentacao")
    }
    static selectMovement(receita){
        cy.get(createMovement.selectTypeMovement).select(receita)
    }
    static insertMovementDate (data){
        cy.get(createMovement.inputMovementDate).type(data)
    }
    static insertPayDay(data){
        cy.get(createMovement.inputDayPay).type(data)
    }
    static insertDescripition(descricao){
        cy.get(createMovement.inputDescripition).type(descricao)
    }
    static insertInterested (interecado){
        cy.get(createMovement.inputInterested).type(interecado)
    }
    static insertValue(valor){
        cy.get(createMovement.inputValue).type(valor)
    }
    static selecAnAccount(nome){
        cy.get(createMovement.selectAccount).select(nome)
    }
    static chooseTypeOfSituationPay(){
        cy.get(createMovement.labelPaidStatus).check()
    }
    static clickSave (){
        cy.get(createMovement.buttonSaveRegister).click()
    }
    static chooseTypeOfSituationPending(){
        cy.get(createMovement.labelPendingStatus).check()
    }
    static validationSuccessMessage(){
        cy.get(createMovement.divMessageSuccessMovement).should('have.text','Movimentação adicionada com sucesso!')
    }

}
export default CreateTypeMovement