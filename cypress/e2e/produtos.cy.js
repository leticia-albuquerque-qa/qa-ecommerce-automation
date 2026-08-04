import LoginPage from '../pages/LoginPage'
import ProdutosPage from '../pages/ProdutosPage'

describe('Teste da página de produtos', () => {

    beforeEach(() => { 
        LoginPage.acessarSite()
        LoginPage.preencherUsuario('standard_user')
        LoginPage.preencherSenha('secret_sauce')
        LoginPage.clicarBotaoLogin()
    })

    // Validar lista de produtos
    it('Deve exibir a lista de produtos', () => {
    cy.get('.title').should('have.text', 'Products')
    cy.get('.inventory_item').should('have.length', 6)
    })

    // Adicionar produto ao carrinho
    it('Deve adicionar um produto ao carrinho', () => {
    ProdutosPage.adicionarPrimeiroProdutoAoCarrinho()
    cy.get('.shopping_cart_badge').should('have.text', '1')
    })

})
