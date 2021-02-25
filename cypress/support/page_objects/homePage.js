import HomeElements from '../elements/homeElements'
const homeElements = new HomeElements()
const url = Cypress.config("baseUrl")

class HomePage {

    // Acessa o site
    acessarSite() {
        cy.visit(url)
    }

    // Pesquisa um produto
    pesquisarProduto(produto) {
        cy.get(homeElements.inputPesquisa()).should('be.visible').type(produto)
        cy.get(homeElements.botaoPesquisa()).should('be.visible').click()
    }

    // Adiciona o primeiro produto da pesquisa ao carrinho
    adicionarPrimeiroProdutoAoCarrinho() {
        cy.xpath(homeElements.botaoAddProdutoCarrinho()).should('be.visible').click()
    }

    // Procede para o carrinho para conferência do pedido
    acessarCarrinho() {
        cy.get(homeElements.botaoProceedCheckout()).should('be.visible').click()
    }
}

export default HomePage