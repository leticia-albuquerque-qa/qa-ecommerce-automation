class CheckoutPage {
 
    clicarCheckout() {
        cy.get('[data-test="checkout"]').click()
    }

    preencherPrimeiroNome(nome) {
        cy.get('[data-test="firstName"]').type(nome)
    }

    preencherSobrenome(sobrenome) {
        cy.get('[data-test="lastName"]').type(sobrenome)
    }

    preencherCEP(cep) {
        cy.get('[data-test="postalCode"]').type(cep)
    }

    clicarContinue() {
        cy.get('[data-test="continue"]').click()
    }

    clicarFinish() {
        cy.get('[data-test="finish"]').click()
    }

    validarMensagemSucesso() {
        cy.get('.complete-header').should('have.text', 'Thank you for your order!')
    }
    
}

export default new CheckoutPage()