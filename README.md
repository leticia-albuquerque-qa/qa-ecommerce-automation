# qa-ecommerce-automation
Projeto de automação e testes End-to-End desenvolvido com Cypress utilizando o padrão Page Object Model (POM).

## Objetivo
Automatizar o fluxo principal de compra do site SauceDemo, aplicando boas práticas de automação de testes.

## Tecnologias utilizadas

- JavaScript
- Cypress
- Node.js
- Git
- GitHub

## Estrutura do projeto
```
cypress/
│
├── e2e/
│   ├── login.cy.js
│   ├── produtos.cy.js
│   ├── carrinho.cy.js
│   └── checkout.cy.js
│
├── pages/
│   ├── LoginPage.js
│   ├── ProdutosPage.js
│   ├── CarrinhoPage.js
│   └── CheckoutPage.js
```

## Cenários automatizados

### Login
- Login com usuário válido
- Login com senha inválida

### Produtos
- Validar lista de produtos
- Adicionar produto ao carrinho

### Carrinho
- Validar produto no carrinho
- Remover produto do carrinho

### Checkout
- Finalizar compra com sucesso

## Como executar o projeto
Clone o repositório:

```bash
git clone https://github.com/leticia-albuquerque-qa/qa-ecommerce-automation.git
```
Instale as dependências:

```bash
npm install
```
Execute os testes:

```bash
npx cypress open
```
ou

```bash
npx cypress run
```

## Autor

**Letícia Albuquerque**

Projeto desenvolvido para fins de estudo em Quality Assurance (QA), utilizando Cypress e o padrão Page Object Model (POM).

