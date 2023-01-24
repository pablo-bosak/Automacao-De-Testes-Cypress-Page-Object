import { faker } from '@faker-js/faker';

class Carrinho {

    btnCart = '.showcart'
    confirmaShoppingCart = '.base'
    confirmaSummary = '.summary'
    btnSummary = '#block-shipping > .title'
    confirmaItem = '.item > span'
    confirmaSubtotal = 'thead > tr > .subtotal > span'
    confirmaOrderTotal = '.mark > strong'
    btnProceedToCheckout = '.checkout-methods-items > :nth-child(1) > .action'

    selecionarCarrinho(){
        cy.get(this.btnCart).click()                       
    }

    confirmarPaginaCarrinho(){
        cy.get(this.confirmaShoppingCart).should('have.text', 'Shopping Cart')
    }

    confirmarSummary(){
        cy.get(this.confirmaSummary).should('have.text', 'Summary')
    }

    detalhesSummary(){
        cy.get(this.btnSummary).click()
        cy.wait(500)
    }

    confirmarItem(){
        cy.get(this.confirmaItem).should('have.text', 'Item')
    }

    confirmarSubtotal(){
        cy.get(this.confirmaSubtotal).should('have.text', 'Subtotal')
        cy.wait(6000)
    }

    confirmarTotalPedido(){
        cy.get(this.confirmaOrderTotal).should('have.text', 'Order Total')
    }

    confirmarPedido(){
        cy.get(this.btnProceedToCheckout).click()
        cy.wait(6000)
    }
}
export default Carrinho