import { faker } from '@faker-js/faker';

class PaginaInicial {
    url = 'https://magento.softwaretestingboard.com/'
    confirmaPageInicial = '.content > p'
    btnCreateAccount = '.panel > .header > :nth-child(3) > a'
    
    acessar(){
        cy.visit(this.url)
    }

    confirmarPageInicial(){
        cy.get(this.confirmaPageInicial).should('have.text', 'This is a demo store. No orders will be fulfilled.')
    }

    selecionarCriarConta(){
        cy.get(this.btnCreateAccount).click()
    }
}
export default PaginaInicial