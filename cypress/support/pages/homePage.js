const inputPesquisa = '#search_query_top'
const botaoPesquisa = 'button[name=submit_search]'
const botaoAddProdutoCarrinho = '//ul[@class="product_list grid row"]/li[1]//a[@title="Add to cart"]'
const botaoProceedCheckout = 'a[title="Proceed to checkout"]'

class HomePage {
    acessarSite() {
        cy.visit('/')
    }

    pesquisarProduto(produto) {
        cy.get(inputPesquisa)
            .should('be.visible')
            .type(produto)
        cy.get(botaoPesquisa)
            .should('be.visible')
            .click()
    }

    adicionarPrimeiroProdutoAoCarrinho() {
        cy.xpath(botaoAddProdutoCarrinho)
            .should('be.visible')
            .click()
    }

    acessarCarrinho() {
        cy.get(botaoProceedCheckout)
            .should('be.visible')
            .click()
    }
}

export default HomePage