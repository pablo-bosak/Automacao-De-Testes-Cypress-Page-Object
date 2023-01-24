import { faker } from '@faker-js/faker';


class Product {
    btnGear = '#ui-id-6 > :nth-child(2)'
    confirmaGearPage = '.base'
    btnWatches = 'dd > .items > :nth-child(3) > a'
    confirmaWatchesPage = '.base'
    btnSelectWatch = ':nth-child(5) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo'
    confirmaWatchPage = '.base'
    btnAddToCart = '#product-addtocart-button > span'
    btnLumaLogo = '.logo > img'

    selecionarGear(){
        cy.get(this.btnGear).click()
    }

    confirmarGearPage(){
        cy.get(this.confirmaGearPage).should('have.text','Gear')
    }

    selecionarOpcaoRelogios(){
        cy.get(this.btnWatches).click()
    }

    confirmarWatchesPage(){
        cy.get(this.confirmaWatchesPage).should('have.text','Watches')
    }

    selecionarRelogio(){
        cy.get(this.btnSelectWatch).click()
    }

    confirmarWatchPage(){
        cy.get(this.confirmaWatchPage).should('have.text','Dash Digital Watch')
        cy.wait(2000)
    }

    adicionarAoCarrinho(){
        cy.get(this.btnAddToCart).click()
    }

    irPraPaginaPrincipal(){
        cy.get(this.btnLumaLogo).click()                    
    }
}
export default Product