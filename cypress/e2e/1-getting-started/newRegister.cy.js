import FirstRegister from '../../../suport/newRegister/newRegister';
var faker = require('faker-br');

describe("Primeiro registro", () => {
    it("Cenário de primeiro registro na plataforma", () => {
        FirstRegister.accessNewRegister()
        FirstRegister.insertName("Will")
        FirstRegister.insertEmail(faker.internet.email())
        FirstRegister.insertPassword("102030")
        FirstRegister.clickButtonRegister()
        FirstRegister.validationSuccessMessage()

    })


})
