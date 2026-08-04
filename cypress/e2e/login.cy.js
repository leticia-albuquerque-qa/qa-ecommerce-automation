import LoginPage from '../pages/LoginPage'

describe('Teste de acesso ao site de e-commerce', () => {

    beforeEach(() => {
        LoginPage.acessarSite()
    })


    // Teste de login com sucesso
    it('Deve realizar login com sucesso com senha válida', () => {

    LoginPage.preencherUsuario('standard_user')
    LoginPage.preencherSenha('secret_sauce')
    LoginPage.clicarBotaoLogin()
    cy.url().should('include', '/inventory.html')

    })


    // Teste de login com senha inválida
    it('Deve exibir mensagem de erro ao informar senha inválida', () => {
    
    LoginPage.preencherUsuario('standard_user')
    LoginPage.preencherSenha('senha_invalida')
    LoginPage.clicarBotaoLogin()
    cy.get('[data-test="error"]').should('be.visible').and('contain', 'Username and password do not match')

    })

})    
