class CarrinhoPage {
    
    acessarCarrinho() {
        cy.get('.shopping_cart_link').click()
    }   

    removerProduto() {
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    }
}

export default new CarrinhoPage()
