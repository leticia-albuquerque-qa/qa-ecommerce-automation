import LoginPage from '../pages/LoginPage'
import ProdutosPage from '../pages/ProdutosPage'
import CarrinhoPage from '../pages/CarrinhoPage'
import CheckoutPage from '../pages/CheckoutPage'

describe('Teste da página de checkout', () => {

    beforeEach(() => {
        LoginPage.acessarSite()
        LoginPage.preencherUsuario('standard_user')
        LoginPage.preencherSenha('secret_sauce')
        LoginPage.clicarBotaoLogin()
        ProdutosPage.adicionarPrimeiroProdutoAoCarrinho()
        CarrinhoPage.acessarCarrinho()
        CheckoutPage.clicarCheckout()
    })

    //Realizar checkout com sucesso
    it('Deve finalizar a compra com sucesso', () => {
        CheckoutPage.preencherPrimeiroNome('João')
        CheckoutPage.preencherSobrenome('Silva')
        CheckoutPage.preencherCEP('12345')
        CheckoutPage.clicarContinue()
        CheckoutPage.clicarFinish()
        CheckoutPage.validarMensagemSucesso()
    })

})