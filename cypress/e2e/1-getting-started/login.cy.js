import FirstAccessAccount from "../../../suport/login/login";

describe("Primeiro acesso",()=>{
    it("Cenário de primeiro acesso à plataforma", ()=>{
      FirstAccessAccount.accessAccount()
      FirstAccessAccount.insertEmail("teste@wteste.com")
      FirstAccessAccount.insertPassword("102030")
      FirstAccessAccount.clickToEnter()
      FirstAccessAccount.validationWelcome()
    })
})
