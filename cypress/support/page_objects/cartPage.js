import CartElements from '../elements/cartElements'
const cartElements = new CartElements()

class CartPage {

    // Valida se está na tela de carrinho, se o produto está correto e se a quantidade está correta
    validaProdutoCarrinho(produto) {
        cy.get(cartElements.tituloCarrinho()).should('contain', 'Shopping-cart summary')

        cy.get(cartElements.quantidadeProduto()).should('have.value', 1)

        cy.xpath(cartElements.nomeProduto()).should('contain', produto)
    }
}

export default CartPage