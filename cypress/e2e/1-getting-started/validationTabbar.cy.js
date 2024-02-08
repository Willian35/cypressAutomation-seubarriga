import TabbarNavigation from "../../../suport/validationTabbar/validationTabbar";

describe("Validar barra de navegação",()=>{
   it("Acessar todas as rotas da barra de navegação",()=>{
    TabbarNavigation.accessNewRegister()
    TabbarNavigation.accessLogin()
    cy.login()
    TabbarNavigation.accessAddAcount()
    TabbarNavigation.accessListAccount()
    TabbarNavigation.visitCreatMoviment()
    TabbarNavigation.accessMonthlySummary()
    TabbarNavigation.accessHome()
    TabbarNavigation.clickLogout()
    TabbarNavigation.validationUrl()
   }) 

})