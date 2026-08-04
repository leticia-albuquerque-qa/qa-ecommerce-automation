import LoginPage from '../pages/LoginPage'
import ProdutosPage from '../pages/ProdutosPage'
import CarrinhoPage from '../pages/CarrinhoPage'

describe('Teste da página do carrinho', () => {

    beforeEach(() => {  
        LoginPage.acessarSite() 
        LoginPage.preencherUsuario('standard_user')
        LoginPage.preencherSenha('secret_sauce')
        LoginPage.clicarBotaoLogin()
        ProdutosPage.adicionarPrimeiroProdutoAoCarrinho()
        CarrinhoPage.acessarCarrinho()
    })
 
     // Validar que o produto aparece no carrinho
    it('Deve exibir o produto no carrinho', () => {
    cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Backpack')
    })
   
    
})
