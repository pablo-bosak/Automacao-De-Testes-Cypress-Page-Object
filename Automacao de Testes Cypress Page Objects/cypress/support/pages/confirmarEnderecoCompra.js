import { faker } from '@faker-js/faker';

class ConfirmarEnderecoCompra{
    confirmaShippingAddressPage = '#shipping > .step-title'
    confirmaShippingMethods = '.checkout-shipping-method > .step-title'
    btnNext = '.button'

    confirmarEnderecoEnvio(){
        cy.get(this.confirmaShippingAddressPage).should('have.text', 'Shipping Address')
    }

    confirmaMetodoEnvio(){
        cy.get(this.confirmaShippingMethods).should('have.text', 'Shipping Methods')
    }
    
    selecionarProximoPasso(){
        cy.get(this.btnNext).click()
        cy.wait(5000)
    }    
}
export default ConfirmarEnderecoCompra
