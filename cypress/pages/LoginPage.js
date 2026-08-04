class LoginPage {
    acessarSite() {
        cy.visit('https://www.saucedemo.com/')
    }   

    preencherUsuario(usuario) {
        cy.get('[data-test="username"]').type(usuario)
    }

    preencherSenha(senha) {
        cy.get('[data-test="password"]').type(senha)
    }

    clicarBotaoLogin() {
        cy.get('[data-test="login-button"]').click()
    }
}

export default new LoginPage()