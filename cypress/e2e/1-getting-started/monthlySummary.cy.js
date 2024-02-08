import Summary from "../../../suport/monthlySummary/monthlySummary";
var faker = require('faker-br');

describe("Acessar o resumo mensal e realizar uma busca pelo ano e mês", () => {
    it(" realizando busca resumo mensal",()=> {
        cy.login()
        Summary.accessMonthlySummary()
        Summary.selectMonth("Janeiro")
        Summary.selectYear("2024")
        Summary.clickButtonSearch()
    })

    it(" realizando busca e excluino um dos registros",()=>{
        cy.login()
        Summary.accessMonthlySummary()
        Summary.selectMonth("Janeiro")
        Summary.selectYear("2024")
        Summary.clickButtonSearch()
        Summary.clickDelete()
        Summary.messageSuccess()
    })

})

