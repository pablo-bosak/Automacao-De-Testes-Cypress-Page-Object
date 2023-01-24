import { faker } from '@faker-js/faker';

class NovoCadastro {
    confirmaPage = '.base'
    personaInfo = '.info > .legend > span'
    inputFirstName = '#firstname'
    inputLastName = '#lastname'
    singinInfo = '.account > .legend > span'
    inputEmail = '#email_address'
    inputSenha = '#password'
    inputConfirmSenha = '#password-confirmation'
    btnConfirmacao = '#form-validate > .actions-toolbar > div.primary > .action'

    confirmarPage() {
        cy.get(this.confirmaPage).should('have.text', 'Create New Customer Account')
    }

    confirmInfoPessoal(){
        cy.get(this.personaInfo).should('have.text','Personal Information')
    }

    preencherFirstName(){
       cy.get(this.inputFirstName).type(faker.name.firstName()) 
    }

    preencherLastName(){
        cy.get(this.inputLastName).type(faker.name.lastName())
    }

    confirmarSiginInfo(){
        cy.get(this.singinInfo).should('have.text', 'Sign-in Information')
    }

    preencherEmail(){
        cy.get(this.inputEmail).type(faker.internet.email())    
    }

    preencherSenha(){
        cy.get(this.inputSenha).type('Senha12345678.')
    }

    preencherConfirmaSenha(){
        cy.get(this.inputConfirmSenha).type('Senha12345678.')
    }

    confirmarCadastro(){
        cy.get(this.btnConfirmacao).click()
    }
}
export default NovoCadastro