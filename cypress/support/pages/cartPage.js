const tituloCarrinho = '#cart_title'
const nomeProduto = '.cart_item .product-name a'
const quantidadeProduto = 'input.cart_quantity_input'

class CartPage {
    getCartTitle() {
        return cy.get(tituloCarrinho)
    }

    getProductName() {
        return cy.get(nomeProduto)
    }

    getQuantity() {
        return cy.get(quantidadeProduto)
    }
}

export default CartPage