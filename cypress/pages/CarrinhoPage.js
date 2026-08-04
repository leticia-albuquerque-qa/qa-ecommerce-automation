class CarrinhoPage {
    acessarCarrinho() {
        cy.get('.shopping_cart_link').click()
    }   

}

export default new CarrinhoPage()