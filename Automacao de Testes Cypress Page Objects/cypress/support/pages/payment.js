import { faker } from '@faker-js/faker';

class Payment {
    confirmaPaymentMethod = '.payment-group > .step-title'
    confirmaOrderSummary = 'span.title'
    btnPaymentMethod = '.payment-method-content > .actions-toolbar > div.primary > .action'
    confirmaCompra = '.base'

    confirmarMetodoPagamento(){
        cy.get(this.confirmaPaymentMethod).should('have.text', 'Payment Method')
    }

    confirmarDetalhePedido(){
        cy.get(this.confirmaOrderSummary).should('have.text', 'Order Summary')
        cy.wait(2000)
    }

    finalizarPagamento(){
        cy.get(this.btnPaymentMethod).click()
    }

    confirmarCompraFeita(){
        cy.get(this.confirmaCompra).should('have.text', 'Thank you for your purchase!')
    }
}
export default Payment