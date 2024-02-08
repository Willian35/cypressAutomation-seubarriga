import monthlySummary from "./elements";

class Summary {
    static accessMonthlySummary(){
        cy.visit('/extrato')
    }
    static selectMonth(nome){
        cy.wait(2000)
        cy.get(monthlySummary.selectMonth).select(nome)
    }
    static selectYear(ano){
        cy.get(monthlySummary.selectYear).select(ano)
    }
    static clickButtonSearch(){
        cy.get(monthlySummary.inputSearch).click()
    }
    static clickDelete(){
        cy.wait(1000)
        cy.get(monthlySummary.spanDelete).first().click()
    }
    static messageSuccess(){
        cy.get(monthlySummary.divMessageSuccess).should('have.text','Movimentação removida com sucesso!')
    }

}
export default Summary