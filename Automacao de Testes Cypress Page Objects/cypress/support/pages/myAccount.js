import { faker } from '@faker-js/faker';

class MyAccount {
    confirmaPage = '.base'
    confirmaAddressBook = '.block-dashboard-addresses > .block-title > strong'
    confirmaDefaultBillAdd = '.box-billing-address > .box-title > span'
    btnEditAddress = '.box-billing-address > .box-actions > .action > span'

    confirmarPage(){
        cy.get(this.confirmaPage).should('have.text', 'My Account')
    }

    confirmarAddressBook(){
        cy.get(this.confirmaAddressBook).should('have.text', 'Address Book')
    }

    confirmarDefaultBillAdd(){
        cy.get(this.confirmaDefaultBillAdd).should('have.text', 'Default Billing Address')
    }

    editarEndereco(){
        cy.get(this.btnEditAddress).click()
    }
}
export default MyAccount