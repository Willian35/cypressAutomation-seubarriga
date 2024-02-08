import validationTabbar from "./elements";

class TabbarNavigation {
    static accessAddAcount() {
        cy.visit("/addConta")
    }
    static accessListAccount() {
        cy.visit("/contas")
     }
     static visitCreatMoviment(){
        cy.visit("/movimentacao")
    }
    static accessMonthlySummary(){
        cy.visit('/extrato')
    }
    static accessHome(){
        cy.visit('https://seubarriga.wcaquino.me/')
    }
    static clickLogout(){
        cy.visit('/logout')
    }
    static validationUrl(){
        cy.visit('/logout')
    }
    static accessLogin(){
        cy.visit('/login')
    }
    static accessNewRegister(){
        cy.visit('/cadastro')
    }
    

}
export default TabbarNavigation