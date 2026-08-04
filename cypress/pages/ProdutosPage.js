class ProdutosPage {

    adicionarPrimeiroProdutoAoCarrinho() {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    }
}

export default new ProdutosPage()   