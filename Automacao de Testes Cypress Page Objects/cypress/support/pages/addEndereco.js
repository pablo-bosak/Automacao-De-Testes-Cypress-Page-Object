import { faker } from '@faker-js/faker';

class AddEndereco {
    confirmaPage = '.base'
    confirmaContactInfo = ':nth-child(1) > .legend > span'
    inputPhone = '#telephone'
    confirmaCampoAddress = ':nth-child(2) > .legend > span'
    inputCountry = '#country'
    inputRegion = '#region_id'
    inputCity = '#city'
    inputZipCode = '#zip'
    inputStreet = '#street_1'
    btnConfirmaAddress = '#form-validate > .actions-toolbar > div.primary > .action'
    confirmaPageAddressBook = '.base'

    confirmarAddressPage(){
        cy.get(this.confirmaPage).should('have.text', 'Add New Address')
    }

    confirmarCampoContactInfo(){
        cy.get(this.confirmaContactInfo).should('have.text', 'Contact Information')
    }

    preencherTelefone(){
        cy.get(this.inputPhone).type(faker.phone.phoneNumber())
    }

    confirmarCampoAdrress(){
        cy.get(this.confirmaCampoAddress).should('have.text', 'Address')
    }

    preencherPais(){
        cy.get(this.inputCountry).select('Brazil')
    }

    preencherEstado(){
        cy.get(this.inputRegion).select('Rio de Janeiro')
    }

    preencherCidade(){
        cy.get(this.inputCity).type('Rio de Janeiro')
    }

    preencherCep(){
        cy.get(this.inputZipCode).type(faker.address.zipCode())
    }

    preencherRua(){
        cy.get(this.inputStreet).type(faker.address.streetName())
    }

    confirmarCadasrtro(){
        cy.get(this.btnConfirmaAddress).click()
    }

    confirmarPageAddBook(){
        cy.get(this.confirmaPageAddressBook).should('have.text','Address Book')
    }
}
export default AddEndereco